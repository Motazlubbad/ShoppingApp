import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import {Formik} from 'formik';
import {UserSingUpSchema} from '../../config/ValidationSchemas';

const SingupScreen = ({navigation}) => {
  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h2} color={COLORS.primary}>
        Enter your information to Sing Up
      </Text>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          password: '',
          lat: '',
          lan: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={UserSingUpSchema}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
          setFieldValue,
        }) => (
          <Block noflex marginTop={SIZES.spacing16}>
            <AppTextInput
              title={'Name'}
              value={values.name}
              onChangeText={handleChange('name')}
              errors={touched.name && errors.name ? errors?.name : []}
              onBlur={() => setFieldTouched('name')}
            />

            <AppTextInput
              title={'Phone'}
              value={values.phone}
              onChangeText={handleChange('phone')}
              errors={touched.phone && errors.phone ? errors?.phone : []}
              onBlur={() => setFieldTouched('phone')}
              marginTop={SIZES.spacing16}
            />
            <AppTextInput
              title={'Address'}
              value={values.address}
              onChangeText={handleChange('address')}
              errors={touched.address && errors.address ? errors?.address : []}
              onBlur={() => setFieldTouched('address')}
              marginTop={SIZES.spacing16}
            />

            <AppTextInput
              title={'password'}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              errors={
                touched.password && errors.password ? errors?.password : []
              }
              onBlur={() => setFieldTouched('password')}
              marginTop={SIZES.spacing16}
            />

            <AppTextInput
              title={'password re-enter'}
              secureTextEntry
              value={values.password_confirmation}
              onChangeText={handleChange('password_confirmation')}
              errors={
                touched.password_confirmation && errors.password_confirmation
                  ? errors?.password_confirmation
                  : []
              }
              onBlur={() => setFieldTouched('password_confirmation')}
              marginTop={SIZES.spacing16}
            />
            <AppButton
              marginTop={SIZES.spacing16}
              title={'Sing Up'}
              onPress={handleSubmit}
            />
          </Block>
        )}
      </Formik>
    </Block>
  );
};

export default SingupScreen;

const styles = StyleSheet.create({});
