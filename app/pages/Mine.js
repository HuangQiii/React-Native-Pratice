import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <Text>Mine</Text>
            </View >
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    }
});