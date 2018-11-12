import BaseService from './BaseService';

const ENDPOINTS = {
  GET_CARDS: '/cards'
};

class CardsService extends BaseService {
  getCards = async () => {
    var response = await this.apiClient().get(ENDPOINTS.GET_CARDS);
    return response;
  };
}

const cardsService = new CardsService();
export default cardsService;
