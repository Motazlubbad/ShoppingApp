import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppStyles from '../config/AppStyles';
import {Block} from '../theme/index';
import AppLoading from './AppLoading';

const AppBlockWithLoading = ({loading, ...props}) => {
  return (
    <Block {...props}>
      {loading && <AppLoading />}
      {props.children}
    </Block>
  );
};

export default AppBlockWithLoading;

const styles = StyleSheet.create({});
