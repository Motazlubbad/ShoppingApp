import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Block} from '../../theme/index';
import {COLORS, SIZES} from '../../theme/theme';
import Separator from '../Separator';

const AddressListItem = ({item, selected, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex color={selected ? COLORS.lightGray : COLORS.white}>
        <Block noflex margin={SIZES.spacing16}>
          <Text bold size={SIZES.h3} color={COLORS.secondary}>
            {item.title}
          </Text>
          <Text>{item.address}</Text>
        </Block>
        <Separator />
      </Block>
    </TouchableOpacity>
  );
};

export default AddressListItem;

const styles = StyleSheet.create({});
