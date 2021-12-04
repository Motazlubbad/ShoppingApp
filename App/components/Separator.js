import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from '../config/colors';
import {Block} from '../theme/index';

const Separator = ({backgroundColor = colors.grey}) => {
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
