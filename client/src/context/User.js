import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const User = ({ children }) => {
  const getInitialUser = () => localStorage.getItem("user");
  const [user, setUser] = useState();

  useEffect(() => {
    const initialUser = getInitialUser();
    if (initialUser) {
      setUser(initialUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  const changeUser = (usr) => {
    setUser(usr)
  };


  const exposed = {
    user,
    changeUser,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export default User;