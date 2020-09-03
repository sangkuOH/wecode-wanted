import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SliderBtn from "../SliderBtn/SliderBtn";
import SliderItem from "../SliderItem/SliderItem";

function MainSlider() {
  const [curIndex, setCurIndex] = useState(1);
  const [slideSpeed, setSlideSpeed] = useState(900);
  const [slideLength, setSlideLength] = useState(5);

  const slideNext = () => {
    if (curIndex <= slideLength - 1) {
      setCurIndex(curIndex + 1);
    }
    if (curIndex === slideLength - 2) {
      setTimeout(() => {
        setSlideSpeed(0);
        setCurIndex(1);
      }, 900);
    }
    setSlideSpeed(900);
  };

  const slidePrev = () => {
    if (curIndex >= 1) {
      setCurIndex(curIndex - 1);
    }
    if (curIndex === 0) {
      setTimeout(() => {
        setSlideSpeed(0);
        setCurIndex(slideLength - 2);
      }, 900);
    }
    setSlideSpeed(900);
  };

  return (
    <SliderContainer>
      <SliderView>
        <SliderBtn arrow="prev" onClick={slidePrev} />
        <SliderItem
          slideLength={slideLength}
          slideSpeed={slideSpeed}
          curIndex={curIndex}
        />
        <SliderBtn arrow="next" onClick={slideNext} />
      </SliderView>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  height: 300px;
  background: #f2f2f2;
`;

const SliderView = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export default MainSlider;
