import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import BmiInfo from "./components/BmiInfo";
import BmiInput from "./components/BmiInput";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/bmiinfo">
            <BmiInfo />
          </Route>
          <Route path="/bmiinput">
            <BmiInput />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
