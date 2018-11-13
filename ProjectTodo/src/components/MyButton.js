import React from 'react';
import { Button } from 'react-native';

export default class MyButton extends React.Component {
  render() {
    return <Button title={this.props.title2} onPress={this.props.onPress} />;
  }
}
