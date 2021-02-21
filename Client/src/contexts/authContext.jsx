import React, { createContext, useState, useEffect } from "react";
import axios from "../Axios/baseUrl";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = async () => {
    const authStatus = await axios.get("/api/checkAuth");
    setIsAuthenticated(authStatus.data);
  };

  const logOut = async () => {
    //Function to logout
    localStorage.removeItem("email");
    await axios.get("api/logout");
    await checkAuthentication();
  };

  useEffect(() => {
    //Check authentication on mount
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        checkAuthentication,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
