import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import BmiInfo from "./components/BmiInfo";
import BmiInput from "./components/BmiInput";
import CalsInfo from "./components/CalsInfo";
import CalsInput from "./components/CalsInput";
import UserDataContextProvider from "./contexts/UserDataContext";
import CalsResult from "./components/CalsResult";

const App = () => {
  return (
    <div className="App">
      <UserDataContextProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/bmiinfo" component={BmiInfo} />
          <Route exact path="/bmiinput" component={BmiInput} />
          <Route exact path="/calsinfo" component={CalsInfo} />
          <Route exact path="/calsinput" component={CalsInput} />
          <Route exact path="/calsresult" component={CalsResult} />
        </Switch>
      </UserDataContextProvider>
    </div>
  );
};

export default App;
