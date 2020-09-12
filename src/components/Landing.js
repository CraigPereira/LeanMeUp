import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-wrap">
      <h1>Lean me up</h1>
      <p>Lean me up simplifies complex nutritional math for you</p>
      <Link to="/dashboard" className="button-styles">
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
