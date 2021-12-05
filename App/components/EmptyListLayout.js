import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Block} from '../theme';
import {COLORS, SIZES} from '../theme/theme';

const EmptyListLayout = ({text}) => {
  return (
    <Block center marginTop={SIZES.spacing12}>
      <Text color={COLORS.secondary} bold size={SIZES.h3}>
        {text}
      </Text>
    </Block>
  );
};

export default EmptyListLayout;

const styles = StyleSheet.create({});
