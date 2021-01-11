import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { paraVariants, imgVariants } from "../Variants/BmiInfoVariants";

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
