import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import authService from '../services/AuthService';
import cardService from '../services/CardsService';
import Swiper from 'react-native-swiper';
import Slide from '../components/Slide';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7c51'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3fbff'
  },
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

export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    this.setState({ loader: false });
    var cards = await cardService.getCards();
    this.setState({ cards: cards.data, loader: true });
  };

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
    this.props.navigation.navigate('Auth');
  };

  render() {
    cardArray = [];
    cardDoneArray = [];

    for (var index in this.state.cards) {
      if (this.state.cards[index].done) {
        cardDoneArray.push({
          key: this.state.cards[index].id + '',
          content: this.state.cards[index].content,
          title: this.state.cards[index].title,
          priority: this.state.cards[index].priority,
          done: this.state.cards[index].done
        });
      } else {
        cardArray.push({
          key: this.state.cards[index].id + '',
          content: this.state.cards[index].content,
          title: this.state.cards[index].title,
          priority: this.state.cards[index].priority,
          done: this.state.cards[index].done
        });
      }
    }
    cardArray.sort((a, b) => (a.priority && !b.priority ? -1 : 1));

    return (
      <Swiper style={styles.wrapper} showsButtons={true} index={1}>
        <Slide
          style={styles}
          data={cardArray}
          title2="Todo"
          loader={this.state.loader}
        />
        <Slide
          style={styles}
          data={cardDoneArray}
          title2="Done"
          loader={this.state.loader}
        />
        <View style={styles.slide3}>
          <Text>Enjoy your Vladnotes :)</Text>
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
          <Button onPress={this.logout} title="Logout" />
        </View>
      </Swiper>
    );
  }
}
