import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Block} from '../../theme';
import {t} from 'i18next';
import AppFlatList from '../../components/AppFlatList';
import {useAddressReducer} from '../../reducers/addressReducer';
import EmptyAddressList from '../../components/profile/EmptyAddressList';
import routes from '../../navigation/routes';
import AddressListItem from '../../components/profile/AddressListItem';
import AppTextInput from '../../components/AppTextInput';
import {SIZES} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import {usePurchaseReducer} from '../../reducers/purchaseReducer';
import AppAlert from '../../utils/AppAlert';
import {useCartReducer} from '../../reducers/cartReducer';
import {Masks} from 'react-native-mask-input';
import BaseConfig from '../../config/BaseConfig';

const CheckoutScreen = ({navigation}) => {
  const {itemList} = useAddressReducer();
  const {itemList: cartItems, deleteAllItem} = useCartReducer();

  const {addPurchase, purchaseList} = usePurchaseReducer();

  const [selectedAddress, setSelectedAddress] = useState(0);
  const [cardInfo, setCardInfo] = useState({
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });
  const doPayment = () => {
    addPurchase({
      id: purchaseList.length + 1,
      address: itemList.find(item =>
        item.id == selectedAddress ? item : null,
      ),
      items: cartItems,
    });
    deleteAllItem();
    AppAlert.okAlert({
      title: t('checkout'),
      subTitle: t('OrderDone'),
      onOk: () => {
        navigation.goBack();
      },
    });
  };
  return (
    <Block white>
      <Block noflex style={styles.addressList}>
        <Text margin bold>
          {t('selectAddress')}
        </Text>
        <AppFlatList
          data={itemList}
          renderItem={({item}) => (
            <AddressListItem
              selected={selectedAddress == item.id}
              item={item}
              onPress={() => {
                setSelectedAddress(item.id);
              }}
            />
          )}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <EmptyAddressList
              onPress={() => {
                navigation.navigate(routes.PROFILE_STACK, {
                  screen: routes.ADD_ADDRESS,
                });
              }}
            />
          )}
        />
      </Block>
      <Block noflex>
        <AppTextInput
          title={t('name')}
          value={cardInfo.fullName}
          onChangeText={txt => {
            setCardInfo({
              ...cardInfo,
              fullName: txt,
            });
          }}
          marginTop={SIZES.spacing16}
        />
        <AppTextInput
          title={t('cardNumber')}
          value={cardInfo.cardNumber}
          mask={Masks.CREDIT_CARD}
          isMasked
          onChangeText={txt => {
            setCardInfo({
              ...cardInfo,
              cardNumber: txt,
            });
          }}
          marginTop={SIZES.spacing16}
          keyboardType={'phone-pad'}
        />
        <Block row space={'between'} marginHorizontal={SIZES.spacing32}>
          <Block marginRight>
            <AppTextInput
              title={t('expirationDate')}
              value={cardInfo.expirationDate}
              noMargin
              mask={BaseConfig.creditCardMonthYearMask}
              isMasked
              onChangeText={txt => {
                setCardInfo({
                  ...cardInfo,
                  expirationDate: txt,
                });
              }}
              marginTop={SIZES.spacing16}
              keyboardType={'phone-pad'}
            />
          </Block>
          <Block marginLeft>
            <AppTextInput
              title={t('securityCode')}
              value={cardInfo.securityCode}
              onChangeText={txt => {
                setCardInfo({
                  ...cardInfo,
                  securityCode: txt,
                });
              }}
              noMargin
              mask={BaseConfig.creditCarCVCMask}
              isMasked
              marginTop={SIZES.spacing16}
              keyboardType={'phone-pad'}
            />
          </Block>
        </Block>
        <AppButton
          title={t('pay')}
          marginTop={SIZES.spacing16}
          onPress={() => {
            if (selectedAddress === 0) {
              AppAlert.okAlert({
                title: t('address'),
                subTitle: t('selectAddress'),
              });
            } else {
              doPayment();
            }
          }}
        />
      </Block>
    </Block>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  addressList: {
    maxHeight: '25%',
  },
});
