import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const storeUserId = async (value) => {
  try {
    await AsyncStorage.setItem("userId", value);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem("userId");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem("userId");
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
