import React, { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { entryVariants } from "../../Variants/CalsFormVariants";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar.jsx";

const CalsForm = (props) => {
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
    userAge,
    setUserAge,
    userGender,
    handleGenderRadioChange,
    userPAL,
    handlePALRadioChange,
    userGoal,
    handleGoalRadioChange,
    handleCalculate,
  } = useContext(UserDataContext);

  return (
    <div className="cals-form-wrap">
      <NavContainer>
        <Navbar />
      </NavContainer>
      <motion.form
        //onSubmit={handleCalculate}
        variants={entryVariants}
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
            onChange={(e) => setUserWeight(e.target.value)}
          />
          <label htmlFor="weight">{weightUnits}</label>
        </div>
        <button onClick={changeWeightUnit}>{weightUnitName}</button>
        <h3>Height</h3>
        <div className="d-flex">
          {heightUnits[0] === "ft" && (
            <input
              type="number"
              id="height-ft"
              name="height"
              value={userHeightFt}
              min="0"
              step=".01"
              onChange={(e) => setUserHeightFt(e.target.value)}
            />
          )}
          <label htmlFor="">{heightUnits[0] === "ft" && heightUnits[0]}</label>
          {heightUnits[0] === "ft" && (
            <input
              type="number"
              id="height-in"
              name="height"
              value={userHeightIn}
              min="0"
              step=".01"
              onChange={(e) => setUserHeightIn(e.target.value)}
            />
          )}
          <label htmlFor="">{heightUnits[0] === "ft" && heightUnits[1]}</label>
          {heightUnits === "cm" && (
            <input
              type="number"
              id="height"
              value={userHeightCm}
              name="height"
              min="0"
              step=".01"
              onChange={(e) => setUserHeightCm(e.target.value)}
            />
          )}
          <label htmlFor="">{heightUnits === "cm" && heightUnits}</label>
        </div>
        <button onClick={changeHeightUnit}>{heightUnitName}</button>
        <div className="d-block">
          <h3>Age</h3>
          <input
            type="number"
            id="age"
            name="age"
            value={userAge}
            min="0"
            step=".01"
            onChange={(e) => setUserAge(e.target.value)}
          />
        </div>
      </motion.form>
      <motion.div
        className="gender-radio"
        variants={entryVariants}
        animate="visible"
        initial="hidden"
      >
        <h3>Gender</h3>
        <label htmlFor="Male" className="radioContainer">
          <input
            type="radio"
            id="Male"
            name="gender"
            checked={userGender === "M"}
            onChange={handleGenderRadioChange}
            value="M"
          />
          M<span className="circle"></span>
        </label>
        <label htmlFor="Female" className="radioContainer">
          <input
            type="radio"
            id="Female"
            name="gender"
            checked={userGender === "F"}
            onChange={handleGenderRadioChange}
            value="F"
          />
          F<span className="circle"></span>
        </label>
      </motion.div>
      <motion.div
        className="goal-radio"
        variants={entryVariants}
        animate="visible"
        initial="hidden"
      >
        <h3>Goal</h3>
        <label htmlFor="MG" className="radioContainer">
          <input
            type="radio"
            id="MG"
            name="goal"
            value="MG"
            checked={userGoal === "MG"}
            onChange={handleGoalRadioChange}
          />
          Muscle gain
          <span className="circle"></span>
        </label>
        <label htmlFor="WL" className="radioContainer">
          <input
            type="radio"
            id="WL"
            name="goal"
            value="WL"
            checked={userGoal === "WL"}
            onChange={handleGoalRadioChange}
          />
          Weight loss
          <span className="circle"></span>
        </label>
      </motion.div>
      {((userWeight && userHeightCm && userAge) ||
        (userWeight && userHeightFt && userHeightIn && userAge)) && (
        <BtnWrapper>
          <CalculateBtn onClick={() => handleCalculate(props.match.url)}>
            Calculate
          </CalculateBtn>
        </BtnWrapper>
      )}
      <motion.div
        className="act-div"
        variants={entryVariants}
        animate="visible"
        initial="hidden"
      >
        <h3>Activiy Level</h3>
        <div className="act-inner-div">
          <label htmlFor="1.2" className="radioContainer">
            <input
              type="radio"
              id="1.2"
              name="pal"
              checked={userPAL === "1.2"}
              onChange={handlePALRadioChange}
              value="1.2"
            />
            Exclusively sedentary and lying activities (old and frail
            individuals)
            <span className="circle"></span>
          </label>
        </div>
        <div className="act-inner-div">
          <label htmlFor="1.4" className="radioContainer">
            <input
              type="radio"
              id="1.4"
              name="pal"
              onChange={handlePALRadioChange}
              checked={userPAL === "1.4"}
              value="1.4"
            />
            Exclusively sedentary activities with no or low impact free time
            activities (desk job, precision mechanic)
            <span className="circle"></span>
          </label>
        </div>
        <div className="act-inner-div">
          <label htmlFor="1.6" className="radioContainer">
            <input
              type="radio"
              id="1.6"
              name="pal"
              onChange={handlePALRadioChange}
              checked={userPAL === "1.6"}
              value="1.6"
            />
            Sedentary activities with added expenditure due to occasional
            walking and standing (lab worker, motorist, student)
            <span className="circle"></span>
          </label>
        </div>
        <div className="act-inner-div">
          <label htmlFor="1.8" className="radioContainer">
            <input
              type="radio"
              id="1.8"
              name="pal"
              checked={userPAL === "1.8"}
              onChange={handlePALRadioChange}
              value="1.8"
            />
            Mostly standing & walking activities (waiter, mechanic, housewife,
            craftsman, courier)
            <span className="circle"></span>
          </label>
        </div>
        <div className="act-inner-div">
          <label htmlFor="2.1" className="radioContainer">
            <input
              type="radio"
              id="2.1"
              name="pal"
              value="2.1"
              checked={userPAL === "2.1"}
              onChange={handlePALRadioChange}
            />
            Physical work (construction worker, farmer, pro athlete)
            <span className="circle"></span>
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default CalsForm;

const BtnWrapper = styled.div`
  order: 3;
  grid-row: 5 / 6;
  grid-column: 6 / 7;
`;

const CalculateBtn = styled.div`
  display: grid;
  place-items: center;
  font-size: 25px;
  color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 41px;
  margin: 0 auto;
  padding: 10px 50px;
  transition: 0.5s;
  cursor: pointer;
`;

const NavContainer = styled.div`
  grid-column: 1 / span 12;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
