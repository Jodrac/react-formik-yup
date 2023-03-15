import { createContext, useState, useContext, useEffect } from "react";

//config de firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }, [user]);

  if (user === false) return <p>Loading app...</p>;

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
