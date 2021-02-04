import React from "react";
import styled from "styled-components";
import { Palette } from "../../../constants/Palette.jsx";
import { backOSvg } from "../../../constants/SVGs.jsx";
import { useHistory } from "react-router-dom";

const { primary, text, card } = Palette;

const backStyles = {
  fill: `${text}`,
  width: "27px",
  transform: "rotate(180)",
};

const StatsOverview = ({ handleForwardClick }) => {
  const history = useHistory();
  return (
    <OuterWrapper>
      <Card>
        <CardHeadingRow>
          <span>Basic</span>
          <span onClick={handleForwardClick}>{backOSvg(backStyles)}</span>
        </CardHeadingRow>
        <CardMiddleRow>
          <DataWrap>
            <Value>133 lbs</Value>
            <Name>Weight</Name>
          </DataWrap>
          <DataWrap>
            <Value>180 cm</Value>
            <Name>height</Name>
          </DataWrap>
          <DataWrap>
            <Value>18.5</Value>
            <Name>BMI</Name>
          </DataWrap>
        </CardMiddleRow>
        <CardLowerRow>
          <ReCalculateBtn onClick={() => history.push("/bmi")}>
            Re Calculate
          </ReCalculateBtn>
        </CardLowerRow>
      </Card>
      <Card>
        <CardHeadingRow>
          <span>Macros & Calories</span>
          <span onClick={handleForwardClick}>{backOSvg(backStyles)}</span>
        </CardHeadingRow>
        <CardMiddleRow>
          <DataWrap>
            <Value>99 g </Value>
            <Name>Protein</Name>
          </DataWrap>
          <DataWrap>
            <Value>106 g</Value>
            <Name>Fats</Name>
          </DataWrap>
          <DataWrap>
            <Value>238 g</Value>
            <Name>Carbs</Name>
          </DataWrap>
        </CardMiddleRow>
        <CardLowerRow>
          <ReCalculateBtn onClick={() => history.push("/calories")}>
            Re Calculate
          </ReCalculateBtn>
        </CardLowerRow>
      </Card>
    </OuterWrapper>
  );
};

export default StatsOverview;

const OuterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  width: 100%;
`;

const Card = styled.div`
  box-sizing: border-box;
  margin-top: 34px;
  margin-right: 53px;
  width: 385px;
  height: 192px;
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
  background: ${card};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CardHeadingRow = styled.div`
  width: 85%;
  color: ${text};
  display: flex;
  justify-content: space-between;
`;

const CardMiddleRow = styled(CardHeadingRow)``;

const CardLowerRow = styled(CardHeadingRow)`
  justify-content: flex-end;
`;

const DataWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBack = styled(backOSvg)`
  fill: ${text};
  cursor: pointer;
  width: 24px;
  transform: rotate(180deg);
`;

const ReCalculateBtn = styled.div`
  font-size: 12px;
  cursor: pointer;
`;

const Value = styled.div`
  color: ${primary};
  font-size: 27px;
`;

const Name = styled.div`
  color: ${text};
  font-size: 12px;
`;
