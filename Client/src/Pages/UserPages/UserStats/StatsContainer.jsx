import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "../../../Axios/baseUrl";
import { Palette } from "../../../constants/Palette.jsx";
import { backOSvg } from "../../../constants/SVGs.jsx";
import StatsOverview from "./StatsComponents/StatsOverview.jsx";
import StatsDetailed from "./StatsComponents/StatsDetailed.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Auxillary from "../../../components/HOC/Auxillary.jsx";
import Loading from "../../../components/Loader/Loading.jsx";
import { UserDataContext } from "../../../contexts/UserDataContext.jsx";

const { text, background } = Palette;
const backStyles = { fill: `${text}`, width: "27px", cursor: "pointer" };

const StatsContainer = ({ history }) => {
  const [isOverview, setIsOverview] = useState(true);
  const [cardGridData, setCardGridData] = useState([]);
  const [isCardInfoShown, setIsCardInfoShown] = useState(false);
  const [cardData, setCardData] = useState({});
  const [userStats, setUserStats] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [updatedOn, setUpdatedOn] = useState("");

  const { convertHeight } = useContext(UserDataContext);

  useEffect(() => {
    //Fetch data on mount
    fetchData();
  }, []);

  const fetchData = async () => {
    //Async function to fetch the card data from the db (Not a user's stats)
    try {
      setIsFetching(true);
      const res = await axios.get("api/cards/");
      const { cards } = res.data;

      const response = await axios.get("/api/user/stats");
      const {
        data: { stats },
      } = response;

      console.log(stats);

      const {
        createdAt,
        updatedAt,
        user,
        __v,
        _id,
        height,
        weight,
        bmi,
        heightUnit,
        weightUnit,
        ...advStats
      } = stats;

      const cardsTemp = [...cards].sort((a, b) =>
        a.label.localeCompare(b.label)
      );

      const sortedStats = Object.entries(advStats).sort();
      console.log(sortedStats);

      let finalStructure = [];

      finalStructure = cardsTemp.map((card, index) => ({
        ...card,
        value: sortedStats[index][1],
      }));

      setCardGridData(finalStructure);
      stats.heightUnit = heightUnit;
      setUserStats(stats);
      setUpdatedOn(updatedAt);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
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

  const handleStatUnits = (name) => {
    //Function to determine whether to add 'Kcal', 'g' or nothing after the current stat.
    let unit = "";

    switch (name) {
      case "Current Goal":
        unit = "";
        break;
      case "Carbs target":
      case "Protein target":
      case "Fats target":
        unit = "g";
        break;
      default:
        unit = "kcal";
    }
    return unit;
  };

  return (
    <MainWrap>
      {!isFetching ? (
        <Auxillary>
          <Navbar />
          <InnerRow isOverview={isOverview}>
            <Heading>My Stats</Heading>
            <MiddleRow>
              {isOverview ? (
                //Conditionally rendering either the stats overview or the  detailed stats component
                <StatsOverview
                  handleForwardClick={handleForwardClick}
                  userStats={userStats}
                  convertHeight={convertHeight}
                />
              ) : (
                <StatsDetailed
                  cardGridData={cardGridData}
                  handleIClick={handleIClick}
                  isCardInfoShown={isCardInfoShown}
                  setIsCardInfoShown={setIsCardInfoShown}
                  cardData={cardData}
                  handleStatUnits={handleStatUnits}
                />
              )}
            </MiddleRow>
            <LowerRow isOverview={isOverview}>
              <BackIconDiv onClick={handleBackClick}>
                {backOSvg(backStyles)}
              </BackIconDiv>
              {!isOverview && (
                //Render the timestamp only when a user is in the stats detailed component
                <TimeStamp>{`Last calculated on ${updatedOn}`}</TimeStamp>
              )}
            </LowerRow>
          </InnerRow>
        </Auxillary>
      ) : (
        <Loading />
      )}
    </MainWrap>
  );
};

export default StatsContainer;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  /* height: 100vh; */
  height: 100%;
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

  @media (max-width: 1024px) {
    justify-content: center;
    margin-bottom: 28px;
    font-size: 32px;
  }
`;

const LowerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ isOverview }) =>
    isOverview ? "flex-start" : "space-between"};

  @media (max-width: 744px) {
    justify-content: center;
  }
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

  @media (max-width: 744px) {
    display: none;
  }
`;

const BackIconDiv = styled.div`
  margin-top: 37px;
  cursor: pointer;

  /* @media (max-width: 744px) {
    margin-top: 0;
  } */
`;
