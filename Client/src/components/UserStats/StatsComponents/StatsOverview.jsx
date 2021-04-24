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

const StatsOverview = (props) => {
  const { handleForwardClick, userStats, convertHeight, weightUnits } = props;
  const history = useHistory();

  let height = (
    <Value>
      {userStats.height} {userStats.heightUnit}
    </Value>
  );

  if (userStats.heightUnit === "feet") {
    const units = convertHeight(userStats.height, userStats.heightUnit);
    height = <Value>{`${units.feet} ft ${units.inch} In`}</Value>;
  }

  return (
    <OuterWrapper>
      <Card>
        <CardHeadingRow>
          <span>Basic</span>
          <Arrow onClick={handleForwardClick}>{backOSvg(backStyles)}</Arrow>
        </CardHeadingRow>
        <CardMiddleRow>
          <DataWrap>
            <Value>
              {userStats.weight} {weightUnits}
            </Value>
            <Name>Weight</Name>
          </DataWrap>
          <DataWrap>
            {height}
            <Name>Height</Name>
          </DataWrap>
          <DataWrap>
            <Value>{userStats.bmi}</Value>
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
          <Arrow onClick={handleForwardClick}>{backOSvg(backStyles)}</Arrow>
        </CardHeadingRow>
        <CardMiddleRow>
          <DataWrap>
            <Value>{`${Math.round(userStats.proteinTarget)} g`}</Value>
            <Name>Protein</Name>
          </DataWrap>
          <DataWrap>
            <Value>{`${Math.round(userStats.fatsTarget)} g`}</Value>
            <Name>Fats</Name>
          </DataWrap>
          <DataWrap>
            <Value>{`${Math.round(userStats.carbsTarget)} g`}</Value>
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

const Arrow = styled.span`
  cursor: pointer;
`;
