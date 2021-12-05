import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import product from '../../api/product';
import AppImage from '../../components/AppImage';
import AppButton from '../../components/AppButton';
import useApi from '../../hooks/useApi';
import {Block, Text} from '../../theme/index';
import AppBlockWithLoading from '../../components/AppBlockWithLoading';
import {useTranslation} from 'react-i18next';
import {SIZES} from '../../theme/theme';

const ProductDetailsScreen = ({route, navigation}) => {
  const id = route.params.id;
  const {t} = useTranslation();

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
      <AppImage
        url={`https://source.unsplash.com/random/200x200?sig=${productDetails.id}`}
        style={styles.image}
      />
      <Block noflex margin>
        <Text>
          <Text bold>{t('name')}:</Text> {productDetails?.name}
        </Text>
        <Text>
          <Text bold>{t('department')}:</Text> {productDetails?.department}
        </Text>
        <Text>
          <Text bold>{t('price')}:</Text> {productDetails?.price} TL
        </Text>
        <Text>
          <Text bold>{t('product')}</Text> {productDetails?.product}
        </Text>
      </Block>
      <AppButton marginTop title={t('addToCart')} />
    </AppBlockWithLoading>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
