import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Block from '..//components/Block';
import SimpleBlock from '..//components/SimpleBlock';

const { width, height } = Dimensions.get('window');
var DATA = [
    {
        id: 1,
        name: '秒贷-极速贷',
        des: '15分钟快速审核 2小时快速贷款',
        numLow: 3000,
        numLarge: 30000,
        rate: 0.03,
    },
    {
        id: 2,
        name: '现金贷',
        des: '适合短期贷款需求',
        numLow: 3000,
        numLarge: 6000,
        rate: 0.03,
    },
    {
        id: 3,
        name: '现金贷款小额贷',
        des: '信用换现金',
        numLow: 3000,
        numLarge: 30000,
        rate: 0.026,
    }
];
export default class Main extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '贷款管家',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={15} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => { return row1 !== row2 },
            }),
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderList(list) {
        return (
            <View style={{ flexDirection: 'row', height: 110, borderTopWidth: 1, borderTopColor: '#eee' }}>
                <View style={{ width: 110, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 80, height: 80, borderRadius: 10, backgroundColor: 'red' }}></View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20, }}>
                    <Text style={{ color: '#101010', fontSize: 18, marginBottom: 5 }}>{list.name}</Text>
                    <Text style={styles.listTextNormal}>{list.des}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>贷款范围：</Text>
                        <Text style={styles.listTextHightLight}>{list.numLow} - {list.numLarge}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>日利率 </Text>
                        <Text style={styles.listTextHightLight}>{list.rate} %</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ height: 150, backgroundColor: 'red' }}></View>
                    <View style={styles.block}>
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'贷款大全'}
                            content={'总有适合你'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'投资渠道'}
                            content={'最全的投资信息'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'分享赚钱'}
                            content={'奖励不重样'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'新手专属'}
                            content={'抢先贷款'}
                        />
                    </View>
                    <View style={styles.special}>
                        <Text style={{ marginLeft: 5, marginTop: 5 }}>专题推荐</Text>
                        <ScrollView horizontal={true}>
                            <SimpleBlock
                                title={'最新'}
                                content={'20+'}
                            />
                            <SimpleBlock
                                title={'急速房贷'}
                                content={'50家'}
                            />
                            <SimpleBlock
                                title={'快速审查'}
                                content={'30家'}
                            />
                            <SimpleBlock
                                title={'校园贷'}
                                content={'40家'}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.lists}>
                        <Text style={{ marginLeft: 5, marginTop: 5 }}>精选贷款</Text>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this.renderList.bind(this)}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F2',
    },
    block: {
        height: 152,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    special: {
        height: 100,
        marginTop: 7,
        backgroundColor: '#FFF',
        paddingLeft: 5,
    },
    lists: {
        marginTop: 7,
        backgroundColor: '#FFF',
    },
    listTextNormal: {
        color: '#999999',
        fontSize: 14
    },
    listTextHightLight: {
        color: '#E51C23',
        fontSize: 14
    }
});