import React from 'react';
import { Text, TextStyle, TextProps } from 'react-native';
import { colors, sizes } from '../../commons';

interface PTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

function PText({ style, children, ...rest }: PTextProps) {
  const textStyle: TextStyle = {  
    color: colors.defaultTextColor, 
    fontSize: sizes.defaultTextSize 
  };

  return (
    <Text
      style={[textStyle, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}

export default PText;