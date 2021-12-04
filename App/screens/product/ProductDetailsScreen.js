import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import product from '../../api/product';
import AppImage from '../../components/AppImage';
import AppButton from '../../components/AppButton';
import useApi from '../../hooks/useApi';
import {Block, Text} from '../../theme/index';
import AppBlockWithLoading from '../../components/AppBlockWithLoading';

const ProductDetailsScreen = ({route, navigation}) => {
  const id = route.params.id;
  const [productDetails, setProductDetails] = useState({});
  const productApi = useApi(product.getProductDetails);
  const getData = async () => {
    let response = await productApi.request(id);
    if (response.ok) {
      setProductDetails(response.data.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: productDetails?.name,
    });
  }, [navigation, productDetails]);
  return (
    <AppBlockWithLoading loading={productApi.loading} white>
      <AppImage url={productDetails?.image} />
      <Block noflex margin>
        <Text>
          <Text bold>Name:</Text> {productDetails?.name}
        </Text>
        <Text>
          <Text bold>Department:</Text> {productDetails?.department}
        </Text>
        <Text>
          <Text bold>Price:</Text> {productDetails?.price} TL
        </Text>
        <Text>
          <Text bold>Product:</Text> {productDetails?.product}
        </Text>
      </Block>
      <AppButton marginTop title={'Add to cart'} />
    </AppBlockWithLoading>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
