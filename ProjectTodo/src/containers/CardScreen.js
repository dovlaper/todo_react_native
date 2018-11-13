import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import cardService from '../services/CardsService';

import MyButton from '../components/MyButton';

export default class CardScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    title: this.props.navigation.getParam('data').title,
    content: this.props.navigation.getParam('data').content,
    done: this.props.navigation.getParam('data').done,
    priority: this.props.navigation.getParam('data').priority
  };

  editCard = () => {
    auth;
  };

  deleteCard = () => {};

  render() {
    return (
      <View>
        <Text>Title:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.title}
          onChangeText={text => this.setState({ title: text })}
        />
        <Text>Content:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.content}
          onChangeText={text => this.setState({ content: text })}
        />
        <CheckBox
          title="Priority"
          checked={this.state.priority}
          onPress={() => this.setState({ priority: !this.state.priority })}
        />
        <CheckBox
          title="Done"
          checked={this.state.done}
          onPress={() => this.setState({ done: !this.state.done })}
        />
        <MyButton title2="Edit" onPress={this.editCard} />
      </View>
    );
  }
}
