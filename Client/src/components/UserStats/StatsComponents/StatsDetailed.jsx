import React from "react";
import styled, { css } from "styled-components";
import { Palette } from "../../../constants/Palette.jsx";
import { InfoCircle } from "../../../constants/SVGs.jsx";

const { primary, text, card } = Palette;

const cardsData = [
  { id: 1, label: "Basal Metabolic Rate (BMR)", value: "1648.12" },
  { id: 2, label: "Protein target", value: "99 g" },
  { id: 3, label: "Calories from protein ", value: "396 kcal" },
  {
    id: 4,
    label: "Total Daily Energy expenditure (TDEE)",
    value: "2307 kcal",
  },
  { id: 5, label: "Fats target", value: "106 g" },
  { id: 6, label: "Calories from Carbs & Fat ", value: "955 kcal" },
  { id: 7, label: "Daily Calorie Goal ", value: "2607 kcal" },
  { id: 8, label: "Carbs target", value: "238 g" },
  { id: 9, label: "Current Goal ", value: "Muscle Gain" },
];

const StatsDetailed = () => {
  const cards = cardsData.map((card) => {
    return (
      <GridCard key={card.id}>
        <StatNumber>{card.value}</StatNumber>
        <LabelText>{card.label}</LabelText>
        <IconDiv>{InfoCircle()}</IconDiv>
      </GridCard>
    );
  });

  return (
    <OuterWrapper>
      <InnerWrapper>
        {" "}
        <LeftCardDiv>
          <LeftCard>
            <Logo
              src={require("../../../images/LMU-Logo.png")}
              alt="Lean-me-up-logo"
            />
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
  height: 100%;
  width: 100%;
`;

const OuterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 97%;
`;

const LeftCardDiv = styled.div`
  box-sizing: border-box;
  width: 25%;
  height: 95%;
`;

const LeftCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
