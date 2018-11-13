import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class CardForm extends React.PureComponent {
  componentWillMount() {
    console.log('dsdadsadas', this.props.dataInfo);
    this.props.dataInfo
      ? this.setState({
          content: this.props.dataInfo.content,
          title: this.props.dataInfo.title,
          done: this.props.dataInfo.done,
          priority: this.props.dataInfo.priority
        })
      : this.setState({
          content: '',
          title: '',
          done: false,
          priority: false
        });
  }

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
        <Button title="Edit" onPress={this.editCard} />
        <Button title="Delete" onPress={this.deleteCard} />
      </View>
    );
  }
}
