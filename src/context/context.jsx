import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from "../utils/firebase-Utils/firebaseUtils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unMount = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unMount;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
