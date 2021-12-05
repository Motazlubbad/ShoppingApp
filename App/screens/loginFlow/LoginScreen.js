import React, {useLayoutEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import routes from '../../navigation/routes';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {LoginSchema} from '../../config/ValidationSchemas';
import {useAuthReducer} from '../../reducers/authReducer';
import ListItems from '../../config/ListItems';
import {StackActions} from '@react-navigation/routers';
import AppAlert from '../../utils/AppAlert';
import StoreData from '../../utils/StoreData';

const LoginScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {setLogin} = useAuthReducer();

  const showError = () => {
    AppAlert.errorAlert({
      errorText: t('controlYourInfo'),
      okText: t('ok'),
    });
  };
  return (
    <Block padding white>
      <Text center marginTop size={SIZES.h2} color={COLORS.primary}>
        {t('enterYourInfo')}
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          const user = ListItems.userList.find(item =>
            item.email === values.email ? item : null,
          );
          if (user) {
            if (user.password == values.password) {
              setLogin(user);
              StoreData.storeData(StoreData.USER_KEY, JSON.stringify(user));
              navigation.dispatch(StackActions.replace(routes.HOME_SCREEN));
            } else showError();
          } else showError();
        }}
        validationSchema={LoginSchema}>
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
              title={t('email')}
              value={values.email}
              onChangeText={handleChange('email')}
              errors={touched.email && errors.email ? errors?.email : []}
              onBlur={() => setFieldTouched('email')}
              keyboardType={'email-address'}
            />
            <AppTextInput
              title={t('password')}
              value={values.password}
              onChangeText={handleChange('password')}
              errors={
                touched.password && errors.password ? errors?.password : []
              }
              onBlur={() => setFieldTouched('password')}
              secureTextEntry
              marginTop={SIZES.spacing16}
            />

            <AppButton
              marginTop={SIZES.spacing16}
              title={t('login')}
              onPress={handleSubmit}
            />
          </Block>
        )}
      </Formik>
    </Block>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
