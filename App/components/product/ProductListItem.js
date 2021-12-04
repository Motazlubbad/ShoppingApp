import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Block} from '../../theme';
import AppImage from '../AppImage';
import AppStyles from '../../config/AppStyles';
import {SIZES, COLORS} from '../../theme/theme';

const ProductListItem = ({onPress, item}) => {
  console.log(item);
  return (
    <TouchableOpacity onPress={onPress}>
      <Block noflex style={styles.card}>
        <AppImage url={item.image} />
        <Block noflex margin>
          <Text>
            <Text bold>Name:</Text> {item.name}
          </Text>
          <Text>
            <Text bold>Department:</Text> {item.department}
          </Text>
          <Text>
            <Text bold>Price:</Text> {item.price} TL
          </Text>
          <Text>
            <Text bold>Product:</Text> {item.product}
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
  },
});
