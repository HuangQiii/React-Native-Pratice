import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Dimensions,Image } from 'react-native';

const {width,height} = Dimensions.get('window');

export default class User extends Component {

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
                <View style={{width:70,height:70,borderRadius:35,overflow: 'hidden',marginTop:40,}}>
                    <Image resizeMode='stretch' style={{ width: 70, height: 70, }}  source={{uri:'https://modao.cc/uploads3/images/1003/10037631/raw_1496657304.png'}}/>
                </View>
                <Text style={styles.des}>点击设置头像</Text>

                <View style={styles.inputs}>
                    <TextInput
                        defaultValue={'昵称'}
                    />
                    <TextInput
                        defaultValue={'性别'}
                    />
                    <TextInput
                        defaultValue={'职业身份'}
                    />
                    <TextInput
                        defaultValue={'所在地'}
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
        backgroundColor: '#FEFEFE',
        paddingHorizontal:35,
        alignItems:'center',
    },
    title: {
        fontSize:24,
        marginTop:60,
    },
    des: {
        fontSize:18,
        color:'#eee',
        marginTop:10,
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