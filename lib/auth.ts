import { useEffect, useState } from "react";
import { AuthUser } from "../types/auth";
import { fetchApi, isSuccess } from "@utils/api";
import {
  clearSecureItems,
  getSecureItem,
  setSecureItem,
} from "@utils/secureStoreManager";
import { router } from "expo-router";

export type LoginResponse = {
  sub: string;
  createdAt: Date;
  username: string;
  email: string;
  avatar: string | null;
  access_token: string;
};

export const getAuthInfo = async () => {
  const getUserInfo = await getSecureItem("userInfo");

  let user: AuthUser = {
    sub: null,
    createdAt: null,
    username: null,
    email: null,
    avatar: null,
  };

  if (getUserInfo) {
    const userInfo = JSON.parse(getUserInfo) as AuthUser;
    user = userInfo;
  } else {
    setSecureItem("userInfo", JSON.stringify(user));
  }

  return user;
};

export const useSession = () => {
  const [user, setUser] = useState<AuthUser>({
    sub: null,
    createdAt: null,
    username: null,
    email: null,
    avatar: null,
  });
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  const loadUserInfo = async () => {
    const authInfo = await getAuthInfo();
    setUser(() => authInfo);

    const getLoggedIn = await getSecureItem("loggedIn");
    setLoggedIn(() => Boolean(getLoggedIn));
  };

  useEffect(() => {
    const init = async () => {
      await loadUserInfo();
    };

    init();
  }, []);

  const login = async (username: string, password: string) => {
    const response = await fetchApi<LoginResponse>("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!isSuccess(response))
      throw new Error(
        `Failed to login, server responded with ${response.statusCode} error: ${response.error}`
      );

    const { access_token, ...userInfo } = response.result;
    await setSecureItem("token", access_token);
    await setSecureItem("userInfo", JSON.stringify({ ...userInfo }));
    await setSecureItem("loggedIn", "true");

    // Reload the session
    await loadUserInfo();

    return response;
  };

  const logout = async () => {
    await clearSecureItems();

    // Reload the session
    await loadUserInfo();

    router.push("/login");
  };

  return { user, loggedIn, login, logout };
};
