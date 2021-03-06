import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/containers/auth/LoginScreen';
import RegistrationScreen from './src/containers/auth/RegistrationScreen';
import AuthScreen from './src/containers/AuthScreen';
import HomeScreen from './src/containers/HomeScreen';
import StartScreen from './src/containers/StartScreen';
import CardScreen from './src/containers/CardScreen';

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegistrationScreen
    },
    Home: {
      screen: HomeScreen
    },
    Start: {
      screen: StartScreen
    },
    CardInfo: {
      screen: CardScreen

    }
  },
  {
    initialRouteName: 'Start'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
