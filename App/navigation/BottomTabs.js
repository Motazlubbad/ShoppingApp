import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginFlowStack} from './LoginFlowStack';
import {ProductsStack} from './ProductsStack';
import {Icon} from '../theme';
import {IconTypes} from '../theme/Icon';
import {ProfileStack} from './ProfileStack';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductsStack}
        options={{
          headerShown: false,
          headerTitle: '',
          title: t('products'),
          tabBarIcon: ({color, size}) => (
            <Icon
              type={IconTypes.fontAwesome}
              color={color}
              name={'list'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          headerTitle: '',
          title: t('cart'),
          tabBarIcon: ({color, size}) => (
            <Icon
              type={IconTypes.fontAwesome}
              color={color}
              name={'shopping-cart'}
              size={size}
            />
          ),
        }}
        component={LoginFlowStack}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          headerTitle: '',
          title: t('profile'),
          tabBarIcon: ({color, size}) => (
            <Icon
              type={IconTypes.fontAwesome}
              color={color}
              name={'user'}
              size={size}
            />
          ),
        }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};
