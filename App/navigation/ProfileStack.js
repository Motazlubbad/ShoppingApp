import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import ProfileHomeScreen from '../screens/profile/ProfileHomeScreen';
import UserInfoScreen from '../screens/profile/UserInfoScreen';
import UserAddressScreen from '../screens/profile/UserAddressScreen';
import UserPurchasesScreen from '../screens/profile/UserPurchasesScreen';

const Stack = createNativeStackNavigator();

export const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileHomeScreen}
        options={{title: 'Welcome motaz'}}
      />
      <Stack.Screen
        name={routes.USER_INFO}
        component={UserInfoScreen}
        options={{title: 'User Info'}}
      />
      <Stack.Screen
        name={routes.USER_ADDRESS}
        component={UserAddressScreen}
        options={{title: 'User Address'}}
      />
      <Stack.Screen
        name={routes.USER_PURCHASES}
        component={UserPurchasesScreen}
        options={{title: 'Purchases'}}
      />
    </Stack.Navigator>
  );
};
