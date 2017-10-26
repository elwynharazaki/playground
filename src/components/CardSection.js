import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   const { cardSectionStyle } = styles;

   return (
      <View style={cardSectionStyle}>
         {props.children}
      </View>
   );
}

const styles = {
   cardSectionStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#F9F9F9',
      flexDirection: 'row',
      borderColor: '#C6C6C6',
      position: 'relative'
   }
};

export default CardSection;