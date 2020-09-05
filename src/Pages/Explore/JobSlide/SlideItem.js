import React from "react";
import styled from "styled-components";

const SlideItem = (props) => {
  return (
    <SlideItems>
      <SlideImg src={props.img} />
      <SlideText>{props.name}</SlideText>
    </SlideItems>
  );
};

const SlideItems = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SlideImg = styled.img`
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 52px;
  border-radius: 5px;
  margin-right: 7px;
`;

const SlideText = styled.p`
  width: 120px;
  position: absolute;
  color: hsla(0, 0%, 100%, 0.9);
  font-size: 11px;
  font-weight: 400;
  text-align: center;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
`;
export default SlideItem;
