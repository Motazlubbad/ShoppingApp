import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import {Block, Text, TextInput} from '../theme';
import useApi from '../hooks/useApi';
import product from '../api/product';
import routes from '../navigation/routes';

const SplashScreen = ({navigation}) => {
  const [data, setData] = useState('');
  const productApi = useApi(product.getAllProduct);

  const getData = async () => {
    let response = await productApi.request(1);
    if (response.ok) {
      setData(JSON.stringify(response.data));
    }
  };
  return (
    <Block>
      <Text>Test</Text>
      <AppButton
        title={'Test'}
        onPress={() => {
          navigation.navigate(routes.LOGIN_STACK);
        }}
      />
      <AppTextInput />
      <Text>{data}</Text>
    </Block>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
