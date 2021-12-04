import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AppListItem from '../../components/AppListItem';
import {Block} from '../../theme/index';
import routes from '../../navigation/routes';
import {useTranslation} from 'react-i18next';
import SelectorPopUp from '../../components/profile/SelectorPopUp';

const ProfileHomeScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [selectorVisible, setSelectorVisible] = useState(false);
  const langList = [
    {title: 'English', id: 'en'},

    {title: 'Türkçe', id: 'tr'},
  ];
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
        <AppListItem
          title={t('changeLanguage')}
          onPress={() => {
            setSelectorVisible(true);
          }}
        />
      </Block>
      <SelectorPopUp
        itemsList={langList}
        isVisible={selectorVisible}
        hideModal={() => {
          setSelectorVisible(false);
        }}
        onSelect={item => {
          i18n.changeLanguage(item.id);
        }}
      />
    </Block>
  );
};

export default ProfileHomeScreen;

const styles = StyleSheet.create({});
