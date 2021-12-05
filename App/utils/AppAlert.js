import {Alert} from 'react-native';

const okAlert = ({title, subTitle, onOk}) =>
  Alert.alert(title, subTitle, [{text: 'Ok', onPress: onOk}], {
    cancelable: false,
  });

const errorAlert = ({
  onOk,
  okText = 'Tamam',
  errorText = 'Bir hata oluştu lütfen daha sonra tekrar deneyin',
}) =>
  Alert.alert(`Error`, errorText, [{text: okText, onPress: onOk}], {
    cancelable: true,
  });

export default {
  okAlert,
  errorAlert,
};
