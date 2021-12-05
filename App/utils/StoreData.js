import AsyncStorage from '@react-native-async-storage/async-storage';

const LANG_KEY = 'langKey';
const USER_KEY = 'userKey';
const ADDRESS_KEY = 'addressKey';
const CART_KEY = 'cartKey';

const storeData = async (key, value) => {
  console.log(key, value);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};
export default {
  storeData,
  deleteData,
  LANG_KEY,
  USER_KEY,
  CART_KEY,
  ADDRESS_KEY,
};
