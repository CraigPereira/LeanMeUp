import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../../contexts/UserDataContext.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  listVariants,
  paraVariants,
  imgVariants,
} from "../../Variants/CalsResultVariants";

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

  useEffect(() => handleSubmit(), []);

  const userTargets = [
    { name: "Basal Metabolic Rate (BMR):", value: userBmr },
    {
      name: "Total Daily Energy expenditure (TDEE):",
      value: userTdee,
      unit: "kcal",
    },
    { name: "Daily Calorie Goal:", value: userGoalCals, unit: "kcal" },
    { name: "Protein target:", value: userProteinGoal, unit: "g" },
    { name: "Fats target:", value: userFatReq, unit: "g" },
    { name: "Carbs target:", value: userCarbReq, unit: "g" },
    { name: "Calories from protein:", value: userProteinCals, unit: "kcal" },
    {
      name: "Calories from Carbs & Fat:",
      value: userRemainingCals,
      unit: "kcal",
    },
  ];

  const infoParas = [
    "Your Basal Metabolic Rate (BMR) is the amount of calories you would burn if you were asleep all day",
    "Your TDEE is how many calories you burn in a day as a reference point. ",
    "Try to hit your daily Calorie goal & macro targets (protein, fats & carbs) as consistently as possible for the best results",
  ];

  const userCalorieAndMacroData = userTargets.map((target) => (
    <li key={target.name}>
      {target.name}{" "}
      <span>
        {target.value} {target.unit}
      </span>
    </li>
  ));

  const relatedInfo = infoParas.map((para, index) => <p key={index}>{para}</p>);

  return (
    <div className="cals-result-wrap">
      {" "}
      <span></span>
      <motion.ul variants={listVariants} animate="visible" initial="hidden">
        {userCalorieAndMacroData}
      </motion.ul>
      <motion.div
        className="d-flex"
        variants={paraVariants}
        initial="hidden"
        animate="visible"
      >
        {relatedInfo}
      </motion.div>
      <Link to="/dashboard" className="button-styles">
        Back
      </Link>
      <motion.img
        src={require("../../images/healthy-food.png")}
        alt="guy doing an OHP"
        variants={imgVariants}
        animate="visible"
      />
    </div>
  );
};

export default CalsResult;
