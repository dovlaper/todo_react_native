import axios from 'axios';

class HttpService {
  constructor() {
    this.client = axios.create({ baseURL: 'http://todo.test/api/' });
  }

  attachHeaders(headers) {
    Object.assign(this.client.defaults.headers, headers);
  }
}
const httpService = new HttpService();
export default httpService;
