import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import routes from './routes';
import SplashScreen from '../screens/SplashScreen';
import {LoginFlowStack} from './LoginFlowStack';
import {BottomTabs} from './BottomTabs';

const RootStackScreen = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{animationEnabled: true, headerBackTitleVisible: false}}
      mode="modal">
      <RootStack.Screen
        name={routes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name={routes.LOGIN_STACK}
        component={LoginFlowStack}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />

      <RootStack.Screen
        name={routes.HOME_SCREEN}
        component={BottomTabs}
        options={{
          headerShown: false,
          headerTitle: '',
        }}
      />
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
