import client from './clinet';

const doLogin = userData => client.post('/login', userData);

export default {
  doLogin,
};
