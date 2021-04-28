import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import { LmuBoltSvg } from "../../constants/SVGs.jsx";
import { AuthContext } from "../../contexts/authContext";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const { primary, text } = Palette;

const svgStyles = { width: "28px", height: "39px", fill: primary };

const Navbar = () => {
  const { logOut, userEmail } = useContext(AuthContext);
  const history = useHistory();

  return (
    <OuterContainer>
      <LeftWrap onClick={() => history.push("/")}>
        {/* {LmuBoltSvg(svgStyles)} */}
        <LmuBolt />
        <TextSpan>LEAN ME UP</TextSpan>
      </LeftWrap>
      <CenterWrap>
        <EmailContainer>
          Welcome, <EmailSpan>{` ${userEmail}`}</EmailSpan>
        </EmailContainer>
      </CenterWrap>
      <RightWrap>
        <HomeBtn onClick={() => history.push("/dash")}>Dashboard</HomeBtn>
        <LogOutBtn onClick={logOut}>Logout</LogOutBtn>
        <MobileIconsWrap>
          <IconWrap onClick={() => history.push("/dash")}>
            <CgProfile color={primary} size="24" />
          </IconWrap>
          <IconWrap onClick={logOut}>
            <FiLogOut color={primary} size="24" />
          </IconWrap>
        </MobileIconsWrap>
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

const HomeBtn = styled.div`
  font-size: 18px;
  text-decoration: none;
  color: ${text};
  border: 2px solid ${primary};
  padding: 8px 25px;
  border-radius: 23px;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LogOutBtn = styled(HomeBtn)`
  border: none;
  transition: 0.5s;
  padding: none;

  :hover {
    color: ${primary};
  }
`;

const MobileIconsWrap = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

const IconWrap = styled.span`
  margin: 0 6px;
`;

const LmuBolt = styled(LmuBoltSvg)`
  fill: ${primary};
  width: 28px;
  height: 39px;

  @media (max-width: 1024px) {
    width: 20px;
    height: 31px;
  }
`;
