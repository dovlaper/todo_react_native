import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import authService from '../services/AuthService';
import cardService from '../services/CardsService';

const styles = StyleSheet.create({
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
  }
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this;
  }

  async componentDidMount() {
    const token = await this.checkAuthorization();
    if (token) {
      authService.setAuthorizationHeader();
      var cards = await cardService.getCards();
      this.setState({ cards: cards.data });
    } else {
      this.props.navigation.navigate('Auth');
    }
  }

  state = {
    name: '',
    email: '',
    cards: []
  };

  checkAuthorization = async () => {
    var token = await authService.getToken();
    if (token) {
      this.setState({
        name: this.props.navigation.getParam('name'),
        email: this.props.navigation.getParam('email')
      });
      return token;
    } else {
      return false;
    }
  };

  logout = () => {
    authService.logout();
    this.props.navigation.pop();
  };

  render() {
    cardArray = [];
    for (var index in this.state.cards) {
      cardArray.push({
        key: this.state.cards[index].id + '',
        content: this.state.cards[index].content,
        title: this.state.cards[index].title
      });
    }
    return (
      <View>
        <Text>ToDo</Text>
        <FlatList
          extraData={this.state.loader}
          data={cardArray}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemtitle}>{item.title}</Text>
              <Text style={styles.itemcontent}>{item.content}</Text>
            </View>
          )}
        />
        <Button onPress={this.logout} title="Logout" />
        <Text>{this.state.name}</Text>
        <Text>{this.state.email}</Text>
      </View>
    );
  }
}
