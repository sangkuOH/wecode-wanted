import React, { useState } from "react";
import FilterModal from "./FilterModal";
import CareerModal from "./CareerModal";
import styled from "styled-components";
import SlideOff from "./SlideSvg";

const SildeFliter = () => {
  const [display, setDisplay] = useState(false);
  const [careerModalDp, setCareerModalDp] = useState(false);
  const modalHandler = () => {
    setDisplay(!display);
  };

  const careerHandler = () => {
    setCareerModalDp(!careerModalDp);
  };

  return (
    <>
      <FilterContainer>
        <FilterBox>
          <SildeFilterBtn onClick={modalHandler}>
            <CategoryFirEl>지역</CategoryFirEl>
            <CategorySecEl>전세계</CategorySecEl>
          </SildeFilterBtn>
          <modalHandler>
            <SildeFilterBtn onClick={careerHandler}>
              <CategoryFirEl>경력</CategoryFirEl>
              <CategorySecEl>전체</CategorySecEl>
            </SildeFilterBtn>
          </modalHandler>
        </FilterBox>
        <FilterSelect>
          <option>최신순</option>
          <option>보상금</option>
          <option>인기순</option>
          <option>응답률순</option>
        </FilterSelect>
      </FilterContainer>
      <BookMark>
        <CategoryFirEl></CategoryFirEl>
        <BookMarkWrapper>
          {SlideOff.BookMark}
          <span>북마크 모아보기 ></span>
        </BookMarkWrapper>
      </BookMark>
      <FilterModal modalHandler={modalHandler} display={display}>
        <ModalHeader>
          <ResetButton>초기화</ResetButton>
          <div>
            <ModalLocation>
              지역
              <span>1</span>
            </ModalLocation>
          </div>
          <ColoseBtn onClick={modalHandler}>{SlideOff.SlideOff}</ColoseBtn>
        </ModalHeader>
        <ModalBody>
          <ModalBodyHeader>국가</ModalBodyHeader>
          <SelectBox>
            <option>전세계</option>
            <option>대만</option>
            <option>싱가폴</option>
            <option>일본</option>
            <option>한국</option>
            <option>홍콩</option>
            <option>기타</option>
          </SelectBox>
        </ModalBody>
        <ConfirmBtn>
          <button>확인</button>
        </ConfirmBtn>
      </FilterModal>
      <CareerModal careerHandler={careerHandler} display={careerModalDp} />
    </>
  );
};

const FilterContainer = styled.div`
  display: flex;
  width: 1060px;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 30px;
`;

const FilterBox = styled.div`
  width: 1060px;
  height: 42px;
  margin: 0 auto;
`;
const SildeFilterBtn = styled.button`
  position: relative;
  width: 120px;
  height: 40px;
  margin-right: 10px;
  padding: 0 25px 0 15px;
  font-size: 12px;
  border: 1px solid rgb(236, 236, 236);
  border-radius: 3px;
  background-color: white;
  outline: 0;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 40%;
    right: 16px;
    border-top: 6px solid #333;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;

const FilterSelect = styled.select`
  width: 114px;
  align-items: center;
  border: 1px solid #ececec;
  border-radius: 4px;
  outline: none;
`;

const CategoryFirEl = styled.span`
  margin-right: 3px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

const CategorySecEl = styled.span`
  font-size: 14px;
  color: #36f;
  margin-right: 10px;
  font-weight: 600;
`;
const BookMarkWrapper = styled.span`
  font-size: 14px;
  color: #36f;
  margin-right: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const BookMark = styled.div`
  width: 1060px;
  height: 44px;
  margin-top: 15px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  top: 0;
  margin: 0 10px 0 10px;
  background: #fff;
  width: 480px;
  height: 80px;
  font-size: 16px;
  border-bottom: none;
  line-height: 3;
  border-radius: 10px;
`;
const ModalLocation = styled.span`
  color: #333;
  span {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-left: 7px;
    top: -2px;
    background-color: #36f;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    z-index: 1;
    text-align: center;
  }
`;

const ResetButton = styled.button`
  width: 83px;
  height: 23px;
  outline: none;
  background-color: #fff;
  border: none;
  cursor: pointer;
  color: #999;
  background-image: url("https://cdn3.iconfinder.com/data/icons/game-3-fill/512/refresh-512.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  transform: translate(6px, 10px);
  resize: both;
`;

const ColoseBtn = styled.button`
  width: 55px;
  height: 50px;
  outline: none;
  background: #fff;
  border: none;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ModalBodyHeader = styled.div`
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: 400;
  color: #999;
`;

const SelectBox = styled.select`
  width: 460px;
  height: 40px;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px solid #ececec;
  outline: none;
  &::before {
    content: "";
    top: 50%;
    right: 20px;
    width: 0;
    height: 0;
    position: absolute;
    z-index: 1002;
    border-top: 6px solid #333;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const ConfirmBtn = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  padding: 18px 20px;
  background: #fff;
  border-top: 1px solid #ececec;
  button {
    width: 100%;
    height: 50px;
    padding: 0;
    background-color: #36f;
    color: #fff;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: normal;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
export default SildeFliter;
