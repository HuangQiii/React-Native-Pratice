import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions,Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconBlock from '../components/IconBlock';
import Promote from '../components/Promote';
import layout from '../styles/layout';

const { margin, padding, border, completeCenterInLine, verticalCenterInLine, completeCenterInColumn, horizontalCenterInColumn } = layout;

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
                            <IconBlock
                                content={'信息填写'}
                                contentSize={12}
                                icon={'md-link'}
                                height={60}
                                width={60}
                            />
                            <IconBlock
                                content={'实名认证'}
                                contentSize={12}
                                icon={'md-cafe'}
                                height={60}
                                width={60}
                            />
                            <IconBlock
                                content={'电话审核'}
                                contentSize={12}
                                icon={'md-umbrella'}
                                height={60}
                                width={60}
                            />
                            <IconBlock
                                content={'等待放款'}
                                contentSize={12}
                                icon={'md-glasses'}
                                height={60}
                                width={60}
                            />
                        </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>所需资料</Text>
                    </View>
                        <View style={{backgroundColor:'#fff',flexDirection:'row',}}>
                            <IconBlock
                                content={'信用卡'}
                                contentSize={12}
                                icon={'md-link'}
                                iconColor={'#FDAD2D'}
                                height={60}
                                width={60}
                            />
                            <IconBlock
                                content={'运营商'}
                                contentSize={12}
                                icon={'md-cafe'}
                                iconColor={'#5CABF8'}
                                height={60}
                                width={60}
                            />
                            <IconBlock
                                content={'身份证'}
                                contentSize={12}
                                icon={'md-umbrella'}
                                iconColor={'#00D29D'}
                                height={60}
                                width={60}
                            />
                        </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.instructionTitle}>
                        <Text style={styles.borderLeft}>贷款条件</Text>
                    </View>
                    <Text style={{fontSize:12,}}>满18周岁，且持有信用卡的用户</Text>
                </View>
                <View style={{marginTop:10,}}>
                    <Promote />
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
        paddingHorizontal:15,
        backgroundColor:'#fff',
    },
    headerTop:{
        flexDirection:'row',
        paddingVertical:10,
    },
    headerHead:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,
        overflow:'hidden',
    },
    headerTitle:{
        marginBottom:5,
        fontSize:16,
    },
    headerIcon:{
        borderRadius:5,
        backgroundColor:'#489DF9',
        ...padding(1,3),
    },
    des:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#eee',
    },
    section:{
        marginTop:10,
        backgroundColor:'#fff',
        ...padding(10,15),
    },
    instructionTitle:{
        justifyContent:'space-between',
        marginBottom:10,
        ...verticalCenterInLine(),
    },
    borderLeft:{
        paddingLeft:10,
        borderLeftWidth:2,
        borderLeftColor:'gray',
        fontSize:14,
        color:'gray',
    },
    more:{
        fontSize:12,
        color:'#489DF9',
    }
});