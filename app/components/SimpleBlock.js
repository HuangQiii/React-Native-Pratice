import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,

    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
};

const SimpleBlock = ({
    title,
    content,

    onPress,
    disabled,
    activeOpacity,
}) => (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            <View style={styles.block}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            </View>
        </TouchableOpacity>
    );

SimpleBlock.propTypes = propTypes;

SimpleBlock.defaultProps = {
    onPress() { },
    disabled: false,
    activeOpacity: 0.8,
};

var styles = StyleSheet.create({
    block: {
        width: 80,
        height: 60,
        borderWidth: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    title: {
        color: '#607D8B',
        fontSize: 16,
    },
    content: {
        color: '#ED6136',
        fontSize: 12,
    },
});

export default SimpleBlock;