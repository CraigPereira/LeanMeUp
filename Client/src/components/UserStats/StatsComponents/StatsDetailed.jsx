import React from "react";
import styled, { css } from "styled-components";
import { Palette } from "../../../constants/Palette.jsx";
import { crossOSvg, InfoCircle } from "../../../constants/SVGs.jsx";
import Auxillary from "../../HOC/Auxillary.jsx";
import { renderSvg } from "../../../constants/GlobalFunctions.js";
import InfoModal from "../../Modals/InfoModal.jsx";

const { primary, text, card } = Palette;

const CrossSvgStyles = { fill: "#fff", width: "20px", cursor: "pointer" };

const StatsDetailed = (props) => {
  const {
    cardGridData,
    handleIClick,
    isCardInfoShown,
    setIsCardInfoShown,
    cardData,
    handleStatUnits,
  } = props;

  console.log(cardGridData);
  const cards = cardGridData.map((card) => {
    return (
      <GridCard key={card.label}>
        <StatNumber>
          {typeof card.value === "string"
            ? card.value === "MG"
              ? "Muscle Gain"
              : "Weight Loss"
            : Math.round(card.value)}{" "}
          {handleStatUnits(card.label)}
        </StatNumber>
        <LabelText>{card.label}</LabelText>
        {card.label !== "Current Goal" && (
          <IconDiv onClick={() => handleIClick(card)}>{InfoCircle()}</IconDiv>
        )}
      </GridCard>
    );
  });

  return (
    <OuterWrapper>
      <InnerWrapper>
        {" "}
        {isCardInfoShown && (
          <InfoModal
            setIsCardInfoShown={setIsCardInfoShown}
            cardData={cardData}
          />
        )}
        <LeftCardDiv>
          <LeftCard isCardInfoShown={isCardInfoShown}>
            {isCardInfoShown && cardData?.label ? (
              <Auxillary>
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

const ScrollStyles = css`
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${primary};

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${primary};
  }
`;

const InnerWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: row;
  height: 600px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
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
  margin-right: 40px;
`;

const LeftCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isCardInfoShown }) =>
    isCardInfoShown ? "flex-start" : "center"};
  align-items: center;
  color: ${text};
  ${CardCommonStyles};

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightCardsGrid = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 140px;
  }

  @media (max-width: 620px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    grid-auto-rows: 100px;
    height: 550px;
    padding: 20px;
    ${ScrollStyles};
  }
`;

const GridCard = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 42px;
  width: 100%;
  height: 100%;
  ${CardCommonStyles};
`;

const StatNumber = styled.div`
  color: ${primary};
  font-size: 42px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
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
