import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import {StackActions} from '@react-navigation/routers';
import {Block, Text} from '../theme';

import routes from '../navigation/routes';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(function () {
      navigation.dispatch(StackActions.replace(routes.LOGIN_STACK));
    }, 2000);
  }, []);
  return (
    <Block>
      <Text>Test</Text>
    </Block>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
