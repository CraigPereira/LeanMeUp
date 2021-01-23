import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { paraVariants, spinTransition } from "../Variants/LandingVariants";
import { Palette } from "../constants/Palette";

const Landing = () => {
  const Heading = "Lean me up";
  const tagLine = `${Heading} simplifies complex nutritional math for you`;
  return (
    <LandingOuterWrap>
      <HeadingText>{Heading}</HeadingText>
      <UpperRightContainer>
        <SignUpBtn to={"/signup"}>Sign up</SignUpBtn>
        <LoginBtn to={"/login"}>Login</LoginBtn>
      </UpperRightContainer>
      <Logo
        src={require("../images/LMU-Logo.png")}
        alt="Lean-me-up-logo"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
      <TaglinePara variants={paraVariants} initial="hidden" animate="visible">
        {tagLine}
      </TaglinePara>
      <GetStartedBtn to="/dashboard">Get Started</GetStartedBtn>
    </LandingOuterWrap>
  );
};

export default Landing;

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

const UpperRightContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 50px;
  width: 240px;
  justify-content: space-between;
  grid-row: 2 / 3;
  grid-column: 10 / 12;
`;

const LandingOuterWrap = styled.div`
  color: ${text};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(50px, auto);

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
  }
`;

const TaglinePara = styled(motion.p)`
  color: ${text};
  font-size: 50px;
  margin-top: 70px;
  grid-row: 3 / 4;
  grid-column: 2 / 8;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 23px;
    text-align: justify;
    margin: 0 50px;
    line-height: 2;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const HeadingText = styled.h1`
  color: ${text};
  font-size: 50px;
  grid-row: 2 / 3;
  grid-column: 2 / 5;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled(motion.img)`
  height: 474px;
  width: 474px;
  grid-column: 9 / 12;
  grid-row: 3 / 4;

  @media (max-width: 1200px) {
    height: 380px;
    width: 380px;
  }

  @media (max-width: 500px) {
    height: 310px;
    width: 310px;
  }
`;

const GetStartedBtn = styled(Link)`
  ${ButtonCSS};
  grid-row: 6 / 7;
  grid-column: 2 / 4;

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

const SignUpBtn = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: ${text};
  border: 2px solid ${primary};
  padding: 8px 25px;
  border-radius: 23px;
`;

const LoginBtn = styled(SignUpBtn)`
  border: none;
  transition: 0.5s;

  :hover {
    color: ${primary};
  }
`;
