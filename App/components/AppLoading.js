import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';

const AppLoading = () => {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.primary}
      style={{marginLeft: 6}}
    />
  );
};

export default AppLoading;

const styles = StyleSheet.create({});
