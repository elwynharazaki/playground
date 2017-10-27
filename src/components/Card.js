import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
   const { cardStyle } = styles;

   return (
      <View style={cardStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardStyle: {
      borderWidth: 1,
      borderRadius: 1,
      borderColor: '#ECECEC',
      borderBottomWidth: 0.1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5
   }
};

export default Card;