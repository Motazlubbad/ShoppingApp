import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Block} from '../../theme';
import GetLocation from 'react-native-get-location';
import {openSettings} from 'react-native-permissions';
import AppBlockWithLoading from '../../components/AppBlockWithLoading';
import {t} from 'i18next';
import AppTextInput from '../../components/AppTextInput';
import {SIZES} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import user from '../../api/user';
import {useAddressReducer} from '../../reducers/addressReducer';

const AddAddressScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {addItem, itemList} = useAddressReducer();

  const [userAddress, setUserAddress] = useState({
    id: itemList.length + 1,
    title: '',
    address: '',
    latitude: '',
    longitude: '',
  });

  const getUserLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setUserAddress({
          ...userAddress,
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        setLoading(false);
        openSettings().catch(() => console.warn('cannot open settings'));
      });
  };
  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <AppBlockWithLoading loading={loading} white>
      <Block>
        <AppTextInput
          title={t('title')}
          value={userAddress.title}
          onChangeText={txt => {
            setUserAddress({
              ...userAddress,
              title: txt,
            });
          }}
          marginTop={SIZES.spacing16}
        />
        <AppTextInput
          title={t('address')}
          value={userAddress.address}
          onChangeText={txt => {
            setUserAddress({
              ...userAddress,
              address: txt,
            });
          }}
          marginTop={SIZES.spacing16}
        />
        <AppButton
          title={t('add')}
          marginTop={SIZES.spacing16}
          onPress={() => {
            addItem(userAddress);
            navigation.goBack();
          }}
        />
      </Block>
    </AppBlockWithLoading>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
