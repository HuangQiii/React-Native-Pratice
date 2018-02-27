import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    borderRadius: PropTypes.number,
    titleColor:PropTypes.string,
    contentColor:PropTypes.string,

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
    borderRadius,
    titleColor,
    contentColor,
    icon,

    onPress,
    disabled,
    activeOpacity,
}) => (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            <View style={[styles.block, { width: (width - (col + 1) * marginLeft) / col, height: (height - (row + 1) * marginTop) / row, marginLeft: marginLeft, marginTop: marginTop, borderRadius:borderRadius,backgroundColor:bgColor }]}>
                <View style={styles.text}>
                    <Text style={[styles.title,{color:titleColor}]}>{title}</Text>
                    <Text style={[styles.content,{color:contentColor}]}>{content}</Text>
                </View>
                <View style={[styles.pic, { width: (height - (row + 1) * marginTop) / row }]}>
                    {/*<View style={[styles.pretendImg, { height: (height - (row + 1) * marginTop) / row - 20, width: (height - (row + 1) * marginTop) / row - 20, borderRadius: ((height - (row + 1) * marginTop) / row - 20) / 2 }]}></View>*/}
                    <View style={[styles.pretendImg, { overflow: 'hidden', height: (height - (row + 1) * marginTop) / row - 20, width: (height - (row + 1) * marginTop) / row - 20, borderRadius: ((height - (row + 1) * marginTop) / row - 20) / 2 }]}>   
                        {icon === ''?
                            <Image resizeMode='stretch' style={{ height: (height - (row + 1) * marginTop) / row - 20, width: (height - (row + 1) * marginTop) / row - 20, }} source={{ uri: pic }} />
                            :
                            <Icon name={icon} size={30} color={'#fff'} />
                        }
                    </View>
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
    borderRadius: 0,
    bgColor: '#EBF0F2',
    titleColor:'#fff',
    contentColor:'#fff',
    icon:'',
};

var styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 8,
    },
    title: {
        fontSize: 16,
    },
    content: {
        fontSize: 12,
    },
    pic: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    pretendImg: {
        alignItems:'center',
        justifyContent:'center',
    }
});

export default Block;