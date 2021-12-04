import client from './clinet';

const getAllProduct = () => client.get(`/product`);
const getProductDetails = id => client.get(`/product/${id}`);

export default {
  getAllProduct,
  getProductDetails,
};
