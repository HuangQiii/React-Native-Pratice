import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, ListView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
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
        logo: 'https://modao.cc/uploads3/images/1188/11887180/raw_1502844093.jpeg',
    },
    {
        id: 2,
        name: '现金贷',
        des: '适合短期贷款需求',
        numLow: 3000,
        numLarge: 6000,
        rate: 0.03,
        logo: 'https://modao.cc/uploads3/images/1188/11887222/raw_1502844459.jpeg',
    },
    {
        id: 3,
        name: '现金贷款小额贷',
        des: '信用换现金',
        numLow: 3000,
        numLarge: 30000,
        rate: 0.026,
        logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
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
            swiperShow: false,
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
        setTimeout(() => {
            this.setState({ swiperShow: true });
        }, 0)
    }

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


    renderList(list) {
        return (
            <View style={{ flexDirection: 'row', height: 110, borderTopWidth: 1, borderTopColor: '#eee' }}>
                <View style={{ width: 110, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ overflow: 'hidden', width: 80, height: 80, borderRadius: 10, backgroundColor: 'red' }}>
                        <Image resizeMode='stretch' style={{ width: 80, height: 80, }} source={{ uri: list.logo }} />
                    </View>
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
                <View style={{ width: 30, justifyContent: 'center' }}>
                    <Icon name="ios-arrow-forward" size={25} color={'#B8B8B8'} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        {this.renderSwiper()}
                    </View>
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
                            pic={'https://modao.cc/uploads3/images/974/9740779/raw_1495541439.jpeg'}
                            titleColor={'#012A36'}
                            contentColor={'#607D8B'}
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
                            pic={'https://modao.cc/uploads3/images/974/9740774/raw_1495541436.jpeg'}
                            titleColor={'#012A36'}
                            contentColor={'#607D8B'}
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
                            pic={'https://modao.cc/uploads3/images/974/9740782/raw_1495541441.jpeg'}
                            titleColor={'#012A36'}
                            contentColor={'#607D8B'}
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
                            pic={'https://modao.cc/uploads3/images/974/9740780/raw_1495541440.jpeg'}
                            titleColor={'#012A36'}
                            contentColor={'#607D8B'}
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
                        <Text style={{ margin: 5, marginLeft: 10, }}>精选贷款</Text>
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
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: width,
        flex: 1
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