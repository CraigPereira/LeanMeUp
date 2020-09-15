import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transiton: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transiton: { ease: "easeInOut" },
  },
};

const Dashboard = () => {
  return (
    <motion.div
      className="dashboard-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>What would you like to do?</h1>
      <Link to="/bmiinfo" className="round-button-styles dash-bmi">
        Calculate BMI
      </Link>
      <Link className="round-button-styles dash-cals"> Calculate Calories</Link>
      <Link to="/" className="button-styles dash-back">
        Back
      </Link>
    </motion.div>
  );
};

export default Dashboard;
