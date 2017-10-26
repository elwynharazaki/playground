import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity style={{ ...buttonStyle, backgroundColor: props.color || '#444444' }}
         onPress={props.onPress}>
         <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
   );
};

const styles = {
   textStyle: {
      alignSelf: 'center',
      color: '#F9F9F9',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
   },

  buttonStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 2
   }
};

export default Button;