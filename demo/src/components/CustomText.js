import {Text} from 'react-native';
import React from 'react';
import {commonTextfontSizes} from '../helpers/utils';
import colors from '../themes/colors';

// This is a custom peragraph text components with required props
// Used to display pragraph or sub-header text in the app
const CustomText = props => {
  // Setting props dynamically
  const _textAlign = props?.right
    ? 'right'
    : props?.centered
    ? 'center'
    : 'left';
  const _textDecorationLine = props?.underLine ? 'underline' : 'none';
  const _textTransform = props.capitalize
    ? 'capitalize'
    : props?.upperCase
    ? 'uppercase'
    : 'none';
  const color = props?.color ? props?.color : colors.primary;

  return (
    <Text
      onPress={props?.onPress}
      numberOfLines={props?.lines}
      style={[
        // Inline syling due to dynamic props
        {
          color,
          fontSize: commonTextfontSizes(props?.size),
          textAlign: _textAlign,
          textDecorationLine: _textDecorationLine,
          textTransform: _textTransform,
          opacity: props?.opacity,
        },
        props?.textStyles,
      ]}>
      {props?.label}
    </Text>
  );
};

export {CustomText};
