import * as SecureStore from "expo-secure-store";

// For type safety purpose
type Keys = "token" | "firstLaunch" | "userInfo";

export const getSecureItem = async (key: Keys) => {
  return await SecureStore.getItemAsync(key);
};

export const setSecureItem = async (key: Keys, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const deleteSecureItem = async (key: Keys) => {
  await SecureStore.deleteItemAsync(key);
};

export const clearSecureItems = async () => {
  if ((await getSecureItem("token")) && (await getSecureItem("userInfo"))) {
    await deleteSecureItem("token");
    await deleteSecureItem("userInfo");
  }
};
