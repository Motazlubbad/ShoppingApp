import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import AppListItem from '../../components/AppListItem';
import {Block} from '../../theme/index';
import routes from '../../navigation/routes';
import {useTranslation} from 'react-i18next';
import SelectorPopUp from '../../components/profile/SelectorPopUp';
import ListItems from '../../config/ListItems';
import {useAuthReducer} from '../../reducers/authReducer';
import StoreData from '../../utils/StoreData';
import {StackActions} from '@react-navigation/routers';

const ProfileHomeScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [selectorVisible, setSelectorVisible] = useState(false);
  const {userData, doLogout} = useAuthReducer();

  const logout = () => {
    doLogout();
    StoreData.deleteData(StoreData.ADDRESS_KEY);
    navigation.dispatch(StackActions.replace(routes.SPLASH_SCREEN));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${userData?.name}`,
      headerTitleAlign: 'center',
    });
  }, [navigation, userData]);
  return (
    <Block white>
      <Block noflex marginTop>
        <AppListItem
          title={t('userInfo')}
          onPress={() => {
            navigation.navigate(routes.USER_INFO, {id: userData.id});
          }}
        />
        <AppListItem
          title={t('userAddress')}
          onPress={() => {
            navigation.navigate(routes.USER_ADDRESS);
          }}
        />
        <AppListItem
          title={t('previousPurchases')}
          onPress={() => {
            navigation.navigate(routes.USER_PURCHASES);
          }}
        />
        <AppListItem
          title={t('changeLanguage')}
          onPress={() => {
            setSelectorVisible(true);
          }}
        />
        <AppListItem
          title={t('logout')}
          onPress={() => {
            logout();
          }}
        />
      </Block>
      <SelectorPopUp
        itemsList={ListItems.langList}
        isVisible={selectorVisible}
        hideModal={() => {
          setSelectorVisible(false);
        }}
        onSelect={item => {
          StoreData.storeData(StoreData.LANG_KEY, item.id);
          i18n.changeLanguage(item.id);
        }}
      />
    </Block>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({});
