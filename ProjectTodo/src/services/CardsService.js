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

  editCard = (id, data) => {
    return this.apiClient().put(ENDPOINTS.CARDS + id, data);
  };

  deleteCard = id => {
    return this.apiClient().delete(ENDPOINTS.CARDS + id);
  };
}

const cardsService = new CardsService();
export default cardsService;
