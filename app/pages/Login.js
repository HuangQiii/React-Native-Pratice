import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

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
                <Text>Login</Text>
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