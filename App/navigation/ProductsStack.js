import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import LoginScreen from '../screens/loginFlow/LoginScreen';
import LoginFlowHome from '../screens/loginFlow/LoginFlowHome';
import SingupScreen from '../screens/loginFlow/SingupScreen';
import ProductListScreen from '../screens/product/ProductListScreen';
import ProductDetailsScreen from '../screens/product/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

export const ProductsStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PRODUCT_LIST_SCREEN}
        component={ProductListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
