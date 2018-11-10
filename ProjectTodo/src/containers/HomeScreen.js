import React from 'react';
import { Text, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    var promise = AsyncStorage.getItem('token');
    promise.then(token => {}).catch(error => alert('Failed to log in!'));
  }

  render() {
    const { goBack } = this.props.navigation;

    return (
      <View>
        <Text>ToDo</Text>
        <Text>{this.props.navigation.getParam('loggedUser').name}</Text>
        <Text>{this.props.navigation.getParam('loggedUser').email}</Text>

        <Button onPress={() => goBack()} title="Back" />
      </View>
    );
  }
}
