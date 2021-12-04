import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import LoginScreen from '../screens/loginFlow/LoginScreen';
import LoginFlowHome from '../screens/loginFlow/LoginFlowHome';
import SingupScreen from '../screens/loginFlow/SingupScreen';

const Stack = createNativeStackNavigator();

export const LoginFlowStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LOGIN_HOME}
        component={LoginFlowHome}
        options={{
          headerShown: true,
          title: 'Home',
        }}
      />
      <Stack.Screen
        name={routes.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: true,
          title: 'Login',
        }}
      />
      <Stack.Screen
        name={routes.SINGUP_SCREEN}
        component={SingupScreen}
        options={{
          headerShown: true,
          title: 'Sing Up',
        }}
      />
    </Stack.Navigator>
  );
};
