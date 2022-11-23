import React from "react";
import { createContext, useState, useContext } from "react";

const userContextDefaultValue = {
  user: { name: "", photoUrl: "" },
  setUser: () => {},
};

const UserContext = createContext(userContextDefaultValue);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deberia ser usado dentro de un UserProvider");
  }
  return context;
};
