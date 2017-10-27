import React from 'react';
import { ScrollView, View } from 'react-native';

import Header from './src/components/Header';
import WeatherApp from './src/components/WeatherApp';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      <Header title={'OPENWEATHER'} />
        <ScrollView>
          <WeatherApp />
        </ScrollView>
    </View>
  );
};

export default App;
