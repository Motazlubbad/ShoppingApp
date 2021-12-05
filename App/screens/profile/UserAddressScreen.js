import {t} from 'i18next';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppFlatList from '../../components/AppFlatList';
import AppButton from '../../components/AppButton';
import {Text, Block} from '../../theme';
import {useAddressReducer} from '../../reducers/addressReducer';
import EmptyAddressList from '../../components/profile/EmptyAddressList';
import routes from '../../navigation/routes';
import AddressListItem from '../../components/profile/AddressListItem';

const UserAddressScreen = ({navigation}) => {
  const {itemList} = useAddressReducer();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => navigation.navigate(routes.ADD_ADDRESS)}>
          {t('add')}
        </Text>
      ),
    });
  }, [navigation, itemList]);
  return (
    <Block white>
      <AppFlatList
        data={itemList}
        renderItem={({item}) => <AddressListItem item={item} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <EmptyAddressList
            onPress={() => {
              navigation.navigate(routes.ADD_ADDRESS);
            }}
          />
        )}
      />
    </Block>
  );
};

export default UserAddressScreen;

const styles = StyleSheet.create({});
