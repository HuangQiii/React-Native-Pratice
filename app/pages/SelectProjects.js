import React, { Component } from 'react';
import { View, StyleSheet, ListView, DeviceEventEmitter, NativeModules, RefreshControl } from 'react-native';
import List from '../components/List';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';

let token = "";
let baseUrl = "";
export default class SelectProjects extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.currentOrganization.name}下的所有项目`,
        headerRight: (
            <Icon.Button
                name="md-search"
                backgroundColor="transparent"
                underlayColor="transparent"
                activeOpacity={0.8}
                onPress={() => alert("功能制作中...")}
            />
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loading: true,
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
        };
    }

    componentDidMount() {
        NativeModules.NativeManager.getConfigData((back) => {
            baseUrl = back.mainUrl;
            token = back.token;
            this.getProjects();
        });
    }

    getProjects() {
        let url = baseUrl + "/uaa/v1/menus/select";
        fetch(url, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    loading: false,
                    refreshing: false
                });
                if (responseData.error == undefined) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.projects)
                    })
                } else if (responseData.error == "invalid_token") {
                    ToastAndroid.show("登录失效", ToastAndroid.SHORT);
                    this.openLogin();
                } else {
                    ToastAndroid.show("网络错误", ToastAndroid.SHORT);
                }
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    refreshing: false
                });
                ToastAndroid.show('加载失败,请检查网络', ToastAndroid.SHORT)
            });
    }

    chooseProject(project) {
        DeviceEventEmitter.emit('chooseProject', project);
        this.props.navigation.dispatch({
            key: 'Menu',
            type: 'BcakToCurrentScreen',
            routeName: 'Menu',
        });
    }

    renderProject(project) {
        return (
            <List
                text={project.name}
                onPress={() => this.chooseProject(project)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loading &&
                    <Loading />
                }
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                this.getProjects()
                            }}
                        />
                    }
                    dataSource={this.state.dataSource}
                    renderRow={this.renderProject.bind(this)}
                />
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    }
});