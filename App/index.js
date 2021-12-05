import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './navigation';
import i18n from './lang/i18n';
import {Provider} from 'react-redux';
import store from './store';

const initI18n = i18n;

const index = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default index;

const styles = StyleSheet.create({});
