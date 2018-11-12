import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from './Card';

export default class Slide extends React.PureComponent {
  _keyExtractor = item => item.id.toString();

  _renderItem = ({ item, index }) => (
    <Card
      data={item}
      navigate={this.props.navigate}
      style={this.props.style}
      key={index}
    />
  );

  render() {
    return (
      <View style={this.props.style}>
        <Text>{this.props.title2}</Text>

        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
