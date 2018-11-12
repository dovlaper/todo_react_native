import React from 'react';
import { Text, View, Button } from 'react-native';
import authService from '../services/AuthService';

export default class AuthScreen extends React.Component {
  componentDidMount() {
    this.checkIfUserisLogged();
  }

  checkIfUserisLogged = async () => {
    var user = await authService.getUser();
    if (user) {
      this.props.navigation.navigate('Home', user);
    }
  };

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
          title="Signup"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        />
      </View>
    );
  }
}
