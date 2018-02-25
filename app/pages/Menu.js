import React, { Component } from 'react';
import { ScrollView, AppState, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity, ListView, DeviceEventEmitter, Alert, ToastAndroid, NativeModules, NetInfo } from 'react-native';
import List from '../components/List';
import Loading from '../components/Loading';
import deepCopy from '../utils/CopyUtil';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
let CONNECT_BOOL, token = baseUrl = appVersionId = '', ARRAY_TEMP = [];
export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userHeadImage: 'http://devops-total.digital.saas.carllhw.com/img_72e6ed90.jpg',
            userName: '',
            userEmail: '',
            organizationShow: false,
            currentOrganization: {},
            organizationsSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
            currentProject: {},
            latestProjectsSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => true }),
            currentBundle: {},
            bundlesSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
            downloading: [],
            loading: true,
        };
    }

    componentWillMount() {
        AppState.addEventListener(
            'change',
            (appState) => { this.handleAppStateChange(appState) }
        );
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            (isConnected) => { this.handleIsConnectedChange(isConnected) }
        );
        DeviceEventEmitter.addListener(
            'chooseProject',
            (project) => { this.selectProject(project); }
        );
    }

    componentDidMount() {
        NativeModules.NativeManager.getConfigData((back) => {
            [baseUrl, token, appVersionId] = [back.mainUrl, back.token, back.appVersionId == null ? -1 : back.appVersionId];
            NativeModules.NativeManager.checkBundleConfigUpdate();
            this.getMessage();
        });

    }

    componentWillUnmount() {
        DeviceEventEmitter.removeAllListeners('chooseProject');
        AppState.removeEventListener('change', this.handleAppStateChange);
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleIsConnectedChange);
    }

    handleIsConnectedChange(isConnected) {
        if (CONNECT_BOOL === false && isConnected === true) {
            NativeModules.NativeManager.checkBundleConfigUpdate();
            this.getMessage();
        }
        CONNECT_BOOL = isConnected;
    }

    handleAppStateChange(appState) {
        if (appState != 'active') {
            this.writeUserConfig();
        }
    }

    getMessage() {
        this.getUserMessage();
        this.getUserConfig();
        this.getBundles();
    }

    getUserMessage() {
        let url = baseUrl + '/uaa/v1/users/querySelf';
        fetch(url, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.userImage != null) {
                    this.setState({
                        userHeadImage: responseData.userImage,
                    })
                }
                this.setState({
                    userName: responseData.name,
                    userEmail: responseData.email,
                })

                let url = baseUrl + "/uaa/v1/organizations/" + responseData.organizationId
                fetch(url, {
                    headers: {
                        "Authorization": token
                    }
                })
                    .then((res) => res.json())
                    .then((resData) => {
                        this.setState({
                            currentOrganization: resData
                        })
                    })
            })

    }

    getUserConfig() {
        NativeModules.NativeManager.getUserConfig((back) => {
            let latest = back.latestProjects != undefined ? back.latestProjects : [];
            this.setState({
                currentProject: {},
                latestProjectsSource: this.state.latestProjectsSource.cloneWithRows(latest)
            });
            ARRAY_TEMP = deepCopy(latest);
        })
    }

    getBundles() {
        var objHome = {};
        [objHome.id, objHome.name, objHome.nameCn, objHome.iconName] = [-1, 'mainbundle', '首页', 'md-home'];
        var arr = [];
        arr.push(objHome);
        var url = baseUrl + '/mobileCloud/v1/bundle/getData/' + appVersionId;
        fetch(url, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("*********模块");
                console.log(responseData);
                if (responseData.error == undefined) {
                    arr = arr.concat(responseData);
                    this.setState({
                        loading: false,
                        bundlesSource: this.state.bundlesSource.cloneWithRows(arr),
                    });
                } else if (responseData.error == "invalid_token") {
                    ToastAndroid.show("登录失效", ToastAndroid.SHORT);
                    this.openLogin();
                } else if (responseData.error == "invalid appVersionId") {
                    console.log("appversionId错误")
                    NativeModules.NativeManager.getConfigData((back) => {
                        if (back.appVersionId == null) {
                            appVersionId = -1;
                        } else {
                            appVersionId = back.appVersionId;
                        }
                        console.log(appVersionId);
                        this.getBundles();
                    });
                } else {
                    this.setState({
                        loading: false,
                        bundlesSource: this.state.bundlesSource.cloneWithRows(arr),
                    });
                }
            });
    }

    getOrganizations() {
        let url = baseUrl + '/uaa/v1/menus/select';
        fetch(url, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                if (responseData.error == undefined) {
                    this.setState({
                        organizationsSource: this.state.organizationsSource.cloneWithRows(responseData.organizations)
                    })
                } else if (responseData.error == "invalid_token") {
                    ToastAndroid.show("登录失效", ToastAndroid.SHORT);
                    this.openLogin();
                } else {
                    ToastAndroid.show("网络错误", ToastAndroid.SHORT);
                }
            });
    }

    selectOrganization(organization) {
        this.setState({
            currentOrganization: organization,
            currentProject: {},
            organizationShow: !this.state.organizationShow
        })
        if (this.state.currentBundle.id != undefined) {
            this.openBundle(this.state.currentOrganization.id, '', this.state.currentBundle.name, this.state.currentOrganization.name)
        }
        this.writeUserConfig();
    }

    selectProject(project) {
        const pos = ARRAY_TEMP.findIndex(x => x.id == project.id);
        let orgId;
        if (pos === -1) {
            let obj = {};
            [obj.id, obj.name, obj.organization] = [project.id, project.name, deepCopy(this.state.currentOrganization)];
            ARRAY_TEMP = ARRAY_TEMP.unshift(obj) > 4 ? ARRAY_TEMP.splice(0, 4) : ARRAY_TEMP;
            this.setState({
                currentProject: obj,
                latestProjectsSource: this.state.latestProjectsSource.cloneWithRows(ARRAY_TEMP),
            });
            orgId = this.state.currentOrganization.id;
        } else if (pos === 0) {
            this.setState({
                currentProject: ARRAY_TEMP[0],
                currentOrganization: ARRAY_TEMP[0].organization
            });
            orgId = ARRAY_TEMP[0].organization.id;
        } else {
            const selectedProject = deepCopy(ARRAY_TEMP[pos]);
            ARRAY_TEMP.splice(pos, 1);
            ARRAY_TEMP.unshift(selectedProject);
            this.setState({
                currentProject: selectedProject,
                currentOrganization: selectedProject.organization,
                latestProjectsSource: this.state.latestProjectsSource.cloneWithRows(ARRAY_TEMP),
            });
            orgId = selectedProject.organization.id;
        }
        if (this.state.currentBundle.id != undefined) {
            this.openBundle(orgId, project.id, this.state.currentBundle.name, project.name)
        }
        this.writeUserConfig();
    }

    selectBundle(bundle) {
        let orgId = this.state.currentOrganization.id != undefined ? this.state.currentOrganization.id : -1;
        let proId = this.state.currentProject.id != undefined ? this.state.currentProject.id : -1;
        let showName = this.state.currentProject.id != undefined ? this.state.currentProject.name : this.state.currentOrganization.name;
        //判断是否下载
        let obj = {};
        [obj.orgId, obj.proId, obj.showName] = [orgId, proId, showName];
        NativeModules.NativeManager.openBundle(bundle.name, obj, (type, result) => {
            if (type == 'opened') {
                this.setState({
                    currentBundle: bundle
                });
            } else {
                let title = ""
                if (type == "update") {
                    title = "发现新版本,是否升级?"
                } else {
                    title = "未安装应用，是否安装？"
                }
                Alert.alert(
                    title,
                    result,
                    [
                        {
                            text: '是',
                            onPress: () => {
                                NetInfo.fetch().done((connectionInfo) => {
                                    if (connectionInfo == 'WIFI') {
                                        var arr = this.state.downloading.concat();
                                        arr.push(bundle.id);
                                        this.setState({
                                            downloading: arr
                                        });
                                        NativeModules.NativeManager.downloadAndOpenBundle(bundle.name, bundle.id, bundle.currentVersion, bundle.downloadUrl, (type, result) => {
                                            var arr = this.state.downloading;
                                            arr.splice(arr.indexOf(bundle.id), 1);
                                            this.setState({
                                                downloading: arr
                                            });
                                            if (type == "netError") {
                                                Alert.alert("网络或服务器出错，请重启软件再尝试！");
                                            } else if (type == "success") {
                                                ToastAndroid.show("下载成功!", ToastAndroid.SHORT);
                                            } else {
                                                ToastAndroid.show(result, ToastAndroid.SHORT);
                                            }
                                        });
                                    } else {
                                        Alert.alert(
                                            "提示",
                                            "当前正在使用非wifi连接下载，确定要下载吗？",
                                            [
                                                {
                                                    text: '是',
                                                    onPress: () => {

                                                        var arr = this.state.downloading.concat();
                                                        arr.push(bundle.id);
                                                        this.setState({
                                                            downloading: arr
                                                        });
                                                        NativeModules.NativeManager.downloadAndOpenBundle(bundle.name, bundle.id, bundle.currentVersion, bundle.downloadUrl, (type, result) => {
                                                            var arr = this.state.downloading;
                                                            arr.splice(arr.indexOf(bundle.id), 1);
                                                            this.setState({
                                                                downloading: arr
                                                            });
                                                            if (type == "netError") {
                                                                Alert.alert("网络或服务器出错，请重启软件再尝试！");
                                                            } else if (type == "success") {
                                                                ToastAndroid.show("下载成功!", ToastAndroid.SHORT);

                                                            } else {
                                                                ToastAndroid.show(result, ToastAndroid.SHORT);
                                                            }
                                                        });
                                                    }
                                                },
                                                {
                                                    text: '否'
                                                }
                                            ]
                                        )
                                    }
                                });
                            }
                        },
                        {
                            text: '否'
                        }
                    ]
                );
            }
        });
    }

    renderLatestProject(project) {
        const bgColor = project.id == this.state.currentProject.id ? '#F3F3F3' : '#FEFEFE';
        const disable = project.id == this.state.currentProject.id ? true : false;
        return (
            <List
                text={project.name}
                bgColor={bgColor}
                disable={disable}
                onPress={() => this.selectProject(project)}
            />
        )
    }

    renderBundle(bundle) {
        const bgColor = bundle.id == this.state.currentBundle.id ? '#F3F3F3' : '#FEFEFE';
        const disable = bundle.id == this.state.currentBundle.id || this.state.downloading.indexOf(bundle.id) >= 0 ? true : false;
        const downloading = this.state.downloading.indexOf(bundle.id) >= 0 ? true : false;
        return (
            <List
                text={bundle.nameCn}
                leftIconName={bundle.iconName}
                listHeight={46}
                bgColor={bgColor}
                disable={disable}
                onPress={() => this.selectBundle(bundle)}
                downloading={downloading}
            />
        );
    }

    renderOrganization(organization) {
        const bgColor = organization.id == this.state.currentOrganization.id ? '#F3F3F3' : '#FEFEFE';
        return (
            <List
                text={organization.name}
                bgColor={bgColor}
                onPress={() => this.selectOrganization(organization)}
            />
        );
    }

    writeUserConfig() {
        let obj = {};
        [obj.currentOrganization, obj.currentProject, obj.latestProjects] = [this.state.currentOrganization, this.state.currentProject, deepCopy(ARRAY_TEMP)];
        NativeModules.NativeManager.writeUserConfig(obj)
    }

    openBundle(organizationId, projectId, name, showName) {
        let orgId = organizationId != undefined && organizationId != '' ? organizationId : -1;
        let proId = projectId != undefined && projectId != '' ? projectId : -1;
        let obj = {};
        [obj.orgId, obj.proId, obj.showName] = [orgId, proId, showName];
        NativeModules.NativeManager.openBundle(name, obj, (type, result) => { });
    }

    freshManual() {
        this.setState({
            loading: true
        });
        NativeModules.NativeManager.checkBundleConfigUpdate();
        this.getMessage();
    }

    openLogin() {
        NativeModules.NativeManager.openLogin();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {
                    this.state.organizationShow &&
                    <ScrollView style={{ position: 'absolute', marginTop: 137, top: 0, left: 0, width: width, height: height - 137, backgroundColor: '#FEFEFE', zIndex: 99 }}>
                        <ListView
                            dataSource={this.state.organizationsSource}
                            renderRow={this.renderOrganization.bind(this)}
                        />
                    </ScrollView>
                }
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    style={{ flex: 1, flexDirection: 'column' }}
                >
                    <View style={styles.topArea}>
                        <View style={styles.topAreaBasicInformation}>
                            <View style={[styles.topAreaBasicInformationUserImage, { height: 81 }]}>
                                <Image
                                    source={{ uri: this.state.userHeadImage }}
                                    style={styles.imageStyle}
                                />
                            </View>
                            <View style={[styles.topAreaBasicInformationUserInformation, { height: 81, justifyContent: 'flex-end' }]} >
                                <Text
                                    style={[styles.fontColorFFF, { fontSize: 16 }]}
                                    numberOfLines={1}
                                >
                                    {this.state.userName}
                                </Text>
                                <Text
                                    style={[styles.fontColorFFF, { fontSize: 14 }]}
                                    numberOfLines={1}
                                >
                                    {this.state.userEmail}
                                </Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', height: 81, paddingTop: 16 }}>
                                <TouchableOpacity onPress={() => this.freshManual()}>
                                    <View style={styles.topAreaBasicInformationSetting}>
                                        <Icon name="md-refresh" size={20} color={'#FFF'} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.openLogin()}>
                                    <View style={styles.topAreaBasicInformationSetting}>
                                        <Icon name="md-log-out" size={20} color={'#FFF'} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                if (!this.state.organizationShow) { this.getOrganizations(); }
                                this.setState({
                                    organizationShow: !this.state.organizationShow
                                });
                                _scrollView.scrollTo({ x: 0, y: 0, animated: true })
                            }}
                        >
                            <View style={styles.topAreaOrganizationInformation}>
                                <View style={[styles.verticalCenter, { flex: 1, }]}>
                                    <Text style={[styles.fontColorFFF, { fontSize: 14, marginLeft: 16 }]}>{this.state.currentOrganization.name}</Text>
                                </View>
                                <View style={[styles.verticalCenter, { width: 28, }]}>
                                    <Icon name="md-arrow-dropdown" size={30} color={'#FFF'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomArea}>
                        <List
                            text={'最近打开的项目'}
                            overlayMarginTop={4}
                            textColor={'rgba(0,0,0,0.54)'}
                            underlayColor={'transparent'}
                            activeOpacity={1}
                        />
                        <View>
                            <ListView
                                dataSource={this.state.latestProjectsSource}
                                renderRow={this.renderLatestProject.bind(this)}
                            />
                        </View>
                        <List
                            text={'全部项目'}
                            listHeight={62}
                            leftIconName={'md-menu'}
                            rightIconName={'ios-arrow-forward'}
                            onPress={() => this.props.navigation.navigate('SelectProjects', { currentOrganization: this.state.currentOrganization })}
                        />
                        <View>
                            <View style={styles.listBottomBorder}></View>
                            {
                                this.state.loading &&
                                <Loading />
                            }
                            <ListView
                                dataSource={this.state.bundlesSource}
                                renderRow={this.renderBundle.bind(this)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        flexDirection: 'column'
    },
    topArea: {
        height: 137,
        backgroundColor: '#3F51B5'
    },
    bottomArea: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topAreaBasicInformation: {
        flex: 1,
        height: 81,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    topAreaOrganizationInformation: {
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topAreaBasicInformationUserImage: {
        width: 81,
        paddingLeft: 16,
        justifyContent: 'flex-end'
    },
    topAreaBasicInformationUserInformation: {
        flex: 1,
        paddingLeft: 11,
        paddingRight: 11
    },
    topAreaBasicInformationSetting: {
        width: 28
    },
    userName: {
        flex: 1,
        height: height * 0.2,
        paddingTop: 40,
        paddingLeft: 20
    },
    userImage: {
        width: 65,
        height: 65,
        alignSelf: 'center',
        marginRight: 30
    },
    imageStyle: {
        width: 65,
        height: 65,
        borderRadius: 32.5
    },
    fontColorFFF: {
        color: '#FFF'
    },
    verticalCenter: {
        justifyContent: 'center'
    },
    listBottomBorder: {
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3',
        marginBottom: 8
    }
});