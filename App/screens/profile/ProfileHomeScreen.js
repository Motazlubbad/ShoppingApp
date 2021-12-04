import React from 'react';
import {StyleSheet} from 'react-native';
import AppListItem from '../../components/AppListItem';
import {Block} from '../../theme/index';
import routes from '../../navigation/routes';

const ProfileHomeScreen = ({navigation}) => {
  return (
    <Block white>
      <Block noflex marginTop>
        <AppListItem
          title={'User Info'}
          onPress={() => {
            navigation.navigate(routes.USER_INFO);
          }}
        />
        <AppListItem
          title={'User address'}
          onPress={() => {
            navigation.navigate(routes.USER_ADDRESS);
          }}
        />
        <AppListItem
          title={'Previous purchases'}
          onPress={() => {
            navigation.navigate(routes.USER_PURCHASES);
          }}
        />
      </Block>
    </Block>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({});
