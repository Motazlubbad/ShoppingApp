import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme/index';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const UserPurchasesScreen = () => {
  const origin = {latitude: 39.938288, longitude: 32.917147};
  const destination = {latitude: 39.89721, longitude: 32.775897};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBdZrowKMAMBFVikgw_EPCIz4PW_HR-v5A';
  return (
    <Block noflex white>
      <MapView
        initialRegion={{
          latitude: 39.938288,
          longitude: 32.917147,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </Block>
  );
};

export default UserPurchasesScreen;

const styles = StyleSheet.create({
  map: {height: '100%'},
});
