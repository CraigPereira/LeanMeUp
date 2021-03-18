import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar.jsx";
import { Palette } from "../constants/Palette";
import { LmuBoltSvg, pencilSvg, StatsSvg, backOSvg } from "../constants/SVGs";

const svgStyles = { width: "118px", height: "151px", fill: "#58c2b1" };

const { primary, text, card, background } = Palette;

const backStyles = { fill: `${text}`, width: "32px" };

const UserDashboard = ({ history }) => {
  const data = [
    {
      id: 1,
      title: "Calculate",
      svg: LmuBoltSvg(svgStyles),
      clicked: () => history.push("/dashboard"),
    },
    {
      id: 2,
      title: "My Stats",
      svg: StatsSvg(svgStyles),
      clicked: () => history.push("/stats"),
    },
    { id: 3, title: "Edit Profile", svg: pencilSvg(svgStyles) },
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

const OuterContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

const InnerRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100vw;
  height: auto;
  margin: 41px 0;
  padding: 0 10%;
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 390px;
`;

const Card = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  height: 100%;
  width: 420px;
  background: ${card};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
  cursor: pointer;
  display: grid;
  place-items: center;
  border: 1px solid ${background};

  :hover {
    border: 1px solid ${primary};
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
`;

const Heading = styled(Title)`
  font-size: 54px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 37px;
`;

const BackIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 37px;
  cursor: pointer;
`;
