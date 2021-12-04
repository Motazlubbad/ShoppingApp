import * as yup from 'yup';
import strings from '../config/strings';

export const UserSingUpSchema = yup.object().shape({
  name: yup.string().required(strings.FILL_ALL_DATA),
  address: yup.string().required(strings.FILL_ALL_DATA),
  phone: yup
    .string()
    .required(strings.FILL_ALL_DATA)
    .max(15, 'Telefonunuz en fazla 15 karakter olmalıdır'),
  password: yup
    .string()
    .required(strings.FILL_ALL_DATA)
    .min(6, 'Şifreniz en az 6 karakter olmalıdır'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Şifre tekrarı eşleşmiyor.')
    .required(strings.FILL_ALL_DATA),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email('hatalı email').required(strings.FILL_ALL_DATA),
  password: yup
    .string()
    .required(strings.FILL_ALL_DATA)
    .min(6, 'Şifreniz en az 6 karakter olmalıdı'),
});
