import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import useApi from '../../hooks/useApi';
import {Block, Text} from '../../theme/index';
import product from '../../api/product';
import AppFlatList from '../../components/AppFlatList';
import ProductListItem from '../../components/product/ProductListItem';
import routes from '../../navigation/routes';
import AppLoading from '../../components/AppLoading';

const ProductListScreen = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const productApi = useApi(product.getAllProduct);

  const getData = async () => {
    let response = await productApi.request(1);
    if (response.ok) {
      setProductList(response.data.items);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Block white>
      <AppFlatList
        data={productList}
        renderItem={({item}) => (
          <ProductListItem
            onPress={() => {
              navigation.navigate(routes.PRODUCT_DETAILS, {id: item.id});
            }}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={() => {
          return <Block>{productApi.loading ? <AppLoading /> : null}</Block>;
        }}
      />
    </Block>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({});
