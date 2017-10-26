import React, { Component} from 'react';
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
      
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=4f3cdc2cde3ffd674711f5533acae677`
      
      axios.get(url)
      .then((result) => {
         console.log(result)
         this.setState({
            data: result.data,
            icon: result.data.weather[0].icon,
            city: result.data.name,
            main: result.data.weather[0].description,
            temp: Math.round(((result.data.main.temp) - 273) * 100) / 100,
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
							<Text style={styles.cityStyle}>{this.state.city},</Text>
                  </View>

                  <View>
							<Text style={styles.countryStyle}>{this.state.country}</Text>
						</View>
					</CardSection>

					<CardSection>
						<View style={styles.iconStyle}>
							<Image style={styles.iconStyle} source={{
							uri: `https://openweathermap.org/img/w/${this.state.icon}.png`}} />
						</View>

						<View style={styles.viewStyle}>
							<Text>{this.state.main}</Text>
							<Text>{this.state.desc}</Text>
							<Text>{this.state.temp}° C</Text>
						</View>
					</CardSection>
				</Card>
         );
      }
   }

   render() {
		return (
         <View>
            <Card>
               <CardSection>
                  <Input
                  placeholder='SEARCH MY CITY'
                  onChangeText={text => this.setState({ cityInput: text })}
                  /> 
               </CardSection>

               <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
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
   cityStyle: {
      color: '#444444',
      fontSize: 33,
      fontWeight: 'bold',
      padding: 2
   },

   countryStyle: {
      color: '#444444',
      fontSize: 33,
      fontWeight: 'bold',
      padding: 2
   },

   iconStyle: {
      height: 50,
      width: 50
   },

   viewStyle: {
      flex: 1,
      flexDirection: 'column',
      padding: 2,
      marginLeft: 20
   }
};

export default WeatherApp;