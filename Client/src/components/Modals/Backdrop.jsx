import React from "react";
import styled from "styled-components";

const Backdrop = ({ backdropClicked }) => (
  <StyledBackDrop onClick={backdropClicked}></StyledBackDrop>
);

export default Backdrop;

const StyledBackDrop = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;
