import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';

import CartScreen from '../screens/cart/CartScreen';
import {useTranslation} from 'react-i18next';
import CheckoutScreen from '../screens/cart/CheckoutScreen';

const Stack = createNativeStackNavigator();

export const CartStack = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.CART_SCREEN}
        component={CartScreen}
        options={{title: t('cart')}}
      />
      <Stack.Screen
        name={routes.CHECKOUT_SCREEN}
        component={CheckoutScreen}
        options={{title: t('checkout')}}
      />
    </Stack.Navigator>
  );
};
