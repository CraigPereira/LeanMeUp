import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const listVariants = {
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

const paraVariants = {
  hidden: {
    y: 100,
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
    rotate: [2, -2],
    transition: {
      duration: 1.5,
      yoyo: Infinity,
    },
  },
};

const CalsResult = () => {
  const {
    userBmr,
    userTdee,
    userProteinGoal,
    userProteinCals,
    userRemainingCals,
    userFatReq,
    userCarbReq,
    userGoalCals,
    handleSubmit,
  } = useContext(UserDataContext);
  useEffect(() => handleSubmit());
  return (
    <div className="cals-result-wrap">
      {" "}
      <span></span>
      <motion.ul variants={listVariants} animate="visible" initial="hidden">
        <li>
          Basal Metabolic Rate (BMR): <span>{userBmr}</span>
        </li>
        <li>
          Total Daily Energy expenditure (TDEE): <span>{userTdee} kcal</span>
        </li>
        <li>
          Daily Calorie Goal: <span>{userGoalCals} kcal</span>
        </li>
        <li>
          Protein target: <span>{userProteinGoal} g</span>
        </li>
        <li>
          Fats target: <span>{userFatReq} g</span>
        </li>
        <li>
          Carbs target: <span>{userCarbReq} g</span>
        </li>
        <li>
          Calories from protein: <span>{userProteinCals} kcal</span>
        </li>
        <li>
          Calories from Carbs & Fat: <span>{userRemainingCals} kcal</span>
        </li>
      </motion.ul>
      <motion.div
        className="d-flex"
        variants={paraVariants}
        initial="hidden"
        animate="visible"
      >
        <p>
          Your Basal Metabolic Rate (BMR) is the amount of calories you would
          burn if you were asleep all day
        </p>
        <p>
          Your TDEE is how many calories you burn in a day as a reference point.{" "}
        </p>
        <p>
          Try to hit your daily Calorie goal & macro targets (protein, fats &
          carbs) as consistently as possible for the best results
        </p>
      </motion.div>
      <Link to="/dashboard" className="button-styles">
        Back
      </Link>
      <motion.img
        src={require("../images/healthy-food.png")}
        alt="guy doing an OHP"
        variants={imgVariants}
        animate="visible"
      />
    </div>
  );
};

export default CalsResult;
