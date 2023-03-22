import React, { createContext } from "react";

const user = {
  username: "user",
  age: 22,
};

type providerProps = {
  children: React.ReactNode;
};

export const UserContext = createContext(user);

export const UserContextProvider = ({ children }: providerProps) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
