import httpService from '../services/HttpService';

class BaseService {
  constructor() {
    this.api = httpService;
  }

  apiClient = () => {
    return this.api.client;
  };
}

export default BaseService;
