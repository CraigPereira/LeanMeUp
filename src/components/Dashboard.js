import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const paraVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 130,
    },
  },
};
const circle1Variants = {
  visible: {
    y: 30,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

const circle2Variants = {
  visible: {
    y: -30,
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

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
        <Link to="/bmiinfo" className="round-button-styles">
          Calculate BMI
        </Link>
      </motion.div>
      <motion.div
        className="dash-cals"
        variants={circle2Variants}
        animate="visible"
      >
        <Link to="/calsinfo" className="round-button-styles dash-cals">
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
