import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('error store data', e);
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    console.log('error getAsyncData', e);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log('error removeAsynclocal', e);
  }
};

export const getLocalStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const itemsArray = await AsyncStorage.multiGet(keys);
    let object = {};
    itemsArray.map((item) => {
      object[`${item[0]}`] = item[1];
    });
    return object;
  } catch (error) {
    console.log(error, 'error');
  }
};
