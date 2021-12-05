import * as yup from 'yup';

export const UserSingUpSchema = yup.object().shape({
  name: yup.string().required('fillAllData'),
  address: yup.string().required('fillAllData'),
  phone: yup.string().required('fillAllData').max(15, 'phoneError'),
  password: yup.string().required('fillAllData').min(6, 'passwordError'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'rePasswordError')
    .required('fillAllData'),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email('emailError').required('fillAllData'),
  password: yup.string().required('fillAllData').min(6, 'passwordError'),
});
