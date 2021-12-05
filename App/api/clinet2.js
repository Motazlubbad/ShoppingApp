import {create} from 'apisauce';
import BaseConfig from '../config/BaseConfig';

const apiClient = create({
  baseURL: BaseConfig.ApiUrl2,
  proxy: false,
});

apiClient.addAsyncRequestTransform(async request => {
  request.headers['Content-Type'] = 'application/json';
});

export default apiClient;
