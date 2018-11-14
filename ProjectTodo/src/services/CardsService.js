import BaseService from './BaseService';

const ENDPOINTS = {
  CARDS: '/cards/'
};

class CardsService extends BaseService {
  getCards = () => {
    return this.apiClient().get(ENDPOINTS.CARDS);
  };

  addNewCard = data => {
    return this.apiClient().post(ENDPOINTS.CARDS, data);
  };
}

const cardsService = new CardsService();
export default cardsService;
