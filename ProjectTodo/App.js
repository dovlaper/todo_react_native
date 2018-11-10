import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AuthScreen from './src/containers/AuthScreen';

const RootStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen
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
