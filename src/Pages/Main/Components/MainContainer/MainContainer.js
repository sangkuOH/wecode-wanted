import React from "react";
import styled from "styled-components";
import MainSlider from "../MainSlider/MainSlider";
import MainProfile from "../MainProfile/MainProfile";
import MainPosition from "../MainPosition/MainPosition";

function MainContainer() {
  return (
    <>
      <MainSection>
        <MainSlider />
        <MainProfile />
        <MainPosition />
      </MainSection>
    </>
  );
}

const MainSection = styled.div`
  margin-top: 50px;
  background: #fff;
  width: 100%;
`;

export default MainContainer;
