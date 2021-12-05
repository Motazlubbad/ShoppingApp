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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const AddAddressScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [coordinate, setCoordinate] = useState({
    latitude: 39.921262,
    longitude: 32.8499032,
  });

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
        setCoordinate(location);
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

        <MapView
          initialRegion={{
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}>
          <Marker
            draggable={true}
            coordinate={coordinate}
            onDragEnd={e => {
              setCoordinate(e.nativeEvent.coordinate);
              setUserAddress({
                ...userAddress,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          />
        </MapView>

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

const styles = StyleSheet.create({
  map: {height: '35%', marginTop: SIZES.spacing12},
});
