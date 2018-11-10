import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/containers/auth/LoginScreen';
import RegistrationScreen from './src/containers/auth/RegistrationScreen';
import AuthScreen from './src/containers/AuthScreen';
import HomeScreen from './src/containers/HomeScreen';

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
    }
  },
  {
    initialRouteName: 'Auth'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
