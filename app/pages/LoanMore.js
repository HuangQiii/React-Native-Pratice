import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions,Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width,height} = Dimensions.get('window');

export default class LoanMore extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `贷款详情`,
    });

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <View style={styles.headerHead}>
                            <Image resizeMode='stretch' style={{ width: 50, height: 50, }}  source={{uri:'https://modao.cc/uploads3/images/1003/10037631/raw_1496657304.png'}}/>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.headerTitle}>小赢卡贷-2万极速放款</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.headerIcon}>
                                    <Text style={{color:'#fff',fontSize:10,}}>放款快</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={styles.des}>
                        <Text style={{fontSize:12,}}>最低月息：0.34%</Text>
                        <Text style={{fontSize:12,}}>贷款期限：3-12个月</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>产品简介</Text>
                        <Text style={styles.more}>展开</Text>
                    </View>
                    <Text style={{fontSize:12,}}>小赢卡贷是由小赢理财转为爱生活、重信用的你定制的信用代还产品。小赢卡贷理解你账单亮红灯的心情，独具授信快、审批快、放款快的特点，堪称信用卡充电宝。</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>贷款流程</Text>
                    </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',}}>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-link" size={25} color={'gray'} />
                                <Text style={{fontSize:12,marginTop:15,}}>信息填写</Text>
                            </View>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-cafe" size={25} color={'gray'} />
                                <Text style={{fontSize:12,marginTop:15,}}>实名认证</Text>
                            </View>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-umbrella" size={25} color={'gray'} />
                                <Text style={{fontSize:12,marginTop:15,}}>电话审核</Text>
                            </View>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-glasses" size={25} color={'gray'} />
                                <Text style={{fontSize:12,marginTop:15,}}>等待放款</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>所需资料</Text>
                    </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',}}>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-link" size={25} color={'#FDAD2D'} />
                                <Text style={{fontSize:12,marginTop:15,}}>信用卡</Text>
                            </View>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-cafe" size={25} color={'#5CABF8'} />
                                <Text style={{fontSize:12,marginTop:15,}}>运营商</Text>
                            </View>
                            <View style={{padding:10,alignItems:'center',justifyContent:'center',}}>
                                    <Icon name="md-umbrella" size={25} color={'#00D29D'} />
                                <Text style={{fontSize:12,marginTop:15,}}>身份证</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>贷款条件</Text>
                    </View>
                    <Text style={{fontSize:12,}}>满18周岁，且持有信用卡的用户</Text>
                </View>
                <View style={{backgroundColor:'#fff',marginTop:10,}}>
                    <View style={{height:60,justifyContent:'center',alignItems:'center'}}>
                        <Text>呼唤朋友一起来贷款赚奖励</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:width/2,height:80,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="ios-chatbubbles" size={30} color={'#009688'} />
                        </View>
                        <View style={{width:width/2,height:80,justifyContent:'center',alignItems:'center'}}>
                            <Icon name="ios-people" size={30} color={'#009688'} />
                        </View>
                    </View>
                </View>
            </View >
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    header:{
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    headerTop:{
        flexDirection:'row',
        paddingVertical:10,
    },
    headerHead:{
        width:50,
        height:50,
        marginRight:10,
        borderRadius:25,
        overflow:'hidden',
    },
    headerTitle:{
        fontSize:16,
        marginBottom:5,
    },
    headerIcon:{
        paddingHorizontal:3,
        paddingVertical:1,
        borderRadius:5,
        backgroundColor:'#489DF9',
        alignItems:'center',
        justifyContent:'center',
    },
    des:{
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    section:{
        backgroundColor:'#fff',
        paddingHorizontal:15,
        paddingVertical:10,
        marginTop:10,
    },
    instructionTitle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
    },
    borderLeft:{
        fontSize:14,
        paddingLeft:10,
        color:'gray',
        borderLeftWidth:2,
        borderLeftColor:'gray',
    },
    more:{
        fontSize:12,
        color:'#489DF9',
    }
});