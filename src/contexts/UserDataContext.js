import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserDataContextProvider = ({ children }) => {
  const [weightUnits, setWeightUnits] = useState("kgs");
  const [weightUnitName, setWeightUnitName] = useState("pounds");
  const [heightUnits, setHeightUnits] = useState(["ft", "in"]);
  const [heightUnitName, setHeightUnitName] = useState("centimeters");
  const [userWeight, setUserWeight] = useState(false);
  const [userHeightCm, setUserHeightCm] = useState(false);
  const [userHeightFt, setUserHeightFt] = useState(false);
  const [userHeightIn, setUserHeightIn] = useState(false);
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
    return [formulaWeight, formulaHeight];
  };

  const calculateBmr = () => {
    const [formulaWeight, formulaHeight] = convertUnits();
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

  const calculateTdee = (bmr) => (bmr * userPAL).toFixed(2);

  const Protein = () => {
    const [formulaWeight] = convertUnits();
    const proteinGoal = Math.round(formulaWeight * 2.2 * 0.75);
    const proteinCals = proteinGoal * 4;
    return [proteinGoal, proteinCals];
  };

  const calsAndGramsFromRemaining = (tdee, proteinCals) => {
    const remainingCals = ((tdee - proteinCals) / 2).toFixed(2);
    const carbReq = (remainingCals / 4).toFixed(2);
    const fatReq = (remainingCals / 9).toFixed(2);
    return [remainingCals, carbReq, fatReq];
  };

  const goalCals = (tdee) => {
    const tdeeFloat = parseFloat(tdee);
    return userGoal === "MG"
      ? Math.round(tdeeFloat + 300)
      : Math.round(tdeeFloat - 300);
  };

  const handleSubmit = (e) => {
    const bmr = calculateBmr();
    setUserBmr(bmr);
    const tdee = calculateTdee(bmr);
    setUserTdee(tdee);
    const [proteinGoal, proteinCals] = Protein();
    setUserProteinGoal(proteinGoal);
    setUserProteinCals(proteinCals);
    const [remainingCals, carbReq, fatReq] = calsAndGramsFromRemaining(
      tdee,
      proteinCals
    );
    setUserRemainingCals(remainingCals);
    setUserCarbReq(carbReq);
    setUserFatReq(fatReq);
    const targetCals = goalCals(tdee);
    setUserGoalCals(targetCals);
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
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
