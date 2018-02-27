import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, SectionList, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Block from '..//components/Block';
import Line from '../components/Line';

const { width, height } = Dimensions.get('window');
var DATA = [
    {
        key:0,
        title:'股票资讯',
        data:[
            {
                id: 1,
                name: '9月最新牛股推荐',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 2,
                name: '每日晨报',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
    {
        key:1,
        title:'基金资讯',
        data:[
            {
                id: 3,
                name: '9月最新牛股推荐',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 4,
                name: '每日晨报',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
    {
        key:2,
        title:'外汇资讯',
        data:[
            {
                id: 5,
                name: '9月最新牛股推荐',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 6,
                name: '每日晨报',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
    {
        key:3,
        title:'期货资讯',
        data:[
            {
                id: 7,
                name: '9月最新牛股推荐',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/974/9740786/raw_1495541442.jpeg',
            },
            {
                id: 8,
                name: '每日晨报',
                des: '网销底价，多重好礼，专项理财，更多收益',
                from:'网商银行',
                time: '2017-0-11',
                logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
            }
        ]
    },
];
export default class Invest extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `投资`,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-list" size={15} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
        this.state = {
            swiperShow: false,
            data:DATA,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ swiperShow: true });
        }, 0)
    }

    keyExtractor = (project, index) => index

    renderSwiper = () => {
        if (this.state.swiperShow) {
            return (
                <Swiper height={150}
                    dot={<View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#FFFFFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 10, right: 10, left: null,
                    }}
                    loop={true}
                    autoplay={false}
                    horizontal={true}
                    index={0}
                    autoplayTimeout={5}
                >
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 1</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://modao.cc/uploads3/images/1188/11886739/raw_1502819641.jpeg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 2</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://modao.cc/uploads3/images/984/9844064/raw_1495805569.jpeg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 3</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://modao.cc/uploads3/images/984/9847901/raw_1495848926.jpeg' }} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Title for 4</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={{ uri: 'https://modao.cc/uploads3/images/984/9847896/raw_1495848913.jpeg' }} />
                    </View>
                </Swiper>
            );
        } else {
            return <View style={{ height: 150, }}></View>;
        }
    }

    renderListHeader(list) {
        return (
            <Line 
                text={list.section.title}
            />
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
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 10, }}>
                    <Text style={{ color: '#101010', fontSize: 16, marginBottom: 5 }}>{item.name}</Text>
                    <Text style={styles.listTextNormal}>{item.des}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>发布机构：</Text>
                        <Text style={styles.listTextHightLight}>{item.from}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>发布时间： </Text>
                        <Text style={styles.listTextHightLight}>{item.time}</Text>
                    </View>
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
                <View style={styles.block}>
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'购物'}
                            content={'购物优惠'}
                            pic={'https://modao.cc/uploads3/images/974/9740779/raw_1495541439.jpeg'}
                            borderRadius={5}
                            bgColor={'#FFAA54'}
                            icon={'md-trending-up'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'基金'}
                            content={'花钱更聪明'}
                            pic={'https://modao.cc/uploads3/images/974/9740774/raw_1495541436.jpeg'}
                            borderRadius={5}
                            bgColor={'#F57373'}
                            icon={'md-cash'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'外汇'}
                            content={'权益我专属'}
                            pic={'https://modao.cc/uploads3/images/974/9740782/raw_1495541441.jpeg'}
                            borderRadius={5}
                            bgColor={'#B489F0'}
                            icon={'md-pie'}
                        />
                        <Block
                            width={width}
                            height={152}
                            col={2}
                            row={2}
                            marginLeft={15}
                            marginTop={15}
                            title={'期货'}
                            content={'加油有返现'}
                            pic={'https://modao.cc/uploads3/images/974/9740780/raw_1495541440.jpeg'}
                            borderRadius={5}
                            bgColor={'#959DF5'}
                            icon={'md-stats'}
                        />
                </View>
                <Line 
                    text={'推荐'}
                />
                <View>
                    {this.renderSwiper()}
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
    block: {
        height: 152,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: width,
        flex: 1
    },
    listTextNormal: {
        color: '#999999',
        fontSize: 12
    },
    listTextHightLight: {
        color: '#A5BFCD',
        fontSize: 12
    }
});