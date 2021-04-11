import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../../Axios/baseUrl";
import { Palette } from "../../constants/Palette.jsx";
import { backOSvg } from "../../constants/SVGs.jsx";
import StatsOverview from "./StatsComponents/StatsOverview.jsx";
import StatsDetailed from "./StatsComponents/StatsDetailed.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const { text, background } = Palette;
const backStyles = { fill: `${text}`, width: "27px", cursor: "pointer" };

const StatsContainer = ({ history }) => {
  const [isOverview, setIsOverview] = useState(true);
  const [cardGridData, setCardGridData] = useState([]);
  const [isCardInfoShown, setIsCardInfoShown] = useState(false);
  const [cardData, setCardData] = useState({});
  const [userStats, setUserStats] = useState({});

  useEffect(() => {
    //Fetch data on mount
    fetchData();
  }, []);

  const fetchData = async () => {
    //Async function to fetch the card data from the db (Not a user's stats)
    const res = await axios.get("api/cards/");
    const { cards } = res.data;
    setCardGridData(cards);

    const response = await axios.get("/api/user/stats");
    const {
      data: { stats },
    } = response;
    setUserStats(stats);
  };

  const handleBackClick = () => {
    //Takes you back, depending on where you are at the moment
    if (isOverview) history.push("/dash");
    else setIsOverview((prevState) => !prevState);
  };

  //Changes the state when the arrow is clicked, to take you to the next component
  const handleForwardClick = () => setIsOverview((prevState) => !prevState);

  const handleIClick = (details) => {
    //Called When the 'I' Icon on the Card is clicked, it will display more info about that particular card on the left.
    setCardData(details);
    if (isCardInfoShown) return;
    setIsCardInfoShown((prevState) => !prevState);
  };

  return (
    <MainWrap>
      <Navbar />
      <InnerRow isOverview={isOverview}>
        <Heading>My Stats</Heading>
        <MiddleRow>
          {isOverview ? (
            //Conditionally rendering either the stats overview or the  detailed stats component
            <StatsOverview
              handleForwardClick={handleForwardClick}
              userStats={userStats}
            />
          ) : (
            <StatsDetailed
              cardGridData={cardGridData}
              handleIClick={handleIClick}
              isCardInfoShown={isCardInfoShown}
              setIsCardInfoShown={setIsCardInfoShown}
              cardData={cardData}
            />
          )}
        </MiddleRow>
        <LowerRow isOverview={isOverview}>
          <BackIconDiv onClick={handleBackClick}>
            {backOSvg(backStyles)}
          </BackIconDiv>
          {!isOverview && (
            //Render the timestamp only when a user is in the stats detailed component
            <TimeStamp>Last calculated on 17th January, 2021</TimeStamp>
          )}
        </LowerRow>
      </InnerRow>
    </MainWrap>
  );
};

export default StatsContainer;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${background};
`;

const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 0 10%;
  margin: ${({ isOverview }) => (isOverview ? "41px 0" : "11px 0")};
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 37px;
  justify-content: flex-start;
  font-size: 54px;
  color: ${text};
`;

const LowerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isOverview }) =>
    isOverview ? "flex-start" : "space-between"};
`;

const MiddleRow = styled.div`
  height: 100%;
  width: 100%;
`;

const TimeStamp = styled.div`
  font-size: 18px;
  margin-top: 37px;
  color: ${Palette.text};
  height: auto;
`;

const BackIconDiv = styled.div`
  margin-top: 37px;
  cursor: pointer;
`;
