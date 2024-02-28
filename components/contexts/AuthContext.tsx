import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { AuthUser } from "../../types/auth";
import { useSession } from "@lib/auth";

interface AuthContextType {
  user: AuthUser;
  updateUser: (user: AuthUser) => void;
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
  updateUser: (user) => {},
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  // User state with the default value of all-nulls user data
  const [user, setUser] = useState<AuthUser>(defaultValue.user);
  const { user: loggedInUser } = useSession();

  const updateUser = (user: AuthUser) => {
    setUser(user);
  };

  // Cache the user data using useMemo
  const authData = useMemo(
    () => ({ user: loggedInUser, updateUser }),
    [loggedInUser]
  );

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
