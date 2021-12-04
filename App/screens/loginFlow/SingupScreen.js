import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';

const SingupScreen = ({navigation}) => {
  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h2} color={COLORS.primary}>
        Enter your information to Sing Up
      </Text>
      <Block noflex marginTop={SIZES.spacing16}>
        <AppTextInput title={'Name'} />
        <AppTextInput
          title={'User name'}
          marginTop={SIZES.spacing16}
          keyboardType={'email-address'}
        />
        <AppTextInput title={'Title'} marginTop={SIZES.spacing16} />

        <AppTextInput
          title={'password'}
          secureTextEntry
          marginTop={SIZES.spacing16}
        />

        <AppTextInput
          title={'password re-enter'}
          secureTextEntry
          marginTop={SIZES.spacing16}
        />
        <AppButton
          marginTop={SIZES.spacing16}
          title={'Sing Up'}
          onPress={() => {}}
        />
      </Block>
    </Block>
  );
};

export default SingupScreen;

const styles = StyleSheet.create({});
