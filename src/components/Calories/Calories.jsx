import React from "react";
import { Route, Switch } from "react-router-dom";
import CalsInfo from "./CalsInfo";
import CalsInput from "./CalsInput";
import CalsResult from "./CalsResult";

const Calories = () => {
  return (
    <Switch>
      <Route exact path="/calories" component={CalsInfo} />
      <Route exact path="/calories/input" component={CalsInput} />
      <Route path="/calories/input/result" component={CalsResult} />
    </Switch>
  );
};

export default Calories;
