import React, { createContext, useState, useEffect } from "react";
import axios from "../Axios/baseUrl";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const checkAuthentication = async () => {
    const authStatus = await axios.get("/api/checkAuth");
    const { status, email } = authStatus.data;
    setIsAuthenticated(status);
    setUserEmail(email);
  };

  const logOut = async () => {
    //Function to logout
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
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
