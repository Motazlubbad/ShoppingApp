import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const AppImage = ({url, ...otherProps}) => {
  return (
    <FastImage
      source={{
        uri: url,
      }}
      {...otherProps}
      resizeMode={FastImage.resizeMode.cover}
    />
  );
};

export default AppImage;

const styles = StyleSheet.create({
  image: {},
});
