import React from "react";
import styled, { css } from "styled-components";
import Auxillary from "../components/HOC/Auxillary";
import Navbar from "../components/Navbar/Navbar";
import { Palette } from "../constants/Palette";
import { BmiIcon, MacrosIcon } from "../constants/SVGs";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const { primary, card, background, text } = Palette;

// const cardOneVariant = {
//   hidden: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.2,
//       type: "spring",
//       stiffness: 130,
//     },
//   },
// };

// const cardTwoVariant = {
//   hidden: {
//     y: 100,
//     opacity: 0,
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 2.5,
//       //   delay: 0.4,
//       type: "spring",
//       stiffness: 130,
//     },
//   },
// };

const FeatureSelect = () => {
  const history = useHistory();

  const cardData = [
    {
      title: "Calculate BMI",
      desc:
        "The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass ",
      icon: <StopWatch />,
      url: "/bmi",
    },
    {
      title: "Breakdown Macros",
      desc:
        "Macronutrients are nutrients that provide calories or energy and are required in large amounts to maintain body functions and carry out the activities of daily life.  ",
      icon: <SmartWatch />,
      url: "/calories",
    },
  ];

  const cards = cardData.map((data) => {
    return (
      <Card
        key={data.title}
        onClick={() => history.push(data.url)}
        //  variants={data.url === "/bmi" ? cardOneVariant : cardTwoVariant}
        initial="hidden"
        animate="visible"
      >
        <CardContent>
          <span>{data.icon}</span>
          <Title>{data.title}</Title>
          <Description>{data.desc}</Description>
        </CardContent>
      </Card>
    );
  });

  return (
    <Auxillary>
      <Navbar />
      <OuterContainer>
        <InnerContainer>
          <Heading>
            <ColoredSpan>Lean Me Up</ColoredSpan> Features
          </Heading>
          <CardRow>{cards}</CardRow>
        </InnerContainer>
      </OuterContainer>
    </Auxillary>
  );
};

export default FeatureSelect;

const OuterContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 80vh;
  display: grid;
  place-items: center;

  @media (max-width: 1024px) {
    height: 85vh;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Heading = styled.div`
  font-size: 60px;
  color: ${text};
  margin-bottom: 46px;

  @media (max-width: 1024px) {
    font-size: 42px;
    margin-bottom: 26px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const ColoredSpan = styled.span`
  color: ${primary};
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    height: 60%;
  }
`;

const Card = styled(motion.div)`
  box-sizing: border-box;
  border-radius: 16px;
  height: 320px;
  width: 320px;
  padding: 27px;
  margin-right: 34px;
  background: ${card};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
  cursor: pointer;
  display: grid;
  place-items: center;
  border: 1px solid ${background};
  /* transition: 0.5s; */

  :hover {
    /* border-bottom: 1px solid ${primary}; */
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    height: 280px;
    width: 280px;
  }

  @media (max-width: 600px) {
    height: 180px;
    width: 180px;
  }
`;

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CommonStyles = css`
  width: 64px;
  height: auto;
  stroke: ${primary};
  stroke-width: 0.8;

  @media (max-width: 1024px) {
    width: 54px;
  }

  @media (max-width: 600px) {
    width: 44px;
  }
`;

const StopWatch = styled(BmiIcon)`
  ${CommonStyles};
`;

const SmartWatch = styled(MacrosIcon)`
  ${CommonStyles};
`;

const Title = styled.div`
  font-size: 18px;
  color: ${text};

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  color: ${text};

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
