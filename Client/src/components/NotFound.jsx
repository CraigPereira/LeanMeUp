import React from "react";
import styled from "styled-components";
import { Palette } from "../constants/Palette";
import { backOSvg } from "../constants/SVGs";

const { primary, text, card, background } = Palette;

const IconStyles = { fill: `${text}`, width: "27px" };

const NotFound = ({ history }) => {
  return (
    <MainWrap>
      <Card>
        <ErrorCode>404</ErrorCode>
        <TextMsg>Oops... Looks like this page wasn't found</TextMsg>
        <IconContainer onClick={() => history.push("/")}>
          {backOSvg(IconStyles)}
        </IconContainer>
      </Card>
    </MainWrap>
  );
};

export default NotFound;

const MainWrap = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: ${background};
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 443px;
  height: 339px;
  background: ${card};
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
`;

const ErrorCode = styled.h2`
  font-size: 113px;
  color: ${primary};
  margin: 0;
`;

const TextMsg = styled.p`
  color: ${text};
  margin: 0;
  font-size: 18px;
`;

const IconContainer = styled.div`
  cursor: pointer;
`;
