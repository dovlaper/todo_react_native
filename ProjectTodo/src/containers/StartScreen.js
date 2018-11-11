import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import authService from '../services/AuthService';
import LoginScreen from './auth/LoginScreen';
import HomeScreen from './HomeScreen';
import { AsyncStorage } from 'react-native';

export default class StartScreen extends React.Component {
  state = {
    signedIn: false,
    checkedIfSignedIn: false,
    user: null
  };

  componentDidMount() {
    authService.getUser().then(user => {
      if (user) {
        this.setState({ user: JSON.parse(user) });
        this.setState({ signedIn: true, checkedIfSignedIn: true });
      } else {
        this.setState({ signedIn: false, checkedIfSignedIn: true });
      }
    });
  }

  render() {
    const { signedIn, checkedIfSignedIn } = this.state;
    if (!checkedIfSignedIn) {
      return (
        <View>
          <Text>sddas</Text>
        </View>
      );
    } else if (signedIn) {
      return this.props.navigation.navigate('Home', { user: this.state.user });
    } else {
      return this.props.navigation.navigate('Auth');
    }
  }
}
