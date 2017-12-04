import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from './src/components/Header';
import WeatherApp from './src/components/WeatherApp';

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
         <StatusBar
            barStyle='default'
            backgroundColor='transparent'
            translucent
         />
         <Header />
			<WeatherApp />
      </View>
	);
};

export default App;
