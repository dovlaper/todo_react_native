import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  LOGIN: '/login'
};

class AuthService extends BaseService {
  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
    }
  };

  createSession = async user => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));

      await this.setAuthorizationHeader();
    } catch (error) {
      alert('Error occured...');
    }
  };
  getUser = async () => {
    return await AsyncStorage.getItem('user');
  };

  getToken = async () => {
    return await AsyncStorage.getItem('token');
  };

  getUserFromToken(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64))['user'];
  }

  login = async data => {
    try {
      let response = await this.apiClient().post(ENDPOINTS.LOGIN, data);
      var token = response['data']['access_token'];
      var user = this.getUserFromToken(token);
      this.apiClient().defaults.headers.common['Authorization'] =
        'Bearer' + token;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);
      return user;
    } catch {
      return;
    }
  };

  logout() {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('token');
  }
}

const authService = new AuthService();
export default authService;
