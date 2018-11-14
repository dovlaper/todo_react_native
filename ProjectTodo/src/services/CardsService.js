import BaseService from './BaseService';

const ENDPOINTS = {
  GET_CARDS: '/cards',
  CREATE_CARD: '/cards/'
};

class CardsService extends BaseService {
  getCards = () => {
    return this.apiClient().get(ENDPOINTS.GET_CARDS);
  };

  addNewCard = data => {
    this.apiClient().post(ENDPOINTS.CREATE_CARD, data);
  };
}

const cardsService = new CardsService();
export default cardsService;
