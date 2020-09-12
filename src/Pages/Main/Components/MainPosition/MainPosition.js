import React from "react";
import styled from "styled-components";
import RecommendText from "../RecoAndPositionTitle/RecoAndPositionTitle";
import JobCard from "../../../../Components/JobCard/JobCard";

function MainPosition() {
  return (
    <>
    <PositionContainer>
      <JobCardTitle>
        <RecommendText contens="나에게 딱 맞는 포지션" />
        <ViewMore href="#">더 보기</ViewMore>
      </JobCardTitle>
    </PositionContainer>
    <JobCard />
    </>
  );
}

const PositionContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1060px;
`;

const JobCardTitle = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const ViewMore = styled.a`
  position: absolute;
  right: 0;
  top: 4px;
  color: #999;
  font-size: 20px;
`;

export default MainPosition;
