import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '../theme/index';
import Separator from './Separator';
import {COLORS, SIZES} from '../theme/theme';

const AppListItem = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex>
        <Block noflex marginVertical={SIZES.spacing12}>
          <Text bold color={COLORS.secondary} marginLeft={SIZES.spacing8}>
            {title}
          </Text>
        </Block>
        <Separator />
      </Block>
    </TouchableOpacity>
  );
};

export default AppListItem;

const styles = StyleSheet.create({});
