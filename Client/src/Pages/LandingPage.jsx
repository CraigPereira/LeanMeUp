import React from "react";
import styled from "styled-components";
import Auxillary from "../components/HOC/Auxillary.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Palette } from "../constants/Palette.jsx";
import { useHistory } from "react-router-dom";
import {
  LmuBoltSvg,
  FoodSvg,
  ProteinIsometricSVG,
} from "../constants/SVGs.jsx";

const { primary, text } = Palette;

const boltStyles = { width: "20px", height: "25px", fill: "#58c2b1" };

const LandingPage = () => {
  const history = useHistory();

  const copyTextOne = "Lean me up simplifies complex nutritional math for you";
  const copyTextTwo = "Crunching the numbers you need at Lightning fast speed";

  const randomBool = Math.random() < 0.5;

  return (
    <Auxillary>
      <Navbar />
      <OuterContainer>
        <InnerContainer>
          <LeftSection>
            <ContentWrapper>
              <HeadingCopy>
                Nutritional <br />
                Math <br />
                <PrimarySpan>Simplified</PrimarySpan>
              </HeadingCopy>
              <OneLinerCopy>
                {randomBool ? copyTextOne : copyTextTwo}
              </OneLinerCopy>
              <CTAButton onClick={() => history.push("/features")}>
                Get Started
                <BoltWrap>{LmuBoltSvg(boltStyles)}</BoltWrap>
              </CTAButton>
            </ContentWrapper>
          </LeftSection>
          {randomBool ? (
            <RightSection>
              <StyledFoodSvg />
            </RightSection>
          ) : (
            <RightSection>
              <SvgWrap>{ProteinIsometricSVG()}</SvgWrap>
            </RightSection>
          )}
        </InnerContainer>
      </OuterContainer>
    </Auxillary>
  );
};

export default LandingPage;

const OuterContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 80vh;
`;

const InnerContainer = styled.div`
  padding: 0 5%;
  display: flex;
  height: auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 40%;
  height: 90%;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const RightSection = styled.div`
  position: relative;
  width: 60%;
  height: 90%;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const PrimarySpan = styled.div`
  color: ${primary};
`;

const ContentWrapper = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  @media (max-width: 1500px) {
    margin-top: 12px;
  }

  @media (max-width: 1024px) {
    margin-top: 0px;
    align-items: center;
  }
`;

const HeadingCopy = styled.div`
  font-size: 80px;
  color: ${text};
  line-height: 1.3em;
  margin-bottom: 22px;

  @media (max-width: 1024px) {
    font-size: 56px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 46px;
  }
`;

const OneLinerCopy = styled.div`
  font-size: 24px;
  color: ${text};
  margin-bottom: 47px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 17px;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const CTAButton = styled.button`
  position: relative;
  font-size: 21px;
  color: ${text};
  border: 2px solid ${primary};
  border-radius: 23px;
  background: none;
  outline: none;
  padding: 11px 60px;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 16px;
    font-size: 18px;
  }
`;

const BoltWrap = styled.div`
  position: absolute;
  top: 0.5em;
  left: 1.5em;
`;

const SvgWrap = styled.div`
  position: absolute;
  right: 5%;
  top: 30px;

  @media (max-width: 1500px) {
    right: 20%;
    svg {
      width: 600px;
      height: 500px;
    }
  }

  @media (max-width: 1024px) {
    svg {
      width: 500px;
      height: 400px;
    }
  }

  @media (max-width: 500px) {
    right: -35px;
    svg {
      width: 470px;
      height: 370px;
    }
  }
`;

const StyledFoodSvg = styled(FoodSvg)`
  @media (max-width: 1500px) {
    width: 700px;
    height: 500px;
  }

  @media (max-width: 1024px) {
    width: 600px;
    height: 400px;
  }
`;
