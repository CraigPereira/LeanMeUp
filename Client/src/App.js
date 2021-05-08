import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Bmi from "./Pages/BMI/Bmi.jsx";
import Calories from "./Pages/Calories/Calories.jsx";
import { AuthContext } from "./contexts/authContext.jsx";
import UserDataContextProvider from "./contexts/UserDataContext.jsx";
import ProtectedRoute from "./components/HOC/ProtectedRoute.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import Login from "./Pages/Auth/Login.jsx";
import UserDashboard from "./Pages/UserPages/UserDashboard.jsx";
import StatsContainer from "./Pages/UserPages/UserStats/StatsContainer";
import FeatureSelect from "./Pages/FeatureSelect.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="App">
      <UserDataContextProvider>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
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
          <Route path="/features" component={FeatureSelect} />
          <Route component={NotFound} />
        </Switch>
      </UserDataContextProvider>
    </div>
  );
};

export default App;
