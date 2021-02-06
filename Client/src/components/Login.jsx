import React, { useState } from "react";
import styled from "styled-components";
import axios from "../Axios/baseUrl";
import { Palette } from "../constants/Palette";
import { LmuBoltSvg, backOSvg } from "../constants/SVGs";
import { useForm } from "react-hook-form";
import Loading from "./Loader/Loading.jsx";
import {
  emailValidation,
  passValidation,
} from "../constants/ValidationObjects";

const { primary, text, card, background, placeholder } = Palette;

const boltStyles = { width: "20px", height: "25px", fill: "#58c2b1" };

const backStyles = { fill: `${text}`, width: "27px" };

const Login = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const loginUser = async (userData) => {
    //POST request to the API to Log in  a new user
    try {
      setIsLoading(true);
      const res = await axios.post("api/login", userData, {
        withCredentials: true,
      });
      if (res.status === 200) {
        console.log(res.data);
        // history.push("/dash");
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const onSubmit = (data) => loginUser(data);

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
                <UnderLineInput
                  type="password"
                  name="password"
                  ref={register(passValidation)}
                  placeholder="Password"
                  autoComplete="on"
                />
                {errors.password && (
                  <ErrorMsg>{errors.password.message}</ErrorMsg>
                )}
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
  height: ${({ errors }) => {
    return Object.keys(errors).length === 1
      ? "465px"
      : Object.keys(errors).length === 2
      ? "490px"
      : "450px";
  }};
  background: ${card};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 16%);
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
`;

const CardHeading = styled.div`
  display: flex;
  justify-content: flex-start;
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
