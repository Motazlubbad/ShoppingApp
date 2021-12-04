import moment from 'moment';
import 'moment/min/locales';
import localization from 'moment/locale/tr';
import {LocaleConfig} from 'react-native-calendars';

const initDefaultLocale = () => {
  moment.locale('tr');
  moment.updateLocale('tr', localization);
  LocaleConfig.locales['tr'] = {
    monthNames: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ],
    monthNamesShort: [
      'Oc.',
      'Şub.',
      'Ma.',
      'Nis.',
      'May.',
      'Haz.',
      'Tem.',
      'Ağs.',
      'Eyl.',
      'Ek.',
      'Kas.',
      'Ara.',
    ],
    dayNames: [
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
      'Pazar',
    ],
    dayNamesShort: ['P ', 'S', 'Ç', 'P', 'C', 'C', 'P'],
    today: 'Bugün',
  };
  LocaleConfig.defaultLocale = 'tr';
};

export default initDefaultLocale;
