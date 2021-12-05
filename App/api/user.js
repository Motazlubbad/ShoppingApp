import client from './clinet';

const newUser = data => client.post(`/user`, data);

export default {
  newUser,
};
