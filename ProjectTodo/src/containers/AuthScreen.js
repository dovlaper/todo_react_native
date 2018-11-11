import React from 'react';
import { Text, View, Button } from 'react-native';
import authService from '../services/AuthService';

export default class AuthScreen extends React.Component {
  async componentDidMount() {
    var user = await authService.getUser();
    console.log('AuthScreen User:' + user);
    if (user) {
      console.log('user ulogovan vec');
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
      </View>
    );
  }
}
