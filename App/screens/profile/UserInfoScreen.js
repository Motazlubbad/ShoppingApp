import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import product from '../../api/product';

import useApi from '../../hooks/useApi';
import {Block, Text} from '../../theme/index';
import AppBlockWithLoading from '../../components/AppBlockWithLoading';
import user from '../../api/user';
import AppImage from '../../components/AppImage';
import {useTranslation} from 'react-i18next';

const UserInfoScreen = ({route, navigation}) => {
  const id = route.params.id;
  const [userDetails, setUserDetails] = useState({});
  const userApi = useApi(user.getUser);
  const {t} = useTranslation();

  const getData = async () => {
    let response = await userApi.request(id);
    if (response.ok) {
      setUserDetails(response.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <AppBlockWithLoading white loading={userApi.loading}>
      <Block center noflex margin>
        <AppImage
          url={'https://cdn-icons-png.flaticon.com/512/1/1247.png'}
          style={styles.avatar}
        />
      </Block>
      <Block>
        <Block noflex margin>
          <Text>
            <Text bold>{t('name')}:</Text> {userDetails?.name}
          </Text>
          <Text>
            <Text bold>{t('title')}:</Text> {userDetails?.title}
          </Text>
          <Text>
            <Text bold>{t('username')}:</Text> {userDetails?.username}
          </Text>
        </Block>
      </Block>
    </AppBlockWithLoading>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
  },
});
