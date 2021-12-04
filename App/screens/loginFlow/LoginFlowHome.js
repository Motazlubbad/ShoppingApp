import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';
import {useTranslation} from 'react-i18next';

const LoginFlowHome = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h1} color={COLORS.primary}>
        Welcome to the app
      </Text>
      <Block noflex marginTop={SIZES.spacing16}>
        <AppButton
          title={t('Login')}
          onPress={() => {
            navigation.navigate(routes.LOGIN_SCREEN);
          }}
        />
        <AppButton
          marginTop
          title={t('singUp')}
          onPress={() => {
            navigation.navigate(routes.SINGUP_SCREEN);
          }}
        />
      </Block>
    </Block>
  );
};

export default LoginFlowHome;

const styles = StyleSheet.create({});
