import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Palette } from "../../constants/Palette.jsx";
import axios from "../../Axios/baseUrl";
import {
  nameValidation,
  passValidation,
  emailValidation,
} from "../../constants/ValidationObjects";
import { Redirect } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { LmuBoltSvg, backOSvg } from "../../constants/SVGs.jsx";
import Loading from "../../components/Loader/Loading.jsx";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/authContext.jsx";

const { primary, text, card, background, placeholder } = Palette;

const boltStyles = { width: "20px", height: "25px", fill: "#58c2b1" };

const backStyles = { fill: `${text}`, width: "27px" };

const Signup = ({ history }) => {
  const [randomQuote, setRandomQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [ErrorTxt, setErrorTxt] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const { checkAuthentication, isAuthenticated } = useContext(AuthContext);

  //Fetch Quote on Mount
  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    //GET request to the API to fetch a random quote
    setIsLoading(true);
    const quote = await axios.get("api/quote/");
    setRandomQuote(quote.data[0]);
    setIsLoading(false);
  };

  const createUser = async (userData) => {
    //POST request to the API to sign up a new user
    try {
      setIsLoading(true);
      const res = await axios.post("api/signup", userData);
      if (res.status === 201) {
        await checkAuthentication();
        history.push("/dash");
      }
    } catch (err) {
      setIsLoading(false);
      const {
        response: {
          data: { errors },
        },
      } = err;
      setErrorTxt(errors.email);
      setTimeout(() => {
        setErrorTxt("");
      }, 5000);
    }
  };

  const onSubmit = (data) => createUser(data);

  if (isAuthenticated) {
    return <Redirect to="/dash" />;
  }

  return (
    <MainWrap>
      {!isLoading ? (
        <InnerRow>
          <LeftSide>
            <Card errors={errors}>
              <SignupForm onSubmit={handleSubmit(onSubmit)}>
                <Heading>Signup</Heading>
                <UnderLineInput
                  type="text"
                  ref={register(nameValidation)}
                  name="name"
                  placeholder="Your Name"
                  autoComplete="none"
                />
                {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                <UnderLineInput
                  type="text"
                  ref={register(emailValidation)}
                  name="email"
                  placeholder="Your Email"
                  autoComplete="none"
                />
                {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                {ErrorTxt && <ErrorMsg>{ErrorTxt}</ErrorMsg>}
                <PassRow>
                  <UnderLineInput
                    type={isPassShown ? "text" : "password"}
                    ref={register(passValidation)}
                    name="password"
                    placeholder="Password"
                    autoComplete="on"
                  />
                  <PassIconDiv
                    onClick={() => setIsPassShown((prevState) => !prevState)}
                    top={isPassShown ? "calc(30% + 1px)" : "30%"}
                  >
                    {isPassShown ? (
                      <VscEyeClosed color={placeholder} size="14" />
                    ) : (
                      <VscEye color={placeholder} size="14" />
                    )}
                  </PassIconDiv>
                </PassRow>
                {errors.password && (
                  <ErrorMsg>{errors.password.message}</ErrorMsg>
                )}
                <SignupButton>
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
      ) : (
        <Loading />
      )}
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

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: 600px) {
    width: 100%;
  }
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
  height: auto;
  padding: 32px;
  background: ${card};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);

  @media (max-width: 1024px) {
    width: 370px;
  }

  @media (max-width: 500px) {
    width: 75%;
  }
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

  @media (max-width: 1024px) {
    width: 370px;
    margin-bottom: 28px;
  }
`;

const Quote = styled.div`
  box-sizing: border-box;
  font-size: 30px;
  margin-top: calc(4em - 15px);
  color: ${text};
  font-style: italic;

  @media (max-width: 1024px) {
    margin-bottom: 18px;
    font-size: 22px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const AuthorName = styled(Quote)`
  display: flex;
  font-style: normal;
  justify-content: flex-end;
  margin: 0;
  margin-right: 4em;
  color: ${primary};

  @media (max-width: 1024px) {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
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

  @media (max-width: 1024px) {
    margin-top: 1em;
    font-size: 18px;
  }
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

  @media (max-width: 1024px) {
    font-size: 22px;
    margin: 0px 0px 34px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
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
  margin: 25px 0;
  color: ${text};
  outline: 0;
  transition: 300ms;

  :focus {
    border-bottom: 2px solid ${primary};
  }

  ::placeholder {
    color: ${placeholder};
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    width: 229px;
    margin: 26px 0;
  }
`;

const ErrorMsg = styled.div`
  box-sizing: border-box;
  width: 249px;
  font-size: 12px;
  color: #df3d3d;
`;

const PassRow = styled.div`
  position: relative;
`;

const PassIconDiv = styled.div`
  position: absolute;
  cursor: pointer;
  top: ${({ top }) => top};
  right: 5%;

  @media (max-width: 1024px) {
    right: 12%;
  }
`;
