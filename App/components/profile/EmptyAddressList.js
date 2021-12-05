import {t} from 'i18next';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Block} from '../../theme/index';
import {COLORS} from '../../theme/theme';
import AppButton from '../AppButton';

const EmptyAddressList = ({onPress}) => {
  return (
    <Block margin>
      <Text bold color={COLORS.secondary} center marginTop>
        {t('emptyAddressList')}
      </Text>
      <AppButton title={t('add')} marginTop onPress={onPress} />
    </Block>
  );
};

export default EmptyAddressList;

const styles = StyleSheet.create({});
