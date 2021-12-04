import {HeaderBackButton} from '../components';
import React from 'react';
import {Platform} from 'react-native';
import colors from './colors';

export const options = {
  headerLeft: props => <HeaderBackButton />,
  headerTitleAlign: 'center',
  headerStyle: { borderBottomWidth: Platform.OS === 'android' ? 0.9 : 0.5, borderColor: colors.grey }
};
