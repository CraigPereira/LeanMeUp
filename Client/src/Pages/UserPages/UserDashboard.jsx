import React from "react";
import styled, { css } from "styled-components";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Palette } from "../../constants/Palette.jsx";
import { LmuBoltSvg, StatsSvg, backOSvg } from "../../constants/SVGs.jsx";

const { primary, text, card, background } = Palette;

const backStyles = { fill: `${text}`, width: "32px" };

const UserDashboard = ({ history }) => {
  const data = [
    {
      id: 1,
      title: "Calculate",
      svg: <BoltSvg />,
      clicked: () => history.push("/features"),
    },
    {
      id: 2,
      title: "My Stats",
      svg: <StatIcon />,
      clicked: () => history.push("/stats"),
    },
  ];

  const Cards = data.map((item) => (
    <Card key={item.id} onClick={item.clicked}>
      <CardInner>
        <span>{item.svg}</span>
        <Title>{item.title}</Title>
      </CardInner>
    </Card>
  ));

  return (
    <OuterContainer>
      <Navbar />
      <InnerRow>
        <Heading>Dashboard</Heading>
        <CardsRow>{Cards}</CardsRow>
        <BackIconDiv onClick={() => history.push("/")}>
          {backOSvg(backStyles)}
        </BackIconDiv>
      </InnerRow>
    </OuterContainer>
  );
};

export default UserDashboard;

const IconStyles = css`
  width: 118px;
  height: 151px;
  stroke: ${primary};

  @media (max-width: 1024px) {
    width: 80px;
    height: 113px;
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 73px;
  }
`;

const OuterContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const InnerRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  margin: 41px 0;
  padding: 0 10%;

  @media (max-width: 1024px) {
    height: 80%;
  }
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 390px;

  @media (max-width: 1024px) {
    justify-content: space-between;
    height: 100%;
  }

  @media (max-width: 699px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  height: 320px;
  width: 320px;
  margin-right: 34px;
  background: ${card};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
  cursor: pointer;
  display: grid;
  place-items: center;
  border: 1px solid ${background};
  transition: 0.5s;

  :hover {
    border: 1px solid ${primary};
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    height: 280px;
    width: 280px;
  }

  @media (max-width: 600px) {
    height: 180px;
    width: 180px;
  }
`;

const CardInner = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 60%;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  color: ${text};

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Heading = styled(Title)`
  font-size: 54px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 37px;

  @media (max-width: 1024px) {
    justify-content: center;
    font-size: 32px;
  }
`;

const BackIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 37px;
  cursor: pointer;
`;

const BoltSvg = styled(LmuBoltSvg)`
  stroke-width: 0.4em;
  fill: none;
  ${IconStyles}
`;

const StatIcon = styled(StatsSvg)`
  fill: ${primary};
  ${IconStyles};
`;
