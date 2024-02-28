import { useSession } from "@lib/auth";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { AuthUser } from "../../types/auth";

interface AuthContextType {
  user: AuthUser;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );

  return context;
};

const defaultValue: AuthContextType = {
  user: {
    sub: null,
    createdAt: null,
    username: null,
    email: null,
    avatar: null,
  },
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // User state with the default value of all-nulls user data
  const { user: loggedInUser } = useSession();

  // Cache the user data using useMemo
  const authData = useMemo(
    () => ({ user: loggedInUser ?? defaultValue.user }),
    [loggedInUser]
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
