import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import cardsService from '../services/CardsService';

export default class CardScreen extends React.Component {
  componentDidMount() {
    console.log(this.props.navigation.getParam('dataInfo'));
    if (this.props.navigation.getParam('dataInfo') !== undefined)
      this.setState({
        id: this.props.navigation.getParam('dataInfo').id,
        title: this.props.navigation.getParam('dataInfo').title,
        content: this.props.navigation.getParam('dataInfo').content,
        done: this.props.navigation.getParam('dataInfo').done,
        priority: this.props.navigation.getParam('dataInfo').priority,
        editForm: true
      });
  }

  state = {
    title: '',
    content: '',
    done: false,
    priority: false
  };

  newCard = async () => {
    console.log('usao u new card');
    response = await cardsService.addNewCard({
      title: this.state.title,
      content: this.state.content,
      done: this.state.done,
      priority: this.state.priority
    });
    this.props.navigation.pop();
    this.props.navigation.pop();

    this.props.navigation.navigate('Home');
  };

  editCard = async () => {
    console.log('usao u edit card');
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

        {this.state.editForm ? (
          <Button title="Edit" onPress={this.editCard} />
        ) : (
          <Button title="Create" onPress={this.newCard} />
        )}
        {this.state.editForm ? (
          <Button title="Delete" onPress={this.deleteCard} />
        ) : null}
      </View>
    );
  }
}
