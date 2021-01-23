import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Palette } from "../constants/Palette";
import {
  paraVariants,
  circle1Variants,
  circle2Variants,
} from "../Variants/DashboardVariants";

const Dashboard = () => {
  return (
    <DashWrap>
      <DashHeading variants={paraVariants} initial="hidden" animate="visible">
        What would you like to do?
      </DashHeading>
      <DashBmiWrap variants={circle1Variants} animate="visible">
        <RoundButton to="/bmi">Calculate BMI</RoundButton>
      </DashBmiWrap>
      <DashCalsWrap
        className="dash-cals"
        variants={circle2Variants}
        animate="visible"
      >
        <RoundButton to="/calories"> Calculate Calories</RoundButton>
      </DashCalsWrap>
      <BackButton to="/">Back</BackButton>
    </DashWrap>
  );
};

export default Dashboard;

const { primary, text } = Palette;

const DashWrap = styled.div`
  color: ${text};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(50px, auto);

  @media (max-width: 768px) {
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
  }
`;

const DashHeading = styled(motion.h1)`
  color: ${text};
  font-size: 70px;
  grid-row: 1 / 2;
  grid-column: 4 / 12;

  @media (max-width: 1200px) {
    font-size: 40px;
    grid-column: 4 / 11;
    grid-row: 2 / 3;
    margin: 0;
  }

  @media (max-width: 768px) {
    color: ${text};
    font-size: 30px;
    margin: 0;
  }

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

const DashBmiWrap = styled(motion.div)`
  grid-row: 3 / 4;
  grid-column: 3 / 5;

  @media (max-width: 1200px) {
    grid-row: 5 / 6;
    grid-column: 3 / 5;
  }
`;

const DashCalsWrap = styled(motion.div)`
  grid-row: 3 / 4;
  grid-column: 8 / 10;

  @media (max-width: 1200px) {
    grid-row: 5 / 6;
    grid-column: 8 / 10;
  }
`;

const RoundButton = styled(Link)`
  font-size: 30px;
  color: ${text};
  border: 2px solid white;
  list-style-type: none;
  text-decoration: none;
  padding: 20px;
  margin: 10px;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  :hover {
    color: ${primary};
    border: 2px solid ${primary};
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    font-size: 20px;
    padding: 10px;
    height: 250px;
    width: 250px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
    height: 200px;
    width: 200px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
    height: 150px;
    width: 150px;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  text-decoration: none;
  font-size: 25px;
  color: var(--text-color);
  border: 2px solid #ffffff;
  border-radius: 41px;
  margin: 0 auto;
  padding: 10px 50px;
  transition: 0.5s;

  :hover {
    color: ${primary};
    border: 2px solid ${primary};
    transform: translate(20px);
  }

  margin-left: 20px;
  grid-row: 8 / 9;
  grid-column: 6 / 7;

  @media (max-width: 1200px) {
    grid-row: 8 / 9;
    grid-column: 6 / 8;
  }

  @media (max-width: 768px) {
    margin: 0;
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
