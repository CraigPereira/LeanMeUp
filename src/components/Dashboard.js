import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  paraVariants,
  circle1Variants,
  circle2Variants,
} from "../Variants/DashboardVariants";

const Dashboard = () => {
  return (
    <div className="dashboard-wrap">
      <motion.h1 variants={paraVariants} initial="hidden" animate="visible">
        What would you like to do?
      </motion.h1>
      <motion.div
        variants={circle1Variants}
        animate="visible"
        className="dash-bmi"
      >
        <Link to="/bmi" className="round-button-styles">
          Calculate BMI
        </Link>
      </motion.div>
      <motion.div
        className="dash-cals"
        variants={circle2Variants}
        animate="visible"
      >
        <Link to="/calories" className="round-button-styles dash-cals">
          {" "}
          Calculate Calories
        </Link>
      </motion.div>
      <Link to="/" className="button-styles dash-back">
        Back
      </Link>
    </div>
  );
};

export default Dashboard;
