import React from "react";
import styled from "styled-components";
import RecommendText from "../RecoAndPositionTitle/RecoAndPositionTitle";

function MainProfile() {
  return (
    <>
      <Profile href="#">
        <h3>
          <CircleGage>
            <CircleGageNumber>60%</CircleGageNumber>
          </CircleGage>
          <p>
            프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요
          </p>
        </h3>
        <button type="button">이력서 강화하기</button>
      </Profile>
      <Recommend>
        <RecommendText contens="추천할만한 사람" />
        <RecommendBox>
          <p>간단하게 네트워크 연결하고 지인들의 추천을 받아보세요.</p>
          <RecommendBoxImg />
          <a href="#">네트워크 연결</a>
        </RecommendBox>
      </Recommend>
    </>
  );
}

const Profile = styled.a`
  position: relative;
  display: block;
  margin: 80px auto;
  max-width: 1060px;
  height: 90px;
  padding: 0 30px;
  background: #258bf7;
  border-radius: 3px;

  h3 {
    display: flex;
    position: absolute;
    top: 50%;
    align-items: center;
    padding-right: 225px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    transform: translateY(-50%);
  }

  button {
    position: absolute;
    top: 50%;
    right: 30px;
    color: #258bf7;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 40px;
    border-radius: 3px;
    background-color: #fff;
    transform: translateY(-50%);
    border: 0;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
  p {
    display: inline-block;
    line-height: 1.4;
  }
`;

const CircleGage = styled.div`
  position: relative;
  display: inline-block;
  min-width: 62px;
  height: 62px;
  margin-right: 20px;
  transform: rotate(-45deg);
  border: 4px solid #0161d1;
  border-radius: 100%;
  border-left-color: #fff;
  border-right-color: #fff;
  border-bottom-color: #fff;
`;

const CircleGageNumber = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 16px;
  transform: translate(-50%, -50%) rotate(45deg);
`;

const Recommend = styled.div`
  position: relative;
  margin: 80px auto;
  max-width: 1060px;
`;

const RecommendBox = styled.div`
  position: relative;
  padding: 0 80px;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  height: 90px;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
    border-left: 5px solid #258bf7;
  }

  p {
    position: absolute;
    left: 200px;
    top: 50%;
    transform: translateY(-50%);
    width: calc(100% - 440px);
    font-size: 18px;
    color: #333;
  }

  a {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #39f;
    color: #258bf7;
    padding: 12px 40px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1;
  }
`;

const RecommendBoxImg = styled.div`
  position: absolute;
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 40px;
  background-image: url("https://static.wanted.co.kr/images/matchup/new_network_icon.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
`;

export default MainProfile;
