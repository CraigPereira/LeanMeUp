import React, { createContext, useState, useEffect } from "react";
import axios from "../Axios/baseUrl";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthentication = async () => {
    const authStatus = await axios.get("/api/checkAuth");
    console.log(authStatus.data);
    setIsAuthenticated(authStatus.data);
  };

  useEffect(() => {
    //Check authentication on mount
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
