import React, { useState } from "react";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import { backOSvg } from "../../constants/SVGs.jsx";
import StatsOverview from "./StatsComponents/StatsOverview.jsx";
import StatsDetailed from "./StatsComponents/StatsDetailed.jsx";

const { primary, text, card, background, placeholder } = Palette;
const backStyles = { fill: `${text}`, width: "27px", cursor: "pointer" };

const StatsContainer = ({ history }) => {
  const [isOverview, setIsOverview] = useState(true);

  return (
    <MainWrap>
      <InnerRow>
        <HeadingRow>
          <Heading>My Stats</Heading>
        </HeadingRow>
        <MiddleRow>
          {isOverview ? <StatsOverview /> : <StatsDetailed />}
        </MiddleRow>
        <LowerRow>
          <BackIconDiv onClick={() => history.push("/dash")}>
            {backOSvg(backStyles)}
          </BackIconDiv>
        </LowerRow>
      </InnerRow>
    </MainWrap>
  );
};

export default StatsContainer;

const MainWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${background};
`;

const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 80vw;
  height: 710px;
`;

const HeadingRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Heading = styled.div`
  font-size: 63px;
  color: ${text};
`;

const LowerRow = styled(HeadingRow)``;

const MiddleRow = styled.div`
  height: 100%;
  width: 100%;
`;

const BackIconDiv = styled.div`
  cursor: pointer;
`;
