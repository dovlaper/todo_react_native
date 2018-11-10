import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import authService from '../../services/AuthService';

export default class LoginScreen extends React.Component {
  state = { email: '', password: '' };

  constructor(props) {
    super(props);
  }

  handleSubmit = async () => {
    const { navigate } = this.props.navigation;
    var user = await authService.login(this.state);
    if (user) {
      navigate('Home', { loggedUser: user });
    } else {
      alert('Login failed');
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
