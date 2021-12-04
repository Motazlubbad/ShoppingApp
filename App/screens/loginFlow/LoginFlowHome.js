import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import routes from '../../navigation/routes';

const LoginFlowHome = ({navigation}) => {
  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h1} color={COLORS.primary}>
        Welcome to the app
      </Text>
      <Block noflex marginTop={SIZES.spacing16}>
        <AppButton
          title={'Login'}
          onPress={() => {
            navigation.navigate(routes.LOGIN_SCREEN);
          }}
        />
        <AppButton
          marginTop
          title={'Sing Up'}
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
