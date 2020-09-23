import React from "react";
import { Link } from "react-router-dom";

const BmiInfo = () => {
  return (
    <div className="bmi-info-wrap">
      <h1>What is BMI?</h1>
      <p>
        The Body Mass Index (BMI) is a rule of thumb used to measure &
        categorize a person as under weight, normal weight, over weight or obese
        based on tissue mass (muscle, fat, and bone) and height
      </p>
      <Link to="/bmiinput" className="button-styles">
        Let's Go
      </Link>
    </div>
  );
};

export default BmiInfo;
