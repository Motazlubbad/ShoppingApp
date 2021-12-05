import client from './clinet';
import client2 from './clinet2';

const newUser = data => client.post(`/user`, data);
const getUser = id => client2.get(`/user/${id}`);

export default {
  newUser,
  getUser,
};
