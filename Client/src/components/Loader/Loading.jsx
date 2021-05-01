import React from "react";
import styled from "styled-components";
import { Palette } from "../../constants/Palette";
import { motion } from "framer-motion";
import { spinTransition } from "../../Variants/LandingVariants";

const { background } = Palette;

const logoSrc = "https://i.postimg.cc/G3ZgFNDb/LMU-Logo.png";

const Loading = () => {
  return (
    <MainWrap>
      <Logo
        src={logoSrc}
        alt="Lean-me-up-logo"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </MainWrap>
  );
};

export default Loading;

const MainWrap = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background: ${background};
`;

const Logo = styled(motion.img)`
  height: 400px;
  width: 400px;

  @media (max-width: 1024px) {
    height: 380px;
    width: 380px;
  }

  @media (max-width: 500px) {
    height: 270px;
    width: 270px;
  }
`;
