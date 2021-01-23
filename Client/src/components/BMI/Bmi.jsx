import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../NotFound.jsx";
import BmiInfo from "./BmiInfo.jsx";
import BmiInput from "./BmiInput.jsx";

const Bmi = () => {
  return (
    <Switch>
      <Route exact path="/bmi" component={BmiInput} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Bmi;
