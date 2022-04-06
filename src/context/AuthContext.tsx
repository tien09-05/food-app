import React, { createContext, ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
}
interface IUser {
  name: string | null;
}

interface AuthContextDefault {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: IUser;
  setUserInfo: React.Dispatch<React.SetStateAction<IUser>>;
}
export const AuthContext = createContext<AuthContextDefault>({
  isLogin: false,
  setIsLogin: () => null,
  userInfo: {
    name: "",
  },
  setUserInfo: () => null,
});

const AuthContextProvider: React.FC<IProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser>({
    name: "",
  });

  const value = {
    isLogin,
    setIsLogin,
    userInfo,
    setUserInfo,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
