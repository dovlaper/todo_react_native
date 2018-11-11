import React from 'react';
import authService from '../services/AuthService';

export default class StartScreen extends React.Component {
  state = {
    signedIn: false,
    checkedIfSignedIn: false,
    user: null
  };

  componentDidMount() {
    authService.getUser().then(user => {
      if (user) {
        this.setState({
          user: JSON.parse(user),
          signedIn: true,
          checkedIfSignedIn: true
        });
      } else {
        this.setState({ signedIn: false, checkedIfSignedIn: true });
      }
    });
  }

  render() {
    const { signedIn, checkedIfSignedIn } = this.state;
    if (!checkedIfSignedIn) {
      return null;
    } else if (signedIn) {
      return this.props.navigation.navigate('Home', { user: this.state.user });
    } else {
      return this.props.navigation.navigate('Auth');
    }
  }
}
