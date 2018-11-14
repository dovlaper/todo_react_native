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
  }
});

export default class HomeScreen extends React.Component {
  componentDidMount() {
    this.getCards();
  }

  getCards = async () => {
    this.setState({ loader: false });
    var cards = await cardService.getCards();
    this.setState({ cards: cards.data });
    this.setState({ loader: true });
  };

  sortedCards = done => {
    return this.state.cards
      .filter(card => card.done === done)
      .sort((a, b) => (a.priority && !b.priority ? -1 : 1));
  };

  state = {
    loader: false,
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
    return this.state.loader ? (
      <Swiper style={styles.wrapper} showsButtons={true} index={1}>
        <Slide
          style={styles.slide1}
          data={this.sortedCards(false)}
          title2="Todo"
          loader={this.state.loader}
          navigate={this.props.navigation.navigate}
        />
        <Slide
          style={styles.slide2}
          data={this.sortedCards(true)}
          title2="Done"
          loader={this.state.loader}
          navigate={this.props.navigation.navigate}
        />
        <View style={styles.slide3}>
          <Text>Enjoy your Vladnotes :</Text>
          <Text>{this.state.name}</Text>
          <Text>{this.state.email}</Text>
          <Button
            onPress={() => this.props.navigation.navigate('CardInfo')}
            title="Add New Item"
          />
          <Button onPress={this.logout} title="Logout" />
        </View>
      </Swiper>
    ) : (
      <Text>Loading...</Text>
    );
  }
}
