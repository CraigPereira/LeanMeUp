import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Bmi from "./components/BMI/Bmi";
import Calories from "./components/Calories/Calories";
import UserDataContextProvider from "./contexts/UserDataContext.jsx";
import NotFound from "./components/NotFound.jsx";
import Signup from "./components/Signup.jsx";

const App = () => {
  return (
    <div className="App">
      <UserDataContextProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/bmi" component={Bmi} />
          <Route path="/calories" component={Calories} />
          <Route component={NotFound} />
        </Switch>
      </UserDataContextProvider>
    </div>
  );
};

export default App;
