import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Block, Text} from '../theme/index';
import Separator from './Separator';
import {COLORS} from '../theme/theme';

const AppListItem = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex margin={[8, 0, 8, 0]}>
        <Text bold color={COLORS.secondary} marginBottom>
          {title}
        </Text>
        <Separator />
      </Block>
    </TouchableOpacity>
  );
};

export default AppListItem;

const styles = StyleSheet.create({});
