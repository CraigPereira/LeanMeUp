import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import BmiInfo from "./components/BmiInfo";
import BmiInput from "./components/BmiInput";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/bmiinfo" component={BmiInfo} />
          <Route path="/bmiinput" component={BmiInput} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
