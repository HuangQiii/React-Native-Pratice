import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text,View } from 'react-native';

const propTypes = {
  text:PropTypes.string,
  bgColor:PropTypes.string,
  lineColor:PropTypes.string,
  style:Text.propTypes.style,
};

const Line = ({
  text,
  bgColor,
  lineColor,
  style,
}) => (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:43,backgroundColor:bgColor,}}>
        <View style={{width:65,height:1,borderTopColor:lineColor,borderTopWidth:1,marginRight:5,}}></View>
        <View style={{width:80,alignItems:'center',justifyContent:'center',}}>
          <Text style={style}>{text}</Text>
        </View>
        <View style={{width:65,height:1,borderTopColor:lineColor,borderTopWidth:1,marginLeft:5,}}></View>
    </View>
  );

Line.propTypes = propTypes;

Line.defaultProps = {
    bgColor:'#F0F0F2',
    lineColor:'#709EB5',
};

export default Line;