import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import List from '../components/List';

export default class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `贷款管家`,
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
                <View style={{height:172,backgroundColor:'#3F51B5'}}>

                </View>
                <List 
                    text={'个人资料'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
                />
                <List 
                    text={'我的收藏'}
                    bgColor={'#fff'}
                    listHeight={50}
                    rightIconName={'ios-arrow-forward'}
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