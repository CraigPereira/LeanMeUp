import React from "react";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import { crossOSvg } from "../../constants/SVGs.jsx";
import { renderSvg } from "../../constants/GlobalFunctions";
import { motion } from "framer-motion";

const { primary, text, background } = Palette;
const CrossSvgStyles = { fill: "#fff", width: "20px", cursor: "pointer" };

const containerVariant = {
  hidden: {
    y: 500,
    opacity: 0,
  },
  visible: {
    y: 100,
    opacity: 1,
    transition: {
      stiffness: 130,
    },
  },
  exit: {
    y: 500,
    opacity: 0,
    transition: {
      stiffness: 130,
    },
  },
};

const InfoModal = (props) => {
  const { setIsCardInfoShown, cardData } = props;

  return (
    <Container
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <InnerDiv>
        <CrossIconDiv
          onClick={() => setIsCardInfoShown((prevState) => !prevState)}
        >
          {crossOSvg(CrossSvgStyles)}
        </CrossIconDiv>
        <InfoCardTitle>{cardData.label}</InfoCardTitle>
        {cardData.info.map((line) => {
          return <InfoCardText key={line}>{line}</InfoCardText>;
        })}
        {renderSvg(cardData.icon)}
      </InnerDiv>
    </Container>
  );
};

export default InfoModal;

const Container = styled(motion.div)`
  display: none;

  /* @media (max-width: 1024px) {
    display: block;
    position: absolute;
    width: 382px  ;
    height: 200px;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: 30;
    margin: auto auto;
  } */
  @media (max-width: 1024px) {
    display: grid;
    place-items: center;
    position: absolute;
    width: 382px;
    height: 200px;
    z-index: 30;
    /* margin: auto auto; */
  }
`;

const InnerDiv = styled.div`
  width: 382px;
  height: auto;
  position: absolute;
  display: flex;
  background: ${background};
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
  padding: 0 20px;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media (max-width: 500px) {
    width: 80%;
    padding: 0 14px;
    padding-bottom: 24px;
  }
`;

const InfoCardTitle = styled.div`
  font-size: 20px;
  width: 100%;
  color: ${primary};
  display: flex;
  justify-content: center;
  margin: 18px 0;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const InfoCardText = styled.div`
  font-size: 16px;
  text-align: left;
  color: ${text};
  margin-bottom: 18px;
  padding: 0 28px;

  @media (max-width: 500px) {
    margin-bottom: 14px;
  }
`;

const CrossIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: auto;
  padding: 0 10px;
  margin-top: 24px;

  @media (max-width: 500px) {
    margin-top: 16px;
  }
`;
