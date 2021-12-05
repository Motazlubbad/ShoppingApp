import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';
import {useTranslation} from 'react-i18next';
import ListItems from '../../config/ListItems';
import SelectorPopUp from '../../components/profile/SelectorPopUp';
import StoreData from '../../utils/StoreData';

const LoginFlowHome = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [selectorVisible, setSelectorVisible] = useState(false);

  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h1} color={COLORS.primary}>
        {t('welcome')}
      </Text>
      <Block noflex marginTop={SIZES.spacing16}>
        <AppButton
          title={t('login')}
          onPress={() => {
            navigation.navigate(routes.LOGIN_SCREEN);
          }}
        />
        <AppButton
          marginTop={SIZES.spacing16}
          title={t('singUp')}
          onPress={() => {
            navigation.navigate(routes.SINGUP_SCREEN);
          }}
        />

        <AppButton
          marginTop={SIZES.spacing16}
          title={t('changeLanguage')}
          onPress={() => {
            setSelectorVisible(true);
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

export default LoginFlowHome;

const styles = StyleSheet.create({});
