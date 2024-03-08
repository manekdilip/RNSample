import {Text} from 'react-native';
import React from 'react';
import colors from '../themes/colors';
import {headerFontSizes} from '../helpers/utils';

// This is a custom header text components with required props
// Used to display header text in the app
const HeaderText = props => {
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
          fontSize: headerFontSizes(props?.size),
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

export {HeaderText};
