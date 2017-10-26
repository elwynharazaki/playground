import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
   const { textStyle, viewStyle } = styles;
   
   return (
      <View style={viewStyle}>
         <Text style={textStyle}>{props.title}</Text>
      </View>
   );
};

const styles = {
   textStyle: {
      color: '#F9F9F9',
      fontSize: 40,
      padding: 10
   },

   viewStyle: {
      backgroundColor: '#444444',
      alignItems: 'center',
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.9,
      elevation: 5
   }
};

export default Header;