import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default class Slide extends React.Component {
  render() {
    return (
      <View style={this.props.style.slide1}>
        <Text>{this.props.title2}</Text>
        <FlatList
          extraData={this.props.loader}
          data={this.props.data}
          renderItem={({ item }) => (
            <View style={this.props.style.item}>
              <Text style={this.props.style.itemtitle}>{item.title}</Text>
              <Text style={this.props.style.itemcontent}>{item.content}</Text>
              <Text style={this.props.style.itempriority}>
                {item.priority == 1 ? 'hot' : ''}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}
