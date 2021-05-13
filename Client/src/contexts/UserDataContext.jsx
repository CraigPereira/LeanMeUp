import axios from "../Axios/baseUrl";
import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./authContext.jsx";
import { useHistory } from "react-router-dom";

export const UserDataContext = createContext();

//Global State management is done here

const UserDataContextProvider = ({ children }) => {
  //Common State across Bmi and Calorie calculators
  const [weightUnits, setWeightUnits] = useState("kgs");
  const [weightUnitName, setWeightUnitName] = useState("pounds");
  const [heightUnits, setHeightUnits] = useState(["ft", "in"]);
  const [heightUnitName, setHeightUnitName] = useState("centimeters");
  const [userWeight, setUserWeight] = useState(false);
  const [userHeightCm, setUserHeightCm] = useState(false);
  const [userHeightFt, setUserHeightFt] = useState(false);
  const [userHeightIn, setUserHeightIn] = useState(false);
  //Macros and Calories States below
  const [userAge, setUserAge] = useState(false);
  const [userGender, setUserGender] = useState("M");
  const [userPAL, setUserPAL] = useState("1.4");
  const [userGoal, setUserGoal] = useState("MG");
  const [userBmr, setUserBmr] = useState(0);
  const [userTdee, setUserTdee] = useState(0);
  const [userProteinGoal, setUserProteinGoal] = useState(0);
  const [userProteinCals, setUserProteinCals] = useState(0);
  const [userRemainingCals, setUserRemainingCals] = useState(0);
  const [userFatReq, setUserFatReq] = useState(0);
  const [userCarbReq, setUserCarbReq] = useState(0);
  const [userGoalCals, setUserGoalCals] = useState(0);
  //BMI States below
  const [resultCircle, setResultCircle] = useState(null);
  const [bmiText, setBmiText] = useState(null);
  const [outputNo, setOutputNo] = useState(null);

  const { isAuthenticated } = useContext(AuthContext);
  const history = useHistory();

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

  const convertHeight = (value, convertTo) => {
    //Function to handle height conversion from Ft/in to cm and vice versa
    let height = {};

    if (convertTo === "cm") {
      //Converting Ft In to Cm
      const { feet, inch } = value;
      height = parseFloat((feet * 30.48 + inch * 2.54).toFixed(2));
    }

    if (convertTo === "feet") {
      let length, feet, inch;
      length = parseInt(value / 2.54);
      feet = parseInt(Math.floor(length / 12));
      inch = parseInt(length - 12 * feet);
      height.feet = feet;
      height.inch = inch;
    }

    return height;
  };

  const saveBasicStats = async (bmi) => {
    if (!isAuthenticated) return;

    let userHeight = userHeightCm;
    let heightUnit = "cm";

    if (userHeightFt && userHeightIn) {
      userHeight = convertHeight(
        { feet: userHeightFt, inch: userHeightIn },
        "cm"
      );
      heightUnit = "feet";
    }

    const stats = {
      //use same model, just send relevant data
      user: "",
      weight: userWeight,
      weightUnit: weightUnits,
      height: userHeight,
      heightUnit: heightUnit,
      bmi,
      bmr: "",
      proteinTarget: "",
      calsFromProtein: "",
      tdee: "",
      fatsTarget: "",
      calsFromFatsAndCarbs: "",
      dailyCalsGoal: "",
      carbsTarget: "",
      currentGoal: "",
    };

    try {
      const res = await axios.post("/api/user/save-stats", { stats });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBmiSubmit = (e) => {
    e.preventDefault();
    const bmi = convertAndCalculate();
    animateBmi(bmi);
    displayBmiRange(bmi);
    scrollDown();
    saveBasicStats(bmi);
  };

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

  const handleGenderRadioChange = (e) => setUserGender(e.target.value);
  const handlePALRadioChange = (e) => setUserPAL(e.target.value);
  const handleGoalRadioChange = (e) => setUserGoal(e.target.value);

  const convertUnits = () => {
    let formulaWeight = weightUnits === "kgs" ? userWeight : userWeight * 0.45;
    let formulaHeight =
      heightUnits === "cm"
        ? userHeightCm
        : Math.round(userHeightFt * 30.48 + userHeightIn * 2.54);
    return { formulaWeight, formulaHeight };
  };

  const calculateBmr = () => {
    const { formulaWeight, formulaHeight } = convertUnits();
    return userGender === "M"
      ? (
          66.5 +
          13.75 * formulaWeight +
          5.003 * formulaHeight -
          6.755 * userAge
        ).toFixed(2)
      : (
          655.1 +
          9.563 * formulaWeight +
          1.85 * formulaHeight -
          4.676 * userAge
        ).toFixed(2);
  };

  const calculateTdee = (bmr) => parseInt((bmr * userPAL).toFixed(2));

  const Protein = () => {
    const { formulaWeight } = convertUnits();
    const proteinGoal = parseInt(Math.round(formulaWeight * 2.2 * 0.75));
    const proteinCals = parseInt(proteinGoal * 4);
    return { proteinGoal, proteinCals };
  };

  const calsAndGramsFromRemaining = (tdee, proteinCals) => {
    const remainingCals = parseInt(((tdee - proteinCals) / 2).toFixed(2));
    const carbReq = parseInt((remainingCals / 4).toFixed(2));
    const fatReq = parseInt((remainingCals / 9).toFixed(2));
    return { remainingCals, carbReq, fatReq };
  };

  const goalCals = (tdee) => {
    const tdeeFloat = parseFloat(tdee);
    return userGoal === "MG"
      ? Math.round(tdeeFloat + 300)
      : Math.round(tdeeFloat - 300);
  };

  const saveUserStats = async () => {
    if (!isAuthenticated) return;

    let userHeight = userHeightCm;
    let heightUnit = "cm";

    if (userHeightFt && userHeightIn) {
      userHeight = convertHeight(
        { feet: userHeightFt, inch: userHeightIn },
        "cm"
      );
      heightUnit = "feet";
    }

    const stats = {
      //use same model, just send relevant data
      user: "",
      weight: userWeight,
      weightUnit: weightUnits,
      height: userHeight,
      heightUnit: heightUnit,
      bmi: "",
      bmr: userBmr,
      proteinTarget: userProteinGoal,
      calsFromProtein: userProteinCals,
      tdee: userTdee,
      fatsTarget: userFatReq,
      calsFromFatsAndCarbs: userRemainingCals,
      dailyCalsGoal: userGoalCals,
      carbsTarget: userCarbReq,
      currentGoal: userGoal,
    };

    try {
      const res = await axios.post("/api/user/save-stats-adv", { stats });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    //The issue is here, while setting state.
    const bmr = parseInt(calculateBmr());
    setUserBmr(bmr);
    const tdee = calculateTdee(bmr);
    setUserTdee(tdee);
    const { proteinGoal, proteinCals } = Protein();
    setUserProteinGoal(proteinGoal);
    setUserProteinCals(proteinCals);
    const { remainingCals, carbReq, fatReq } = calsAndGramsFromRemaining(
      tdee,
      proteinCals
    );
    setUserRemainingCals(remainingCals);
    setUserCarbReq(carbReq);
    setUserFatReq(fatReq);
    const targetCals = goalCals(tdee);
    setUserGoalCals(targetCals);
  };

  const handleCalculate = (url) => {
    handleSubmit();
    history.push(`${url}/result`);
  };

  return (
    <UserDataContext.Provider
      value={{
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
        userAge,
        setUserAge,
        userGender,
        setUserGender,
        handleGenderRadioChange,
        userPAL,
        setUserPAL,
        handlePALRadioChange,
        userGoal,
        setUserGoal,
        handleGoalRadioChange,
        handleSubmit,
        userBmr,
        userTdee,
        userProteinGoal,
        userProteinCals,
        userRemainingCals,
        userFatReq,
        userCarbReq,
        userGoalCals,
        resultCircle,
        bmiText,
        handleBmiSubmit,
        outputNo,
        saveUserStats,
        handleCalculate,
        saveUserStats,
        convertHeight,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
