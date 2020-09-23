import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { Link } from "react-router-dom";

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
      <ul>
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
      </ul>
      <div className="d-flex">
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
      </div>
      <Link to="/calsinput" className="button-styles">
        Back
      </Link>
      <img src={require("../images/ohp.png")} alt="guy doing an OHP" />
    </div>
  );
};

export default CalsResult;
