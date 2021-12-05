import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './routes';
import LoginScreen from '../screens/loginFlow/LoginScreen';
import LoginFlowHome from '../screens/loginFlow/LoginFlowHome';
import SignupScreen from '../screens/loginFlow/SignupScreen';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator();

export const LoginFlowStack = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LOGIN_HOME}
        component={LoginFlowHome}
        options={{
          headerShown: true,
          title: '',
        }}
      />
      <Stack.Screen
        name={routes.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: true,
          title: t('login'),
        }}
      />
      <Stack.Screen
        name={routes.SINGUP_SCREEN}
        component={SignupScreen}
        options={{
          headerShown: true,
          title: t('singUp'),
        }}
      />
    </Stack.Navigator>
  );
};
