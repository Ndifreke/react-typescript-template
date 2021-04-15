import { createContext } from "react";
import { AuthContextType } from "./type";

const AuthProvider = ({ children }: { children: any }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const AuthContext = createContext<AuthContextType>({});
