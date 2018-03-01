import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `贷款管家`,
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
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.title}>200.00</Text>
                    <Text style={styles.des}>可体现金额</Text>

                    <View style={styles.whiteBlock}>
                        <View style={[styles.smBlock,{borderRightColor:'#eee',borderRightWidth:1,}]}>
                            <Text>历史提现</Text>
                        </View>
                        <View style={styles.smBlock}>
                            <Text>收入明细</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>申请提现</Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        alignItems:'center',
    },
    block: {
        height:187,
        backgroundColor:'#3F51B5',
        alignItems:'center',
    },
    title: {
        fontSize:32,
        marginTop:20,
        color:'#fff',
    },
    des: {
        fontSize:12,
        color:'#fff',
        marginTop:10,
    },
    whiteBlock:{
        flexDirection:'row',
        marginHorizontal:60,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'#fff',
    },
    smBlock:{
        width:(width - 120) / 2,
        alignItems:'center',
        justifyContent:'center',
    },
    inputs:{
        width:width - 70,
        marginTop:40,
    },
    input: {
        height:40,
        marginTop:10,
        borderColor:'transparent',
        borderBottomColor:'#eee',
        borderWidth: 1,
    },
    button: {
        width:width - 70,
        backgroundColor:'#53B851',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems:'center',
        marginTop:25,
    }
});