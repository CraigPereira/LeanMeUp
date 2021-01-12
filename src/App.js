import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Bmi from "./components/BMI/Bmi";
import Calories from "./components/Calories/Calories";
import UserDataContextProvider from "./contexts/UserDataContext";

const App = () => {
  return (
    <div className="App">
      <UserDataContextProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/bmi" component={Bmi} />
          <Route path="/calories" component={Calories} />
        </Switch>
      </UserDataContextProvider>
    </div>
  );
};

export default App;
