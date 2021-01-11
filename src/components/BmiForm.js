import React, { useState, useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { displayVariants, formVariants } from "../Variants/BmiFormVariants";

const BmiForm = () => {
  const {
    weightUnits,
    weightUnitName,
    heightUnits,
    heightUnitName,
    userWeight,
    setUserWeight,
    userHeightCm,
    setUserHeightCm,
    userHeightFt,
    setUserHeightFt,
    userHeightIn,
    setUserHeightIn,
    changeWeightUnit,
    changeHeightUnit,
  } = useContext(UserDataContext);
  const [resultCircle, setResultCircle] = useState(null);
  const [bmiText, setBmiText] = useState(null);
  const [outputNo, setOutputNo] = useState(null);

  const convertAndCalculate = () => {
    let formulaWeight = weightUnits === "kgs" ? userWeight : userWeight * 0.45;
    let formulaHeight =
      heightUnits === "cm"
        ? userHeightCm / 100
        : Math.round(userHeightFt * 30.48 + userHeightIn * 2.54) / 100;
    return parseFloat((formulaWeight / Math.pow(formulaHeight, 2)).toFixed(1));
  };
  const animateBmi = (bmi) => {
    let output = 0;
    const timer = setInterval(() => {
      return parseFloat(output.toFixed(1)) === bmi
        ? clearInterval(timer)
        : ((output = output + 0.1), setOutputNo(output.toFixed(1)));
    }, 1);
  };
  const displayBmiRange = (bmi) => {
    if (bmi < 18.5) {
      setBmiText(`Looks like you're underweight (< 18.5)`);
      setResultCircle("bmi-yellow");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setBmiText(`Way to go! you're within the normal range (18.5-24.9)`);
      setResultCircle("bmi-green");
    } else if (bmi >= 25 && bmi <= 29.9) {
      setBmiText(`Looks like you're overweight (25-29.9)`);
      setResultCircle("bmi-yellow");
    } else if (bmi >= 30 && bmi <= 34.9) {
      setBmiText(`Looks like you're obese (30-34.9)`);
      setResultCircle("bmi-orange");
    } else {
      setBmiText(`Looks like you're extremely obese (35 <)`);
      setResultCircle("bmi-red");
    }
  };
  const scrollDown = () => {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = convertAndCalculate();
    animateBmi(bmi);
    displayBmiRange(bmi);
    scrollDown();
  };
  return (
    <div className="outter-wrapper">
      <div className="bmi-form-wrap">
        <motion.form
          onSubmit={handleSubmit}
          variants={formVariants}
          animate="visible"
          initial="hidden"
        >
          <h3>Weight</h3>
          <div className="d-flex">
            <input
              type="number"
              id="weight"
              name="weight"
              value={userWeight}
              min="0"
              step=".01"
              onChange={(e) => {
                setUserWeight(e.target.value);
              }}
            />
            <label htmlFor="weight">{weightUnits}</label>
          </div>
          <button onClick={changeWeightUnit}>{weightUnitName}</button>
          <h3>Height</h3>
          <div className="d-flex">
            {heightUnits[0] === "ft" && (
              <input
                type="number"
                id="height"
                name="height"
                min="0"
                step=".01"
                onChange={(e) => {
                  setUserHeightFt(e.target.value);
                }}
              />
            )}
            <label htmlFor="">
              {heightUnits[0] === "ft" && heightUnits[0]}
            </label>
            {heightUnits[0] === "ft" && (
              <input
                type="number"
                id="height"
                name="height"
                min="0"
                step=".01"
                onChange={(e) => {
                  setUserHeightIn(e.target.value);
                }}
              />
            )}
            <label htmlFor="">
              {heightUnits[0] === "ft" && heightUnits[1]}
            </label>
            {heightUnits === "cm" && (
              <input
                type="number"
                id="height"
                name="height"
                min="0"
                step=".01"
                onChange={(e) => {
                  setUserHeightCm(e.target.value);
                }}
              />
            )}
            <label htmlFor="">{heightUnits === "cm" && heightUnits}</label>
          </div>
          <button onClick={changeHeightUnit}>{heightUnitName}</button>
        </motion.form>
        {((userWeight && userHeightCm) ||
          (userWeight && userHeightFt && userHeightIn)) && (
          <Link to="" className="button-styles" onClick={handleSubmit}>
            Calculate
          </Link>
        )}
        {outputNo && (
          <motion.div
            className="bmi-display-right"
            variants={displayVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Your BMI</h2>
            <div className={resultCircle}>
              <div className="div">{outputNo}</div>
            </div>
            <p>{bmiText}</p>
          </motion.div>
        )}
        {outputNo && (
          <Link to="/dashboard" className="button-styles back-btn">
            Back
          </Link>
        )}
      </div>
    </div>
  );
};

export default BmiForm;
