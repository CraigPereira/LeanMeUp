import React from "react";
import { Route, Switch } from "react-router-dom";
import BmiInfo from "./BmiInfo";
import BmiInput from "./BmiInput";

const Bmi = () => {
  return (
    <Switch>
      <Route exact path="/bmi" component={BmiInfo} />
      <Route path="/bmi/input" component={BmiInput} />
    </Switch>
  );
};

export default Bmi;
