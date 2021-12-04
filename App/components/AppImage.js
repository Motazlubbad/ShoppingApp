import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const AppImage = ({url}) => {
  return (
    <FastImage
      style={{width: 200, height: 200}}
      source={{
        uri: url,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default AppImage;

const styles = StyleSheet.create({});
