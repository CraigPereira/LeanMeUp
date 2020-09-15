import React, { useState } from "react";
import { Link } from "react-router-dom";

const BmiForm = () => {
  const [weightUnits, setWeightUnits] = useState("kgs");
  const [weightUnitName, setWeightUnitName] = useState("pounds");
  const [heightUnits, setHeightUnits] = useState(["ft", "in"]);
  const [heightUnitName, setHeightUnitName] = useState("centimeters");
  const [userWeight, setUserWeight] = useState(false);
  const [userHeightCm, setUserHeightCm] = useState(false);
  const [userHeightFt, setUserHeightFt] = useState(false);
  const [userHeightIn, setUserHeightIn] = useState(false);
  const [userBmi, setUserBmi] = useState(null);
  const [resultCircle, setResultCircle] = useState(null);
  const [bmiText, setBmiText] = useState(null);
  const changeWeightUnit = (e) => {
    e.preventDefault();
    return weightUnits === "kgs"
      ? (setWeightUnits("lbs"),
        setWeightUnitName("kilograms"),
        setUserWeight(false))
      : (setWeightUnits("kgs"),
        setWeightUnitName("pounds"),
        setUserWeight(false));
  };
  const changeHeightUnit = (e) => {
    e.preventDefault();
    return heightUnits[0] === "ft"
      ? (setHeightUnits("cm"),
        setHeightUnitName("feet"),
        setUserHeightFt(false),
        setUserHeightIn(false))
      : (setHeightUnits(["ft", "in"]),
        setHeightUnitName("centimeters"),
        setUserHeightCm(false));
  };
  const convertAndCalculate = () => {
    let formulaWeight = weightUnits === "kgs" ? userWeight : userWeight * 0.45;
    let formulaHeight =
      heightUnits === "cm"
        ? userHeightCm / 100
        : Math.round(userHeightFt * 30.48 + userHeightIn * 2.54) / 100;
    return parseFloat((formulaWeight / Math.pow(formulaHeight, 2)).toFixed(1));
  };
  const displayBmiRange = (bmi) => {
    console.log("displayBMIrange invoked");
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
    setUserBmi(bmi);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const bmi = convertAndCalculate();
    displayBmiRange(bmi);
  };
  return (
    <div className="bmi-form-wrap">
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="">{heightUnits[0] === "ft" && heightUnits[0]}</label>
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
          <label htmlFor="">{heightUnits[0] === "ft" && heightUnits[1]}</label>
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
      </form>
      {((userWeight && userHeightCm) ||
        (userWeight && userHeightFt && userHeightIn)) && (
        <Link className="button-styles" onClick={handleSubmit}>
          Calculate
        </Link>
      )}
      {userBmi && (
        <div className="bmi-display-right">
          <h2>Your BMI</h2>
          <div className={resultCircle}>
            <div className="div">{userBmi}</div>
          </div>
          <p>{bmiText}</p>
        </div>
      )}
    </div>
  );
};

export default BmiForm;
