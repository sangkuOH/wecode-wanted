import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import DetailProps from "./DetailProps";
import DetailPageSub from "./DetailPageSub";
import JobCard from "../../Components/JobCard/JobCard";
import styled from "styled-components";

const DetailPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://3.131.35.195:8000/positions/${props.match.params.id}`)
    .then((res) => res.json())
    .then((res) => setData([res.detail]))
  }, []);

  return (
    <>
    <Nav />
    <DetailPageContainer>
      <DetailBox>
        <DetailPageMain>
          {data?.map((el, idx) => (
            <DetailProps {...el} key={el[idx]} img={el.img[0]} />
          ))}
        </DetailPageMain>
        <DetailPageSub />
      </DetailBox>
      <CardWrap>
      <JobCard/>
      </CardWrap>
    </DetailPageContainer>
    </>
  );
};

const DetailPageMain = styled.div`
  width: 660px;
  height: 100%;
  margin-right: 18px;
`;

const DetailPageContainer = styled.div`
  width: 1060px;
  height: 100%;
  margin: 0 auto;
  margin-top: 75px;
`;

const DetailBox = styled.div`
  display: flex;
  width: 1060px;
  height: 100%;
  margin-bottom: 40px;
  margin-top: 30px;
`;

const CardWrap = styled.div`
    margin: 0;
    margin-right: 43px;
`
export default DetailPage;
