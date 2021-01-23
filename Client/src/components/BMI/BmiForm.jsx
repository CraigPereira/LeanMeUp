import React, { useContext } from "react";
import { UserDataContext } from "../../contexts/UserDataContext.jsx";
import styled, { css } from "styled-components";
import { Palette } from "../../constants/Palette";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { displayVariants, formVariants } from "../../Variants/BmiFormVariants";

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
    handleBmiSubmit,
    resultCircle,
    bmiText,
    outputNo,
  } = useContext(UserDataContext);

  return (
    <OuterWrapper>
      <BmiFormWrap>
        <StyledBmiForm
          onSubmit={handleBmiSubmit}
          variants={formVariants}
          animate="visible"
          initial="hidden"
        >
          <WeightTitle>Weight</WeightTitle>
          <FlexContainer>
            <UnderLineInput
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
            <WeightLabel htmlFor="weight">{weightUnits}</WeightLabel>
          </FlexContainer>
          <UnitButton onClick={changeWeightUnit}>{weightUnitName}</UnitButton>
          <HeightTitle>Height</HeightTitle>
          <FlexContainer>
            {heightUnits[0] === "ft" && (
              <UnderLineInput
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
            <HeightLabel>
              {heightUnits[0] === "ft" && heightUnits[0]}
            </HeightLabel>
            {heightUnits[0] === "ft" && (
              <UnderLineInput
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
            <HeightLabel>
              {heightUnits[0] === "ft" && heightUnits[1]}
            </HeightLabel>
            {heightUnits === "cm" && (
              <UnderLineInput
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
            <HeightLabel htmlFor="">
              {heightUnits === "cm" && heightUnits}
            </HeightLabel>
          </FlexContainer>
          <UnitButton onClick={changeHeightUnit}>{heightUnitName}</UnitButton>
        </StyledBmiForm>
        {((userWeight && userHeightCm) ||
          (userWeight && userHeightFt && userHeightIn)) && (
          <CalculateBtn to="" onClick={handleBmiSubmit}>
            Calculate
          </CalculateBtn>
        )}
        {outputNo && (
          <BmiDisplayRight
            variants={displayVariants}
            initial="hidden"
            animate="visible"
          >
            <BmiTitle>Your BMI</BmiTitle>
            <div className={resultCircle}>
              <BmiResultWrap>{outputNo}</BmiResultWrap>
            </div>
            <BmiFeedbackPara>{bmiText}</BmiFeedbackPara>
          </BmiDisplayRight>
        )}
        {outputNo && <BackBtn to="/dashboard">Back</BackBtn>}
      </BmiFormWrap>
    </OuterWrapper>
  );
};

export default BmiForm;

const { primary, text } = Palette;

const ButtonCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  font-size: 25px;
  color: ${text};
  border: 2px solid ${text};
  border-radius: 41px;
  margin: 0 auto;
  padding: 10px 50px;
  transition: 0.5s;

  :hover {
    color: ${primary};
    border: 2px solid ${primary};
    transform: translate(20px);
  }
`;

const OuterWrapper = styled.div`
  height: 100vh;
`;

const BmiFormWrap = styled.div`
  color: ${text};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(50px, auto);

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const StyledBmiForm = styled(motion.form)`
  font-size: 25px;
  grid-column: 3 / 5;
  grid-row-start: 2;

  @media (max-width: 500px) {
    height: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const WeightTitle = styled.h3`
  color: ${text};
`;

const HeightTitle = styled.h3`
  color: ${text};
`;

const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const UnderLineInput = styled.input`
  -moz-appearance: textfield;
  font-size: 20px;
  background: none;
  border: none;
  width: 50%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  margin: 10px;
  color: ${text};
  outline: 0;
  transition: 300ms;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  :focus {
    border-bottom: 2px solid ${primary};
  }

  @media (max-width: 500px) {
    width: 25%;
  }
`;

const WeightLabel = styled.label`
  display: block;
`;

const HeightLabel = styled.label`
  display: block;
`;

const UnitButton = styled.button`
  background: none;
  border: none;
  color: ${primary};
  outline: 0;
  margin-bottom: 40px;
  cursor: pointer;

  @media (max-width: 500px) {
    display: flex;
    margin: 0;
  }
`;

const CalculateBtn = styled(Link)`
  ${ButtonCSS};

  grid-row: 4 / 5;
  grid-column: 3 / 5;

  @media (max-width: 1200px) {
    font-size: 20px;
    padding: 10px 30px;
    grid-row: 6 / 7;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    padding: 10px 30px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    padding: 10px 30px;
  }
`;

const BmiDisplayRight = styled(motion.div)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  grid-column: 7 / 11;
  grid-row-start: 2;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

const BmiTitle = styled.h2`
  font-size: 30px;
`;

const BmiResultWrap = styled.div`
  //className="div"
`;

const BmiFeedbackPara = styled.p``;

const BackBtn = styled(Link)`
  ${ButtonCSS};

  grid-column: 8 / 10;
  grid-row: 4 / 5;

  @media (max-width: 1200px) {
    font-size: 20px;
    padding: 10px 30px;
    grid-row: 6 / 7;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    padding: 10px 30px;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    padding: 10px 30px;
  }
`;
