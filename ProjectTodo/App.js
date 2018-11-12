import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/containers/auth/LoginScreen';
import RegistrationScreen from './src/containers/auth/RegistrationScreen';
import AuthScreen from './src/containers/AuthScreen';
import HomeScreen from './src/containers/HomeScreen';
import StartScreen from './src/containers/StartScreen';

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
