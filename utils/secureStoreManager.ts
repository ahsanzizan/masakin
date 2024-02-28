import * as SecureStore from "expo-secure-store";

// For type safety purpose
type Keys = "token" | "firstLaunch" | "userInfo" | "loggedIn";

export const getSecureItem = (key: Keys) => {
  return SecureStore.getItem(key);
};

export const getSecureItemSync = async (key: Keys) => {
  return await SecureStore.getItemAsync(key);
};

export const setSecureItemSync = async (key: Keys, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const deleteSecureItemSync = async (key: Keys) => {
  await SecureStore.deleteItemAsync(key);
};

export const clearSecureItemsSync = async () => {
  await deleteSecureItemSync("token");
  await deleteSecureItemSync("userInfo");
  await deleteSecureItemSync("loggedIn");
};
