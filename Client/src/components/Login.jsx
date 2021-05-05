import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "../Axios/baseUrl";
import { Palette } from "../constants/Palette";
import { Redirect } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { LmuBoltSvg, backOSvg } from "../constants/SVGs";
import { useForm } from "react-hook-form";
import Loading from "./Loader/Loading.jsx";
import {
  emailValidation,
  passValidation,
} from "../constants/ValidationObjects";
import { AuthContext } from "../contexts/authContext";

const { primary, text, card, background, placeholder } = Palette;

const boltStyles = { width: "20px", height: "25px", fill: "#58c2b1" };

const backStyles = { fill: `${text}`, width: "27px" };

const Login = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPassShown, setIsPassShown] = useState(false);
  const [ErrorTxt, setErrorTxt] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const { checkAuthentication, isAuthenticated } = useContext(AuthContext);

  const loginUser = async (userData) => {
    //POST request to the API to Log in  a new user
    try {
      setIsLoading(true);
      const res = await axios.post("api/login", userData);

      if (res.status === 200) {
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

      if (errors.email) setErrorTxt(errors.email);
      if (errors.password) setErrorTxt(errors.password);
      setTimeout(() => {
        setErrorTxt("");
      }, 10000);
    }
  };

  const onSubmit = (data) => loginUser(data);

  if (isAuthenticated) {
    return <Redirect to="/dash" />;
  }

  return (
    <MainWrap>
      {!isLoading ? (
        <InnerRow>
          <LeftSide>
            <Heading>Welcome Back!</Heading>
            <Card errors={errors}>
              <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <CardHeading>Login</CardHeading>
                <UnderLineInput
                  type="email"
                  name="email"
                  ref={register(emailValidation)}
                  placeholder="Your Email"
                  autoComplete="none"
                />
                {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                <PassRow>
                  <UnderLineInput
                    type={isPassShown ? "text" : "password"}
                    name="password"
                    ref={register(passValidation)}
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
                {ErrorTxt && <ErrorMsg>{ErrorTxt}</ErrorMsg>}
                <LoginButton>
                  <BoltWrap>{LmuBoltSvg(boltStyles)}</BoltWrap>
                  Login
                </LoginButton>
                <BackIconDiv onClick={() => history.push("/")}>
                  {backOSvg(backStyles)}
                </BackIconDiv>
              </LoginForm>
            </Card>
          </LeftSide>
          <RightSide></RightSide>
        </InnerRow>
      ) : (
        <Loading />
      )}
    </MainWrap>
  );
};

export default Login;

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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60%;

  @media (max-width: 1024px) {
    display: none;
  }
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Heading = styled.div`
  font-size: 63px;
  color: ${text};
  margin-bottom: 84px;

  @media (max-width: 1024px) {
    font-size: 53px;
    margin-bottom: 54px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
    margin-bottom: 34px;
  }
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 26px;
  color: ${text};
  margin: 0px 0px 40px;

  @media (max-width: 1024px) {
    font-size: 24px;
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

  @media (max-width: 1024px) {
    width: 229px;
    margin: 26px 0;
  }
`;

const LoginButton = styled.button`
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
    margin-top: 1.6em;
  }
`;

const BackIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
  cursor: pointer;
`;

const BoltWrap = styled.div`
  position: absolute;
  left: 3em;
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
    right: 6%;
  }
`;
