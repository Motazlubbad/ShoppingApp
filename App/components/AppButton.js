import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from '../theme/index';
import {COLORS, SIZES} from '../theme/theme';

const AppButton = ({title, ...otherProps}) => {
  return (
    <Button style={styles.button} {...otherProps}>
      <Text center size={18} color={COLORS.white}>
        {title}
      </Text>
    </Button>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: SIZES.spacing32,
  },
});
