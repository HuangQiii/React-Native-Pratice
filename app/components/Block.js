import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    col: PropTypes.number,
    row: PropTypes.number,
    marginLeft: PropTypes.number,
    marginTop: PropTypes.number,
    bgColor: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    pic: PropTypes.string,

    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    activeOpacity: PropTypes.number,
};

const Block = ({
    width,
    height,
    col,
    row,
    marginLeft,
    marginTop,
    bgColor,
    title,
    content,
    pic,

    onPress,
    disabled,
    activeOpacity,
}) => (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            <View style={[styles.block, { width: (width - (col + 1) * marginLeft) / col, height: (height - (row + 1) * marginTop) / row, marginLeft: marginLeft, marginTop: marginTop }]}>
                <View style={styles.text}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={[styles.pic, { width: (height - (row + 1) * marginTop) / row }]}>
                    <View style={[styles.pretendImg, { height: (height - (row + 1) * marginTop) / row - 20, width: (height - (row + 1) * marginTop) / row - 20, borderRadius: ((height - (row + 1) * marginTop) / row - 20) / 2 }]}></View>
                </View>
            </View>
        </TouchableOpacity>
    );

Block.propTypes = propTypes;

Block.defaultProps = {
    onPress() { },
    disabled: false,
    activeOpacity: 0.8,
    col: 1,
    row: 1,
    marginLeft: 0,
    marginTop: 0,
};

var styles = StyleSheet.create({
    block: {
        backgroundColor: '#EBF0F2',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 8,
    },
    title: {
        color: '#012A36',
        fontSize: 16,
    },
    content: {
        color: '#607D8B',
        fontSize: 12,
    },
    pic: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pretendImg: {
        backgroundColor: 'blue'
    }
});

export default Block;