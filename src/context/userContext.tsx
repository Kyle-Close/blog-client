import * as React from "react";
import { UserContextType, IUser, UserProviderProps } from "../@types/user";

export const UserContext = React.createContext<UserContextType | null>(null);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const login = (user: IUser, token: string) => {
    // Remove any token that may already exist
    localStorage.removeItem("token");
    // Store the token in localStorage
    localStorage.setItem("token", token);
    // setUser to update the global state
    setUser(user);
  };

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // setUser to update the global state
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
