import React, { Component } from 'react';
import { View, StyleSheet, Text ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../components/List';

const {width,height} = Dimensions.get('window');

export default class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `我的`,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-person" size={15} color={tintColor} />
        ),
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
                <View style={{backgroundColor:'#3F51B5',paddingHorizontal:20,}}>
                    <View style={{flexDirection:'row',alignItems:'center',height:70}}>
                        <View style={{width:50,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:50,height:50,borderRadius:25,backgroundColor:'#eee'}}></View>
                        </View>
                        <Text style={{flex:1,color:'#fff',marginLeft:20,}}>大雄</Text>
                        <Text style={{width:60,color:'#fff'}}>普通会员</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',height:60}}>
                        <View style={{width:width*0.5,justifyContent:'center',paddingLeft:10,}}>
                            <Text style={{color:'#fff'}}>总资产(元)</Text>
                            <Text style={{color:'#fff',fontSize:24,}}>0.00</Text>
                        </View>
                        <View style={{width:width*0.5,justifyContent:'center',paddingLeft:10,}}>
                            <Text style={{color:'#fff'}}>昨日收益(元)</Text>
                            <Text style={{color:'#fff',fontSize:24,}}>+200.00</Text>
                        </View>
                    </View>
                    <View style={{height:50,borderTopWidth:1,borderTopColor:'#eee',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10,}}>
                        <Text style={{color:'#fff',}}>邀请好友加入赢取积分</Text>
                        <Text style={{paddingHorizontal:15,paddingVertical:5,backgroundColor:'#FFFFFF',borderRadius:5,}}>立即邀请</Text>
                    </View>
                </View>
                <View style={{height:40,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',marginTop:7,}}>
                    <View style={{width:width/2,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#eee'}}>
                        <Text style={{color:'#03A9F4',marginRight:20,}}>好友</Text>
                        <Text>99</Text>
                    </View>
                    <View style={{width:width/2,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'#03A9F4',marginRight:20,}}>好友圈子</Text>
                        <Text>2000+</Text>
                    </View>
                </View>
                <List 
                    text={'个人资料'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
                    overlayMarginTop={7}
                />
                <List 
                    text={'我的收藏'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
                    overlayMarginTop={7}
                    underlayColor={'#eee'}
                />
                <List 
                    text={'我的申请'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
                />
                <List 
                    text={'关于我们'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
                    overlayMarginTop={7}
                />
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F2',
    }
});