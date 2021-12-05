import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import ProfileHomeScreen from '../screens/profile/ProfileHomeScreen';
import UserInfoScreen from '../screens/profile/UserInfoScreen';
import UserAddressScreen from '../screens/profile/UserAddressScreen';
import UserPurchasesScreen from '../screens/profile/UserPurchasesScreen';
import AddAddressScreen from '../screens/profile/AddAddressScreen';
import PurchaseDetailsScreen from '../screens/profile/PurchaseDetailsScreen';

const Stack = createNativeStackNavigator();

export const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileHomeScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={routes.USER_INFO}
        component={UserInfoScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={routes.USER_ADDRESS}
        component={UserAddressScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={routes.USER_PURCHASES}
        component={UserPurchasesScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={routes.ADD_ADDRESS}
        component={AddAddressScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={routes.PURCHASE_DETAILS}
        component={PurchaseDetailsScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};
