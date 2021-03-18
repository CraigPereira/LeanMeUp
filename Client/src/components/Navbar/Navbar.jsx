import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import { LmuBoltSvg } from "../../constants/SVGs.jsx";
import { AuthContext } from "../../contexts/authContext";

const svgStyles = { width: "28px", height: "39px", fill: "#58c2b1" };

const { primary, text } = Palette;

const Navbar = () => {
  const [currUserEmail, setCurrUserEmail] = useState("");
  const { logOut } = useContext(AuthContext);
  const history = useHistory();

  //fetch email here, in a use effect, with []
  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    setCurrUserEmail(userEmail);
  });

  return (
    <OuterContainer>
      <LeftWrap>
        {LmuBoltSvg(svgStyles)}
        <TextSpan>LEAN ME UP</TextSpan>
      </LeftWrap>
      <CenterWrap>
        <span>
          Welcome, <EmailSpan>{` ${currUserEmail}`}</EmailSpan>
        </span>
      </CenterWrap>
      <RightWrap>
        <HomeBtn onClick={() => history.push("/")}>Home</HomeBtn>
        <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
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
`;

const TextSpan = styled.span`
  font-size: 26px;
  margin-left: 8px;
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

const HomeBtn = styled.div`
  font-size: 18px;
  text-decoration: none;
  color: ${text};
  border: 2px solid ${primary};
  padding: 8px 25px;
  border-radius: 23px;
  cursor: pointer;
`;

const LogOutBtn = styled(HomeBtn)`
  border: none;
  transition: 0.5s;
  padding: none;

  :hover {
    color: ${primary};
  }
`;
