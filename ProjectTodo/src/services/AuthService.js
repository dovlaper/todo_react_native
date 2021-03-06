import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  LOGIN: '/login',
  REGISTER: '/register'
};

class AuthService extends BaseService {
  constructor() {
    super();
    this.setAuthorizationHeader();
  }

  setAuthorizationHeader = async () => {
    const token = await this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
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
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);
      await this.setAuthorizationHeader();
      return user;
    } catch {
      return;
    }
  };

  register = async data => {
    return await this.apiClient().post(ENDPOINTS.REGISTER, data);
  };

  logout() {
    AsyncStorage.clear();
    this.api.removeHeaders(['Authorization']);
  }
}

const authService = new AuthService();
export default authService;
