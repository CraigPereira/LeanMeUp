import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const paraVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 130,
    },
  },
};

const imgVariants = {
  visible: {
    x: [20, -20],
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

const BmiInfo = () => {
  return (
    <div className="bmi-info-wrap">
      <h1>What is BMI?</h1>
      <motion.p variants={paraVariants} animate="visible" initial="hidden">
        The Body Mass Index (BMI) is a rule of thumb used to measure &
        categorize a person as under weight, normal weight, over weight or obese
        based on tissue mass (muscle, fat, bone) and height
      </motion.p>
      <motion.img
        variants={imgVariants}
        animate="visible"
        src={require("../images/crunch-1.png")}
        alt="Man doing crunches"
      />
      <Link to="/bmiinput" className="button-styles">
        Let's Go
      </Link>
    </div>
  );
};

export default BmiInfo;
