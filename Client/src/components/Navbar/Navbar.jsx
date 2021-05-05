import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import { LmuBoltSvg } from "../../constants/SVGs.jsx";
import { AuthContext } from "../../contexts/authContext";
import RightSideContent from "./RightSideContent.jsx";

const { primary, text } = Palette;

const Navbar = () => {
  const { logOut, userEmail, isAuthenticated } = useContext(AuthContext);
  const history = useHistory();
  return (
    <OuterContainer>
      <LeftWrap onClick={() => history.push("/")}>
        <LmuBolt />
        <TextSpan>LEAN ME UP</TextSpan>
      </LeftWrap>
      <CenterWrap>
        {isAuthenticated && (
          <EmailContainer>
            Welcome, <EmailSpan>{` ${userEmail}`}</EmailSpan>
          </EmailContainer>
        )}
      </CenterWrap>
      <RightWrap>
        <RightSideContent logOut={logOut} isAuthenticated={isAuthenticated} />
      </RightWrap>
    </OuterContainer>
  );
};

export default Navbar;

const OuterContainer = styled.div`
  color: ${text};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 5%;
`;

const LeftWrap = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const TextSpan = styled.span`
  font-size: 26px;
  margin-left: 8px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin-left: 4px;
  }
`;

const EmailContainer = styled.span`
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const EmailSpan = styled.span`
  color: ${primary};
`;

const CenterWrap = styled.div`
  display: flex;
  width: auto;
  font-size: 18px;
`;

const RightWrap = styled(LeftWrap)``;

const LmuBolt = styled(LmuBoltSvg)`
  fill: ${primary};
  width: 28px;
  height: 39px;

  @media (max-width: 1024px) {
    width: 20px;
    height: 31px;
  }
`;
