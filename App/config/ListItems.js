import routes from '../navigation/routes';

export default Object.freeze({
  accountData: [
    {
      text: 'Profil Bilgilerim',
      navigateTo: routes.PROFILE_INFO_SCREEN,
      icon: 'profileInfo',
    },
    {
      text: 'Takvimim',
      navigateTo: routes.CALENDAR_SCREEN,
      icon: 'calendar',
    },
    {
      text: 'Adres Defterim',
      navigateTo: routes.ADDRESS_BOOK_LIST_SCREEN,
      icon: 'addressBook',
    },
    {
      text: 'Favorilerim',
      navigateTo: routes.FAVORITE_SCREEN,
      icon: 'favorites',
    },
  ],
  profileInfoData: [
    {
      text: 'İletişim Bilgilerim',
      type: 'contactInfo',
    },
    {
      text: 'Şifre İşlemlerim',
      type: 'password',
      navigateTo: routes.PASSWORD_SCREEN,
    },
    {
      text: 'Kayıtlı Kartlar',
      type: 'registeredCards',
      navigateTo: routes.REGISTERED_CARDS_SCREEN,
    },
    {
      text: 'İletişim İzinleri',
      type: 'contactPermissions',
      navigateTo: routes.CONTACT_PERMISSIONS_SCREEN,
    },
  ],
  menuData: [
    {
      text: 'Hakkımızda',
      navigateTo: routes.MENU_ABOUT,
    },
    {
      text: 'SSS',
      navigateTo: routes.FREQUENTLY_ASKED_QUESTIONS_SCREEN,
    },
    {
      text: 'Nerelere Gönderim Yapıyoruz',
      navigateTo: routes.SHIPPING_LOCATION_SCREEN,
    },
    {
      text: 'İletişim',
      navigateTo: routes.CONTACT_US_SCREEN,
    },
    {
      text: 'Taze Çiçekte Satıcı Ol',
      navigateTo: routes.STORE_APPLICATION_SCREEN,
    },
    {
      text: 'Gizlilik Sözleşmesi',
      navigateTo: routes.MENU_HTML_SCREEN,
      apiUrl: 'gizlilik-sozlesmesi',
    },
    {
      text: 'Mesafeli Satış Sözleşmesi',
      navigateTo: routes.MENU_HTML_SCREEN,
      apiUrl: 'mesafeli-satis-sozlesmesi',
    },
    {
      text: 'Aydınlatma Metni ve Gizlilik Politikası',
      navigateTo: routes.MENU_HTML_SCREEN,
      apiUrl: 'aydinlatma-metni-ve-gizlilik-politikasi',
    },
    {
      text: 'KVKK',
      navigateTo: routes.MENU_HTML_SCREEN,
      apiUrl: 'kvkk-basvuru-formu',
    },
    {
      text: 'Çerez Politikası',
      navigateTo: routes.MENU_HTML_SCREEN,
      apiUrl: 'cerez-politikasi',
    },
    {
      text: 'Hesap Bilgileri',
      navigateTo: routes.ACCOUNT_INFO_SCREEN,
    },
  ],
  accountInfoData: [
    {
      text: 'Üyelik İptali',
      navigateTo: routes.MEMBERSHIP_CANCELLATION_SCREEN,
    },
  ],
  contactUsData: [
    {
      text: 'İletişim Formu Doldurun',
      navigateTo: routes.CONTACT_FORM_SCREEN,
    },
    {
      text: 'WhatsApp',
      subText: 'Hergün 09.00 - 22.00 saatleri arasında ulaşabilirsiniz.',
      number: '03323211234',
    },
    {
      text: 'Müşteri Hizmetlerini Ara',
      subText: 'Hergün 09.00 - 22.00 saatleri arasında ulaşabilirsiniz.',
      number: '03323211234',
    },
    {
      text: 'İletişim Bilgileri',
      navigateTo: routes.CONTACT_US_INFO_SCREEN,
    },
  ],
  contactPermissionsData: [
    {
      title: 'İletişim İzinleri',
      list: [
        {
          text: 'E-posta almak istiyorum',
          key: 'is_subscribe_email',
        },
        {
          text: 'SMS almak istiyorum',
          key: 'is_subscribe_sms',
        },
      ],
    },
    {
      title: 'Özel Gün Hatırlatıcı',
      list: [
        {
          text: "Anneler Günü'nde SMS ve e-posta almak istiyorum.",
          key: 'is_subscribe_mothers_day',
        },
        {
          text: "Dünya Kadınlar Günü'nde SMS ve e-posta almak istiyorum.",
          key: 'is_subscribe_women_day',
        },
        {
          text: 'Sevgililer Günü’nde SMS ve e-posta almak istiyorum.',
          key: 'is_subscribe_valentines_day',
        },
        {
          text: 'Diğer tüm özel günlerde SMS ve e-posta almak istiyorum.',
          key: 'is_subscribe_other_special_days',
        },
      ],
    },
  ],
  reminderTimeNumberList: [
    {
      text: '1',
      value: 1,
    },
    {
      text: '2',
      value: 2,
    },
    {
      text: '3',
      value: 3,
    },
  ],
});
