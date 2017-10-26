import React from 'react';
import { TextInput, View } from 'react-native';

const Input = (props) => {
   const { containerStyle, inputStyle } = styles;
   const { autoCapitalize, placeholder, onChangeText } = props;
   return (
      <View style={containerStyle}>
         <TextInput style={inputStyle}
         placeholder={placeholder}
         onChangeText={onChangeText}
         />
      </View>
   );
};

const styles = {
   containerStyle: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 40,
   },

   inputStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      color: '#444444',
      flex: 2,
      fontSize: 18,
      padding: 2
   }
};

export default Input;