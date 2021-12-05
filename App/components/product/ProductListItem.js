import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Block} from '../../theme';
import AppImage from '../AppImage';
import {SIZES, COLORS} from '../../theme/theme';
import {useTranslation} from 'react-i18next';

const ProductListItem = ({onPress, item}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex style={styles.card}>
        <AppImage
          url={`https://source.unsplash.com/random/200x200?sig=${item.id}`}
          style={styles.image}
        />
        <Block noflex margin>
          <Text>
            <Text bold>{t('name')}:</Text> {item.name}
          </Text>
          <Text>
            <Text bold>{t('department')}:</Text> {item.department}
          </Text>
          <Text>
            <Text bold>{t('price')}:</Text> {item.price} TL
          </Text>
          <Text>
            <Text bold>{t('product')}:</Text> {item.product}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: SIZES.spacing8,
    marginTop: SIZES.spacing8,
    marginBottom: SIZES.spacing8,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});
