import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../theme/theme';

const Separator = ({backgroundColor = COLORS.lightGray}) => {
  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
  },
});
