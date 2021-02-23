import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import HoroscopeScreen from './screens/HoroscopeScreen';
import JokeScreen from './screens/JokeScreen';
import TopNewsScreen from './screens/TopNewsScreen';
import WeatherScreen from './screens/WeatherScreen';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  HoroscopeScreen: HoroscopeScreen,
  TopNewsScreen:TopNewsScreen,
  JokeScreen:JokeScreen,
  WeatherScreen:WeatherScreen
});

const AppContainer = createAppContainer(AppNavigator);
