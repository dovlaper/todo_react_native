import React from 'react';
import { Text, View, Button } from 'react-native';
import authService from '../services/AuthService';

export default class AuthScreen extends React.Component {
  async componentDidMount() {
    var user = await authService.getUser();
    if (user) {
      this.props.navigation.navigate('Home', user);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Screen</Text>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Button
          title="Registration"
          onPress={() => {
            this.props.navigation.navigate('Registration');
          }}
        />
      </View>
    );
  }
}
