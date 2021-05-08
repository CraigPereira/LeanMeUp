import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../../Pages/NotFound.jsx";
import CalsInput from "./CalsInput.jsx";
import CalsResult from "./CalsResult.jsx";

const Calories = () => {
  return (
    <Switch>
      <Route exact path="/calories" component={CalsInput} />
      <Route exact path="/calories/result" component={CalsResult} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Calories;
