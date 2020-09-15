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

const BmiInfo = () => {
  return (
    <motion.div
      className="bmi-info-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>What is BMI?</h1>
      <p>
        The Body Mass Index (BMI) is a rule of thumb used to measure &
        categorize a person as under weight, normal weight, over weight or obese
        based on tissue mass (muscle, fat, and bone) and height
      </p>
      <Link to="/bmiinput" className="button-styles">
        Let's Go
      </Link>
    </motion.div>
  );
};

export default BmiInfo;
