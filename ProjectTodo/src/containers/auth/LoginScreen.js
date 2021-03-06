import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import authService from '../../services/AuthService';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '' };

  handleSubmit = async () => {
    var user = await authService.login({
      email: this.state.email,
      password: this.state.password
    });
    if (user) {
      this.props.navigation.navigate('Home', { user: user });
    }
  };

  handleUserNameInputChange = value => {
    this.setState({ email: value });
  };

  handlePasswordInputChange = value => {
    this.setState({ password: value });
  };

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>Email: </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          onChangeText={this.handleUserNameInputChange}
          autoCapitalize={'none'}
        />
        <Text>Password: </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          secureTextEntry
          onChangeText={this.handlePasswordInputChange}
        />
        <Button title="Login" onPress={this.handleSubmit} />
        <Button onPress={() => goBack()} title="Back" />
      </View>
    );
  }
}
