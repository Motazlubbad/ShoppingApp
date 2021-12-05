import {t} from 'i18next';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Block} from '../../theme/index';
import {COLORS, SIZES} from '../../theme/theme';
import Separator from '../Separator';

const PurchaseListItem = ({item, selected, onPress = () => {}}) => {
  console.log(item);
  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex color={selected ? COLORS.lightGray : COLORS.white}>
        <Block noflex margin={SIZES.spacing16}>
          <Text bold size={SIZES.h3} color={COLORS.secondary}>
            {t('orderNo')}: {item.id}
          </Text>
          <Text>
            {t('totalItem')}: {item.items.length}
          </Text>
          <Text>
            {t('address')}: {item.address.title}
          </Text>
        </Block>
        <Separator />
      </Block>
    </TouchableOpacity>
  );
};

export default PurchaseListItem;

const styles = StyleSheet.create({});
