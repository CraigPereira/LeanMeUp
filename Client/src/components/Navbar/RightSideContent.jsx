import React from "react";
import styled from "styled-components";
import { FiLogOut, FiLogIn, FiUserPlus } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import Auxillary from "../HOC/Auxillary.jsx";
import { Palette } from "../../constants/Palette.jsx";

const { primary, text } = Palette;

const RightSideContent = (props) => {
  const { isAuthenticated, logOut } = props;
  const history = useHistory();
  return (
    <Auxillary>
      {isAuthenticated ? (
        <Auxillary>
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
        </Auxillary>
      ) : (
        <Auxillary>
          <HomeBtn onClick={() => history.push("/signup")}>Sign up</HomeBtn>
          <LogOutBtn onClick={() => history.push("/login")}>Login</LogOutBtn>
          <MobileIconsWrap>
            <IconWrap onClick={() => history.push("/signup")}>
              <FiUserPlus color={primary} size="24" />
            </IconWrap>
            <IconWrap onClick={() => history.push("/login")}>
              <FiLogIn color={primary} size="24" />
            </IconWrap>
          </MobileIconsWrap>
        </Auxillary>
      )}
    </Auxillary>
  );
};

export default RightSideContent;

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
