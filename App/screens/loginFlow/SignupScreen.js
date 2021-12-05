import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Text} from '../../theme';
import {SIZES, COLORS} from '../../theme/theme';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import {Formik} from 'formik';
import {UserSingUpSchema} from '../../config/ValidationSchemas';
import {useTranslation} from 'react-i18next';
import {useAuthReducer} from '../../reducers/authReducer';
import AppBlockWithLoading from '../../components/AppBlockWithLoading';
import useApi from '../../hooks/useApi';
import user from '../../api/user';
import AppAlert from '../../utils/AppAlert';
import StoreData from '../../utils/StoreData';
import {StackActions} from '@react-navigation/routers';
import routes from '../../navigation/routes';

const SignupScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {setLogin} = useAuthReducer();
  const userApi = useApi(user.newUser);

  const registerUser = async data => {
    let response = await userApi.request(data);
    if (response.ok) {
      setLogin(response.data.data);
      StoreData.storeData(
        StoreData.USER_KEY,
        JSON.stringify(response.data.data),
      );
      AppAlert.okAlert({
        onOk: () =>
          navigation.dispatch(StackActions.replace(routes.HOME_SCREEN)),
        title: t('singUp'),
        subTitle: response.data.message,
      });
    } else {
      AppAlert.errorAlert({
        errorText: t('controlYourInfo'),
        okText: t('ok'),
      });
    }
  };

  return (
    <AppBlockWithLoading padding white loading={userApi.loading}>
      <Text center marginTop size={SIZES.h2} color={COLORS.primary}>
        {t('signUpInfo')}
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
          registerUser({
            name: values.name,
            userName: values.name,
            password: values.password,
            title: 'test',
          });
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
              title={t('fullName')}
              value={values.name}
              onChangeText={handleChange('name')}
              errors={touched.name && errors.name ? errors?.name : []}
              onBlur={() => setFieldTouched('name')}
            />

            <AppTextInput
              title={t('phone')}
              value={values.phone}
              onChangeText={handleChange('phone')}
              errors={touched.phone && errors.phone ? errors?.phone : []}
              onBlur={() => setFieldTouched('phone')}
              marginTop={SIZES.spacing16}
            />
            <AppTextInput
              title={t('title')}
              value={values.title}
              onChangeText={handleChange('title')}
              errors={touched.title && errors.title ? errors?.title : []}
              onBlur={() => setFieldTouched('title')}
              marginTop={SIZES.spacing16}
            />

            <AppTextInput
              title={t('password')}
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
              title={t('rePassword')}
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
              title={t('singUp')}
              onPress={handleSubmit}
            />
          </Block>
        )}
      </Formik>
    </AppBlockWithLoading>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
