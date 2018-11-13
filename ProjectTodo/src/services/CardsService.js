import BaseService from './BaseService';

const ENDPOINTS = {
  GET_CARDS: '/cards',
  CREATE_CARD: '/cards/'
};

class CardsService extends BaseService {
  getCards = async () => {
    var response = await this.apiClient().get(ENDPOINTS.GET_CARDS);
    return response;
  };

  addNewCard = async data => {
    var response = await this.apiClient().post(ENDPOINTS.CREATE_CARD, data);
    return response;
  };
}

const cardsService = new CardsService();
export default cardsService;
