import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/containers/auth/LoginScreen';
import AuthScreen from './src/containers/AuthScreen';
import HomeScreen from './src/containers/HomeScreen';
import StartScreen from './src/containers/StartScreen';
import authService from './src/services/AuthService';

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
    },
    Login: {
      screen: LoginScreen
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
    return authService.setAuthorizationHeader() && <RootStack />;
  }
}
