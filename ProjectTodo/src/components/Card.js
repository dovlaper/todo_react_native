import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {},
  item: {
    borderColor: 'black',
    borderTopWidth: 1
  },
  itemtitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'grey'
  },
  itemcontent: {
    fontSize: 14,
    color: 'black'
  },
  itempriority: {
    fontSize: 14,
    color: 'red'
  }
});

const Card = ({ data, navigate }) => {
  return (
    <TouchableOpacity onPress={() => navigate('CardInfo', { data })}>
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={{ color: 'darkblue', fontWeight: 'bold' }}>
          {data.title}
        </Text>
        <Text style={styles.itemcontent}>{data.content}</Text>
        <Text style={styles.itempriority}>{data.priority ? 'hot' : ''}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
