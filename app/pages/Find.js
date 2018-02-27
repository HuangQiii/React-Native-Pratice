import React, { Component } from 'react';
import { View, StyleSheet, Text, Image,Dimensions,SectionList,TouchableOpacity ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
var DATA = [
    {
        key:0,
        title:'推荐办卡',
        data:[
            {
                id: 1,
                name: '广发唯品会信用卡',
                des: '200元购物优惠券',
                num: '10000',
                type: 0,
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 2,
                name: '广发东风日产车主信用卡',
                des: '刷卡累积东风日产会员积分',
                num: '10000',
                type: 0,
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
    {
        key:1,
        title:'网贷资讯',
        data:[
            {
                id: 3,
                name: '快速贷款',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 1,
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 4,
                name: '全车无忧保险',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 1,
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
    {
        key:2,
        title:'大额贷款资讯',
        data:[
            {
                id: 5,
                name: '境外旅游保险',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 2,
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 6,
                name: '国内自助游保险',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 2,
                logo: 'https://modao.cc/uploads3/images/974/9740774/raw_1495541436.jpeg',
            }
        ]
    },
    {
        key:3,
        title:'投资资讯',
        data:[
            {
                id: 7,
                name: '平安e家保',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 2,
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 8,
                name: '关爱女神综合保障',
                des: '网销底价，多重好礼，专项理财，更多收益',
                type: 2,
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
];
export default class Find extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `发现`,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-search" size={15} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            data:DATA,
        };
    }

    componentDidMount() {
    }

    keyExtractor = (project, index) => index;

    renderListHeader(list) {
        return (
            <View style={{height:40,justifyContent:'center',backgroundColor:'#eee'}}>
                <Text style={{color:'#98A5AB',fontSize:16,marginLeft:10,}}>
                    {list.section.title}
                </Text>
            </View>
        )
    }

    renderList(list) {
        console.log(list);
        const item = list.item;
        return (
            <View style={{ flexDirection: 'row', height: 120, borderTopWidth: 1, borderTopColor: '#eee' }}>
                <View style={{ width: 140, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ overflow: 'hidden', width: 120, height: 90,  backgroundColor: 'red' }}>
                        <Image resizeMode='stretch' style={{ width: 120, height: 90, }} source={{ uri: item.logo }} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, marginRight:20,}}>
                    {
                        item.type === 0 ?
                        <View>
                            <Text style={{ color: '#101010', fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
                            <Text style={styles.listTextNormal}>{item.des}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listTextHightLight}>{item.num}</Text>
                                <Text style={styles.listTextNormal}>人本月申请</Text>
                            </View>
                        </View>
                        :
                        null               
                    }
                    {
                        item.type === 1?
                        <View>
                            <Text style={{ color: '#101010', fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
                            <Text style={styles.listTextNormal}>{item.des}</Text>
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize:16,color:'#ED6136'}}>免费阅读</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        null
                    }
                    {
                        item.type === 2?
                        <View>
                            <Text style={{ color: '#101010', fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
                            <Text style={styles.listTextNormal}>{item.des}</Text>
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity>
                                    <Text style={{fontSize:16,color:'#ED6136'}}>加入会员阅读</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        null
                    }
                </View>
                {/*<View style={{ width: 30, justifyContent: 'center' }}>
                    <Icon name="ios-arrow-forward" size={25} color={'#B8B8B8'} />
                </View>*/}
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{height:116,}}>
                    <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://modao.cc/uploads3/images/972/9722742/raw_1495518328.jpeg' }} />
                </View>
                <View style={{height:88,backgroundColor:'#fff',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:88,height:88,alignItems:'center',justifyContent:'center',}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#F06269',alignItems:'center',justifyContent:'center',}}>
                            <Icon name="md-link" size={15} color={'#fff'} />
                        </View>
                        <Text style={{fontSize:12,marginTop:5,}}>普通会员</Text>
                    </View>
                    <View style={{width:88,height:88,alignItems:'center',justifyContent:'center',}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#738FFE',alignItems:'center',justifyContent:'center',}}>
                            <Icon name="md-cafe" size={15} color={'#fff'} />
                        </View>
                        <Text style={{fontSize:12,marginTop:5,}}>白银会员</Text>
                    </View>
                    <View style={{width:88,height:88,alignItems:'center',justifyContent:'center',}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#F7D460',alignItems:'center',justifyContent:'center',}}>
                            <Icon name="md-umbrella" size={15} color={'#fff'} />
                        </View>
                        <Text style={{fontSize:12,marginTop:5,}}>黄金会员</Text>
                    </View>
                    <View style={{width:88,height:88,alignItems:'center',justifyContent:'center',}}>
                        <View style={{width:40,height:40,borderRadius:20,backgroundColor:'#6BA9E8',alignItems:'center',justifyContent:'center',}}>
                            <Icon name="md-glasses" size={15} color={'#fff'} />
                        </View>
                        <Text style={{fontSize:12,marginTop:5,}}>白金会员</Text>
                    </View>
                </View>
                <SectionList
                    keyExtractor={this.keyExtractor}
                    renderSectionHeader={this.renderListHeader.bind(this)}
                    renderItem={this.renderList.bind(this)}
                    //onRefresh={this._onRefresh.bind(this)}
                    //refreshing={this.state.isRefreshing}
                    sections={this.state.data}
                />
            </View >
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    },
    image: {
        width: width,
        flex: 1
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