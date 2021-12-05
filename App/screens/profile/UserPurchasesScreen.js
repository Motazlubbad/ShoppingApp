import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppFlatList from '../../components/AppFlatList';
import {Text, Block} from '../../theme';

import {usePurchaseReducer} from '../../reducers/purchaseReducer';
import EmptyListLayout from '../../components/EmptyListLayout';
import {t} from 'i18next';
import PurchaseListItem from '../../components/profile/PurchaseListItem';
import routes from '../../navigation/routes';

const UserPurchasesScreen = ({navigation}) => {
  const {purchaseList} = usePurchaseReducer();
  console.log(purchaseList);
  return (
    <Block white>
      <AppFlatList
        data={purchaseList}
        renderItem={({item}) => (
          <PurchaseListItem
            item={item}
            onPress={() =>
              navigation.navigate(routes.PURCHASE_DETAILS, {item: item})
            }
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => <EmptyListLayout text={t('noOrder')} />}
      />
    </Block>
  );
};

export default UserPurchasesScreen;

const styles = StyleSheet.create({});
