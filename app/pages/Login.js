import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Login extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `登录`,
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
                <Text style={styles.title}>输入手机号</Text>
                <Text style={styles.des}>登录进行获取贷款</Text>

                <View style={styles.inputs}>
                    <TextInput
                        defaultValue={'手机号'}
                    />
                    <TextInput
                        defaultValue={'验证码'}
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={{color:'#fff'}}>下一步</Text>
                    </View>
                </TouchableOpacity>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        paddingHorizontal:35,
        backgroundColor: '#FEFEFE',        
    },
    title: {
        marginTop:60,
        fontSize:24,
    },
    des: {
        marginTop:10,
        fontSize:18,
        color:'#eee',
    },
    inputs:{
        width:width - 70,
        marginTop:40,
    },
    input: {
        height:40,
        marginTop:10,
        borderColor:'transparent',
        borderWidth: 1,
        borderBottomColor:'#eee',
    },
    button: {
        width:width - 70,
        alignItems:'center',
        marginTop:25,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor:'#53B851',
    }
});