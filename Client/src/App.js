import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Bmi from "./components/BMI/Bmi";
import Calories from "./components/Calories/Calories";
import { AuthContext } from "./contexts/authContext.jsx";

import UserDataContextProvider from "./contexts/UserDataContext.jsx";
import ProtectedRoute from "./components/HOC/ProtectedRoute.jsx";
import NotFound from "./components/NotFound.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import StatsContainer from "./components/UserStats/StatsContainer.jsx";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App">
      <UserDataContextProvider>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute
            exact
            path="/dash"
            isAuthenticated={isAuthenticated}
            component={UserDashboard}
          />
          <ProtectedRoute
            exact
            path="/stats"
            isAuthenticated={isAuthenticated}
            component={StatsContainer}
          />
          <Route path="/bmi" component={Bmi} />
          <Route path="/calories" component={Calories} />
          <Route component={NotFound} />
        </Switch>
      </UserDataContextProvider>
    </div>
  );
};

export default App;
