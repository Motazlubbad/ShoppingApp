import {t} from 'i18next';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppFlatList from '../../components/AppFlatList';
import AppButton from '../../components/AppButton';
import EmptyListLayout from '../../components/EmptyListLayout';
import ProductListItem from '../../components/product/ProductListItem';
import routes from '../../navigation/routes';
import {useCartReducer} from '../../reducers/cartReducer';
import {Text, Block} from '../../theme';

const CartScreen = ({navigation}) => {
  const {itemList} = useCartReducer();
  console.log(itemList);
  return (
    <Block white>
      <AppFlatList
        data={itemList}
        renderItem={({item}) => (
          <ProductListItem
            onPress={() => {
              navigation.navigate(routes.PRODUCT_DETAILS, {id: item.id});
            }}
            item={item}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <EmptyListLayout text={t('emptyCart')} />}
      />
      {itemList.length > 0 && (
        <Block noflex margin>
          <AppButton
            title={'checkout'}
            onPress={() => navigation.navigate(routes.CHECKOUT_SCREEN)}
          />
        </Block>
      )}
    </Block>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
