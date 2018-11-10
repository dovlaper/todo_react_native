import BaseService from './BaseService';
import { AsyncStorage } from 'react-native';

const ENDPOINTS = {
  GET_CARDS: '/cards',
};

class CardsService extends BaseService {

  constructor(props){
    super(props);
  }

  getCards = async token => {
    try {
        var response = this.apiClient().get(ENDPOINTS.GET_CARDS);
        response.then( resolve => console.log(resolve.data))
        .catch( error => console.log("GRESKA" + error));
    } catch {
      return;
    }
  };

}

const cardsService = new CardsService();
export default cardsService;