import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/routers';
import {Block, Icon, Text} from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import routes from '../navigation/routes';
import {IconTypes} from '../theme/Icon';
import {COLORS, SIZES} from '../theme/theme';
import StoreData from '../utils/StoreData';
import {useTranslation} from 'react-i18next';
import {useAuthReducer} from '../reducers/authReducer';

const SplashScreen = ({navigation}) => {
  const {i18n} = useTranslation();
  const {setLogin} = useAuthReducer();

  const getStoredUser = async () => {
    const user = await AsyncStorage.getItem(StoreData.USER_KEY);
    console.log(user);
    if (user) {
      setLogin(JSON.parse(user));
      navigation.dispatch(StackActions.replace(routes.HOME_SCREEN));
    } else {
      navigation.dispatch(StackActions.replace(routes.LOGIN_STACK));
    }
  };
  const getStoredLang = async () => {
    const lang = await AsyncStorage.getItem(StoreData.LANG_KEY);
    if (lang) {
      i18n.changeLanguage(lang);
    } else {
      StoreData.storeData(StoreData.LANG_KEY, i18n.language);
    }
    getStoredUser();
  };
  useEffect(() => {
    setTimeout(function () {
      getStoredLang();
    }, 2000);
  }, []);
  return (
    <Block center middle white>
      <Icon
        type={IconTypes.fontAwesome}
        color={COLORS.primary}
        name={'shopping-cart'}
        size={140}
      />
      <Text marginTop size={SIZES.h1}>
        The Shopping APP
      </Text>
    </Block>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
