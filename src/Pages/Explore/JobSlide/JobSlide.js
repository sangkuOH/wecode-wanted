import React, { useState, useEffect } from "react";
import SlideItem from "./SlideItem";
import SlideFliter from "../JobSlide/SlideFliter/SlideFliter";
import JobCard from "./../../../Components/JobCard/JobCard";
import { config } from "./config";
import styled from "styled-components";

const JobSlide = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://192.168.0.23:8000/companies")
      .then((res) => res.json())
      .then((res) => setDatas(res["category_list"]));
  }, []);

  useEffect(() => {}, [datas]);

  const [appearCard, setAppear] = useState(0);
  const moveValue = appearCard * 100;
  const slideResult = Math.floor((datas.length - 1) / 10);

  return (
    <JobSlides>
      <MainText>전체</MainText>
      <JobSlideBox>
        <JobSlideUl>
          <SlideAlign moveValue={moveValue}>
            {datas &&
              datas.map((el, idx) => (
                <SlideItem key={idx} img={el.image} name={el.name} />
              ))}
          </SlideAlign>
          {appearCard !== 0 && (
            <PrevBtn onClick={() => setAppear(appearCard - 1)} />
          )}
          {appearCard < slideResult && (
            <NextBtn onClick={() => setAppear(appearCard + 1)} />
          )}
        </JobSlideUl>
      </JobSlideBox>
      <SlideFliter />
      <JobCard />
    </JobSlides>
  );
};

const JobSlides = styled.div`
  width: 1060px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0 15px 0;
`;

const JobSlideBox = styled.div`
  height: 100px;
  border-bottom: 1px solid rgb(224, 226, 227);s
`;

const MainText = styled.div`
  width: 100%;
  height: 100%;
`;
const JobSlideUl = styled.ul`
  position: relative;
  width: 100%;
  height: 78px;
  padding-top: 20px;
  margin: 0 auto;
  overflow: hidden;
`;

const SlideAlign = styled.li`
  display: flex;
  justify-content: start;
  height: 100%;
  transform: ${(props) => `translateX(-${props.moveValue}%)`};
  transition: transform 300ms;
`;

const PrevBtn = styled.button`
  position: absolute;
  width: 135px;
  height: 61px;
  top: 16%;
  left: -50px;
  cursor: pointer;
  border: 0;
  outline: 0;
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/wanted-public/category_gradation_r_white2.png);
  background-size: 100%;
  background-color: transparent;
  z-index: 3;
  transform: rotate(180deg);
  overflow: hidden;

  &::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-top: 2px solid rgb(181, 181, 181);
    border-left: 2px solid rgb(181, 181, 181);
    background-size: 110%;
    transform: rotate(135deg);
  }
`;

const NextBtn = styled.button`
  position: absolute;
  width: 135px;
  height: 61px;
  top: 16%;
  right: -48px;
  cursor: pointer;
  border: 0;
  outline: 0;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/category_gradation_r_white2.png");
  background-size: 100%;
  background-color: transparent;

  ::before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border-top: 2px solid rgb(181, 181, 181);
    border-left: 2px solid rgb(181, 181, 181);
    transform: rotate(135deg);
  }
`;

export default JobSlide;
