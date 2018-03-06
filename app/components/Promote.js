import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet, View, Text, TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import layout from '../styles/layout';

const {width,height} = Dimensions.get('window');
const {completeCenterInLine} = layout;

const propTypes = {
    
};

const Promote = ({
    
}) => (
        <View style={{backgroundColor:'#fff'}}>
            <View style={styles.textLine}>
                <Text>呼唤朋友一起来贷款赚奖励</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.twoBlock}>
                    <Icon
                        name="ios-chatbubbles"
                        size={30}
                        color={'#009688'}
                    />
                </View>
                <View style={styles.twoBlock}>
                    <Icon
                        name="ios-people"
                        size={30}
                        color={'#009688'}
                    />
                </View>
            </View>
        </View>
    );

Promote.propTypes = propTypes;

Promote.defaultProps = {
    
};

var styles = StyleSheet.create({
    textLine:{
        height:60,
        ...completeCenterInLine(),
    },
    twoBlock:{
        width:width/2,
        height:80,
        ...completeCenterInLine(),
    }
});

export default Promote;