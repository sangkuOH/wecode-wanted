import React from "react";
import styled from "styled-components";
import SlideOff from "./SlideSvg";
const CareerModal = (props) => {
  const careerMap = Array(9)
    .fill(1)
    .map((x, y) => x + y);

  return (
    <CareerWrapper display={props.display}>
      <CareeBackDrop onClick={props.careerHandler} />
      <CareeModalBox>
        <MainHeder>
          <div>경력</div>
          <ColoseBtn onClick={props.careerHandler}>
            {SlideOff.SlideOff}
          </ColoseBtn>
        </MainHeder>
        <CareerSelectBox>
          <CareerSelect>
            <option>전체</option>
            {careerMap.map((el) => (
              <option value={el}> {el}년</option>
            ))}
            <option>10년이상</option>
          </CareerSelect>
        </CareerSelectBox>
        <FooterBox>
          <button>확인</button>
        </FooterBox>
      </CareeModalBox>
    </CareerWrapper>
  );
};

const CareerWrapper = styled.div`
  ${(props) => (props.display ? "" : "display: none;")}
  border: 1px soild red;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const CareeBackDrop = styled.div`
  position: relative;
  height: 100vh;
  z-index: 100;
`;

const CareeModalBox = styled.div`
  position: fixed;
  top: 30%;
  left: 0;
  right: 0;
  width: 360px;
  height: 320px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  border: none;
  z-index: 120;
`;

const MainHeder = styled.div`
  display: flex;
  justify-content: space-between;
  height: 44px;
  line-height: 44px;
  margin-right: 10px;
  div {
    display: flex;
    justify-content: center;
    width: 280px;
    margin-left: 35px;
    height: 44px;
    align-items: right;
    line-height: 44px;
  }
`;

const CareerSelectBox = styled.div`
  margin: 0 auto;
  margin-top: 20%;
  width: 310px;
  height: 50px;
`;

const CareerSelect = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  padding: 0 15px;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 15px;
  font-weight: 400;
  outline: none;

  button {
    width: 100%;
    height: 50px;
    background-color: #36f;
    color: #fff;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: normal;
    text-align: center;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    &:hover {
      color: #e1e2e3;
    }
  }
`;

const ColoseBtn = styled.button`
  width: 40px;
  height: 40px;
  outline: none;
  background: #fff;
  border: none;
  cursor: pointer;
`;

const FooterBox = styled.div`
  width: 320px;
  height: 156px;
  padding: 86px 0 0 0;
  button {
    font-size: 16px;
    width: 330px;
    height: 50px;
    border-radius: 30px;
    color: #fff;
    background-color: #36f;
    border: none;
    margin-left: 13px;
  }
`;

export default CareerModal;
