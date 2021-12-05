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

const CheckoutScreen = ({navigation}) => {
  const {itemList} = useAddressReducer();
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [cardInfo, setCardInfo] = useState({});

  const footerComponent = () => (
    <Block noflex>
      <AppTextInput
        title={t('name')}
        value={cardInfo.fullName}
        onChangeText={txt => {
          setCardInfo({
            ...cardInfo,
            title: txt,
          });
        }}
        marginTop={SIZES.spacing16}
      />
      <AppTextInput
        title={t('cardNumber')}
        value={cardInfo.cardNumber}
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
            marginTop={SIZES.spacing16}
            keyboardType={'phone-pad'}
          />
        </Block>
      </Block>
      <AppButton
        title={t('pay')}
        marginTop={SIZES.spacing16}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Block>
  );
  return (
    <Block white>
      <Block style={styles.addressList}>
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
          ListFooterComponent={footerComponent}
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
    </Block>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});
