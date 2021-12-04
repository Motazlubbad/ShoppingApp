import React, {useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import routes from '../../navigation/routes';

const LoginScreen = ({navigation}) => {
  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h2} color={COLORS.primary}>
        Enter your information to login
      </Text>
      <Block noflex marginTop={SIZES.spacing16}>
        <AppTextInput title={'User name'} keyboardType={'email-address'} />
        <AppTextInput
          title={'password'}
          secureTextEntry
          marginTop={SIZES.spacing16}
        />

        <AppButton
          marginTop={SIZES.spacing16}
          title={'Login'}
          onPress={() => {
            navigation.navigate(routes.HOME_SCREEN);
          }}
        />
      </Block>
    </Block>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
