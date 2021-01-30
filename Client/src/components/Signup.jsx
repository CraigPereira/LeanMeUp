import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Palette } from "../constants/Palette";
import axios from "../Axios/baseUrl";
import { LmuBoltSvg, backOSvg } from "../constants/SVGs";

const { primary, text, card, background, placeholder } = Palette;

const boltStyles = { width: "20px", height: "25px", fill: "#58c2b1" };

const backStyles = { fill: `${text}`, width: "27px" };

const Signup = ({ history }) => {
  const [randomQuote, setRandomQuote] = useState({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Fetch Quote on Mount
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    //GET request to the API to fetch a random quote
    const quote = await axios.get("api/quote/");
    setRandomQuote(quote.data[0]);
  };

  const createUser = async (userData) => {
    //POST request to the API to sign up a new user
    try {
      const res = await axios.post("api/signup", userData);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail && userPassword === confirmPassword) {
      const userData = {
        name: userName,
        email: userEmail,
        password: userPassword,
      };
      createUser(userData);
    }
  };

  return (
    <MainWrap>
      <InnerRow>
        <LeftSide>
          <Card>
            <SignupForm onSubmit={handleSubmit}>
              <Heading>Signup</Heading>
              <UnderLineInput
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="name"
                placeholder="Your Name"
                autoComplete="none"
                required
              />
              <UnderLineInput
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                name="email"
                placeholder="Your Email"
                autoComplete="none"
                required
              />
              <UnderLineInput
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Password"
                autoComplete="none"
                required
              />
              <UnderLineInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="on"
                required
              />
              <SignupButton onClick={handleSubmit}>
                <BoltWrap>{LmuBoltSvg(boltStyles)}</BoltWrap>
                Signup
              </SignupButton>
              <BackIconDiv onClick={() => history.push("/")}>
                {backOSvg(backStyles)}
              </BackIconDiv>
            </SignupForm>
          </Card>
        </LeftSide>
        <RightSide>
          <QuoteWrap>
            <Quote>"{randomQuote.quote}"</Quote>
            <AuthorName>- {randomQuote.author}</AuthorName>
          </QuoteWrap>
        </RightSide>
      </InnerRow>
    </MainWrap>
  );
};

export default Signup;

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${background};
`;

const InnerRow = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100vw;
  height: 800px;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

const RightSide = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
`;

const Card = styled.div`
  box-sizing: border-box;
  width: 401px;
  height: 613px;
  background: ${card};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const QuoteWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Quote = styled.div`
  box-sizing: border-box;
  font-size: 30px;
  margin-top: calc(4em - 15px);
  color: ${text};
  font-style: italic;
`;

const AuthorName = styled(Quote)`
  display: flex;
  font-style: normal;
  justify-content: flex-end;
  margin: 0;
  margin-right: 4em;
  color: ${primary};
`;

const SignupButton = styled.button`
  position: relative;
  margin-top: 2em;
  font-size: 21px;
  color: ${text};
  border: 2px solid ${primary};
  border-radius: 23px;
  background: none;
  outline: none;
  padding: 11px 90px;
  cursor: pointer;
`;

const BoltWrap = styled.div`
  position: absolute;
  left: 3em;
`;

const BackIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  cursor: pointer;
`;

const Heading = styled.div`
  font-size: 26px;
  color: ${text};
  margin: 40px 0;
`;

const UnderLineInput = styled.input`
  /* -moz-appearance: textfield; */
  box-sizing: border-box;
  font-size: 16px;
  background: none;
  border: none;
  padding-bottom: 3px;
  width: 249px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  margin: 30px 0;
  color: ${text};
  outline: 0;
  transition: 300ms;

  :focus {
    border-bottom: 2px solid ${primary};
  }

  ::placeholder {
    color: ${placeholder};
  }
`;
