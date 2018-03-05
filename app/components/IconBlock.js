import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
    content: PropTypes.string,
    contentSize:PropTypes.number,
    contentColor:PropTypes.string,
    icon:PropTypes.string,
    iconColor:PropTypes.string,
    iconSize:PropTypes.number,
    height:PropTypes.number,
    width:PropTypes.number,

    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
};

const IconBlock = ({
    content,
    contentColor,
    contentSize,
    icon,
    iconColor,
    iconSize,
    height,
    width,

    onPress,
    disabled,
    activeOpacity,
}) => (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            <View style={[styles.block,{width:width,height:height,}]}>
                <Icon 
                    name={icon}
                    size={iconSize}
                    color={iconColor}
                />
                <Text style={[styles.content,{fontSize:contentSize,color:contentColor,}]}>
                    {content}
                </Text>
            </View>
        </TouchableOpacity>
    );

IconBlock.propTypes = propTypes;

IconBlock.defaultProps = {
    onPress() { },
    disabled: false,
    activeOpacity: 0.8,

    contentColor: '#000',
    contentSize: 14,
    iconColor: '#000',
    iconSize: 25,
};

var styles = StyleSheet.create({
    block: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        color: '#000',
        marginTop:15,
    },
});

export default IconBlock;