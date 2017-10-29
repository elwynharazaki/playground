import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import axios from 'axios';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import Input from './Input';

class WeatherApp extends Component {
   state = {
      cityInput: '',
      data: '',
      city: '',
      desc: '',
      temp: '',
      country: ''
   }

   onButtonPress() {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=4f3cdc2cde3ffd674711f5533acae677&units=metric`
      
      axios.get(url)
      .then((result) => {
         this.setState({
            data: result.data,
            icon: result.data.weather[0].icon,
            city: result.data.name,
            main: result.data.weather[0].main,
            desc: result.data.weather[0].description,
            temp: Math.round(result.data.main.temp),
            country: result.data.sys.country
         });
      })

      .catch((error) => {
         alert(error);
      });
   }

   renderWeather() {
      if (this.state.data) {
         console.log(this.state.icon);
			
			return (
				<Card>
					<CardSection>
						<View>
                     <Text style={styles.cityCountryStyle}>
                     {this.state.city}, {this.state.country}
                     </Text>
                  </View>
					</CardSection>

					<CardSection>
						<View style={styles.tempIconStyle}>
							<Image
                     style={styles.tempIconStyle}
                     source={{ uri: `https://openweathermap.org/img/w/${this.state.icon}.png` }}
                     />
						</View>

						<View style={styles.tempDescStyle}>
							<Text style={{ fontWeight: 'bold' }}>{this.state.main}</Text>
							<Text>{this.state.desc}</Text>
							<Text style={{ fontWeight: 'bold' }}>{this.state.temp}° C</Text>
						</View>
					</CardSection>
				</Card>
         );
      }
   }

   render() {
      console.log(this.state.data);
		return (
         <View>
            <Card>
               <CardSection>
                  <Input
                  placeholder='ENTER YOUR CITY'
                  onChangeText={text => this.setState({ cityInput: text })}
                  /> 
               </CardSection>

               <CardSection>
                  <Button onPress={() => this.onButtonPress()}>
                  GET WEATHER
                  </Button>
               </CardSection>
				</Card>
				{this.renderWeather()}
         </View>
      );
   }
}

const styles = {
   cityCountryStyle: {
      color: '#444444',
      fontSize: 33,
      fontWeight: 'bold',
      padding: 2
   },

   tempIconStyle: {
      height: 50,
      width: 50
   },

   tempDescStyle: {
      flex: 1,
      padding: 2,
      marginLeft: 10
   }
};

export default WeatherApp;