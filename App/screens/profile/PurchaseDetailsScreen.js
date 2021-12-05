import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme/index';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {COLORS, SIZES} from '../../theme/theme';
import {t} from 'i18next';
import AppFlatList from '../../components/AppFlatList';
import ProductListItem from '../../components/product/ProductListItem';

const PurchaseDetailsScreen = ({route, navigation}) => {
  const item = route.params.item;
  const [tripInfo, setTripInfo] = useState(null);
  const origin = {latitude: 39.9212621, longitude: 32.8499032};
  const destination = {
    latitude: item.address.latitude,
    longitude: item.address.longitude,
  };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBdZrowKMAMBFVikgw_EPCIz4PW_HR-v5A';
  return (
    <Block white>
      <Block>
        <Text size={SIZES.h2} bold margin color={COLORS.secondary}>
          {t('orderTracking')}
        </Text>
        <MapView
          initialRegion={{
            latitude: origin.latitude,
            longitude: origin.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}>
          <MapView.Marker coordinate={origin} />
          <MapView.Marker coordinate={destination} />
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="blue"
            onReady={result => setTripInfo(result)}
          />
        </MapView>
        <Block margin noflex>
          <Text size={SIZES.h3} bold>{`${t('distance')}: ${
            tripInfo?.distance
          } km`}</Text>
          <Text size={SIZES.h3} bold>{`${t('duration')}: ${
            tripInfo ? Math.round(tripInfo?.duration) : 0
          } dk.`}</Text>
        </Block>
        <Block>
          <Text size={SIZES.h2} bold margin color={COLORS.secondary}>
            {t('products')}
          </Text>
          <AppFlatList
            data={item.items}
            renderItem={({item}) => (
              <ProductListItem onPress={() => {}} item={item} />
            )}
            keyExtractor={item => item.id}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default PurchaseDetailsScreen;

const styles = StyleSheet.create({
  map: {height: '35%'},
});
