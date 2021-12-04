const config = {
  screens: {
    AppStack: '',
    ProductStack: {
      screens: {
        ProductDetailScreen: {
          path: 'product/:id',
          parse: {
            id: id => `${id}`,
          },
        },
      },
    },
    CartStack: 'cart',
  },
};
const linking = {
  prefixes: ['tazecicek://app', 'https://tazecicek.4alabs.com'],
  config,
};
export default linking;
