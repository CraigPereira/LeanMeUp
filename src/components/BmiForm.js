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
  const changeWeightUnit = (e) => {
    e.preventDefault();
    if (weightUnits === "kgs" && weightUnitName === "pounds") {
      setWeightUnits("lbs");
      setWeightUnitName("kilograms");
    } else {
      setWeightUnits("kgs");
      setWeightUnitName("pounds");
    }
  };
  const changeHeightUnit = (e) => {
    e.preventDefault();
    if (heightUnits[0] === "ft") {
      setHeightUnits("cm");
      setHeightUnitName("feet");
    } else {
      setHeightUnits(["ft", "in"]);
      setHeightUnitName("centimeters");
    }
  };
  const ConvertAndCalculate = () => {
    let formulaWeight = 0;
    let formulaHeight = 0;
    let bmi = null;
    if (userWeight && weightUnits === "kgs") {
      formulaWeight = userWeight;
    } else {
      formulaWeight = (userWeight * 0.45359237).toFixed(2);
    }
    if (userHeightCm && heightUnits === "cm") {
      formulaHeight = userHeightCm / 100;
    } else {
      let heightCm = userHeightFt * 30.48 + userHeightIn * 2.54;
      formulaHeight = (heightCm / 100).toFixed(2);
    }
    bmi = (formulaWeight / Math.pow(formulaHeight, 2)).toFixed(1);
    setUserBmi(bmi);
    console.log(`BMI:${bmi}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userWeight, userHeightFt, userHeightIn, userHeightCm);
    ConvertAndCalculate();
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
      <Link to={`${userBmi}`} className="button-styles" onClick={handleSubmit}>
        Calculate
      </Link>
      {userBmi && (
        <div className="bmi-display-right">
          <h2>Your BMI</h2>
          <div className="bmi-circle">
            <div className="div">{userBmi}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BmiForm;
