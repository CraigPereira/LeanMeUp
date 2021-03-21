import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Palette } from "../../../constants/Palette.jsx";
import { crossOSvg, InfoCircle } from "../../../constants/SVGs.jsx";
import { cardsData } from "../../../constants/StatsDataStore";
import Auxillary from "../../HOC/Auxillary.jsx";

const { primary, text, card } = Palette;

const CrossSvgStyles = { fill: "#fff", width: "20px", cursor: "pointer" };

const StatsDetailed = () => {
  const [isCardInfoShown, setIsCardInfoShown] = useState(false);
  const [cardData, setCardData] = useState({});

  const handleIClick = (details) => {
    setCardData(details);
    if (isCardInfoShown) return;
    setIsCardInfoShown((prevState) => !prevState);
  };

  const cards = cardsData.map((card) => {
    return (
      <GridCard key={card.id}>
        <StatNumber>{card.value}</StatNumber>
        <LabelText>{card.label}</LabelText>
        {card.label !== "Current Goal" && (
          <IconDiv onClick={() => handleIClick(card.details)}>
            {InfoCircle()}
          </IconDiv>
        )}
      </GridCard>
    );
  });

  return (
    <OuterWrapper>
      <InnerWrapper>
        {" "}
        <LeftCardDiv>
          <LeftCard isCardInfoShown={isCardInfoShown}>
            {isCardInfoShown && cardData?.title ? (
              <Auxillary>
                <CrossIconDiv
                  onClick={() => setIsCardInfoShown((prevState) => !prevState)}
                >
                  {crossOSvg(CrossSvgStyles)}
                </CrossIconDiv>
                <InfoCardTitle>{cardData.title}</InfoCardTitle>
                {cardData.info.map((line) => {
                  return <InfoCardText>{line}</InfoCardText>;
                })}
                {cardData.icon}
              </Auxillary>
            ) : (
              <Logo
                src={require("../../../images/LMU-Logo.png")}
                alt="Lean-me-up-logo"
              />
            )}
          </LeftCard>
        </LeftCardDiv>
        <RightCardsGrid>{cards}</RightCardsGrid>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default StatsDetailed;

const CardCommonStyles = css`
  border-radius: 16px;
  background: ${card};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
`;

const InnerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 600px;
  width: 100%;
`;

const OuterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const LeftCardDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 25%;
  height: 100%;
`;

const LeftCard = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isCardInfoShown }) =>
    isCardInfoShown ? "flex-start" : "center"};
  align-items: center;
  color: ${text};
  ${CardCommonStyles};
`;

const RightCardsGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  flex-basis: 70%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
`;

const GridCard = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 168px;
  ${CardCommonStyles};
`;

const StatNumber = styled.div`
  color: ${primary};
  font-size: 42px;
`;

const LabelText = styled.div`
  font-size: 13px;
  color: ${text};
`;

const IconDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 22px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 225px;
  width: 225px;
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

const CrossIconDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  height: auto;
  margin-top: 35px;
`;

const InfoCardTitle = styled.div`
  font-size: 24px;
  width: 100%;
  color: ${primary};
  display: flex;
  justify-content: center;
  margin: 28px 0;
`;

const InfoCardText = styled.div`
  font-size: 18px;
  text-align: left;
  color: ${text};
  margin-bottom: 28px;
  padding: 0 38px;
`;
