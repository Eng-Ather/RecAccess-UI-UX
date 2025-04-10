import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({
  buttonText = 'submit',
  onPress,
  bgColor = 'black',
  clr = 'black',
}) => {
  const allStyles = [{backgroundColor: bgColor}, {color: clr}];
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.buttonStyle, allStyles]}>
      <Text style={{ color: clr}}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const Styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    alignItems: 'center',
    height: 46,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
