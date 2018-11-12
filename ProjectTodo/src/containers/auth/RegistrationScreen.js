import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import authService from '../../services/AuthService';

export default class RegistrationScreen extends React.Component {
  state = { email: '', password: '', name: '' };

  handleSubmit = async data => {
    try {
      const response = await authService.register(this.state);
      alert('Registration successfull');
      this.props.navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  };

  handleNameInputChange = value => {
    this.setState({ name: value });
  };

  handleEmailInputChange = value => {
    this.setState({ email: value });
  };

  handlePasswordInputChange = value => {
    this.setState({ password: value });
  };

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <View>
          <Text>Name: </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={this.handleNameInputChange}
          />
          <Text>Email: </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={this.handleEmailInputChange}
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
          <Button
            title="SignUp"
            onPress={this.handleSubmit}
            data={this.state}
          />
          <Button onPress={() => goBack()} title="Back" />
        </View>
      </View>
    );
  }
}
