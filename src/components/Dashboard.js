import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-wrap">
      <h1>What would you like to do?</h1>
      <Link to="/bmiinfo" className="round-button-styles dash-bmi">
        Calculate BMI
      </Link>
      <Link className="round-button-styles dash-cals">Calculate Calories</Link>
      <Link to="/" className="button-styles dash-back">
        Back
      </Link>
    </div>
  );
};

export default Dashboard;
