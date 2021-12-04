import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './navigation';
import i18n from './lang/i18n';
const initI18n = i18n;

const index = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
