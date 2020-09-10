import React from "react";
import { useState, useEffect } from "react";
import DetailSupport from "./DetailSupport/DetailSupport";
import styled from "styled-components";
import Svg from "../DetailPage/DetailPageSvg";

const DetailPageSub = () => {
  const [changePage, setCompoChange] = useState(false);
  const [data, setData] = useState({});

  const handleComponentChange = () => {
    setCompoChange(!changePage);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // fetch("/data/data.json");
    fetch("http://3.131.35.195:8000/user/application",{
    headers: {
      Authorization: token
    }})
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <DetailPageSubBox>
        <CompensationMoney>채용보상금</CompensationMoney>
        <ShareBtn>{Svg.ShaerIcon}</ShareBtn>
        <ContentBox>
          <RecommendedPerson>추천인</RecommendedPerson>
          <Person>지원자</Person>
        </ContentBox>
        <ContentBox>
          <Money>500,000</Money>
          <Money>500,000</Money>
        </ContentBox>
        <BookMarkBox>
          <BookMarkBtn>{Svg.BookMarkIcon}북마크하기</BookMarkBtn>
          <SupportkBtn
            {...data}
            onClick={() => {
              handleComponentChange();
            }}
          >
            지원하기
          </SupportkBtn>
        </BookMarkBox>
        <SubBoxFooter>
          <LikeBtn>5</LikeBtn>
        </SubBoxFooter>
        {changePage && (
          <DetailSupport
            data={data}
            handleComponentChange={handleComponentChange}
          />
        )}
      </DetailPageSubBox>
    </>
  );
};

export default DetailPageSub;

const DetailPageSubBox = styled.div`
  top: 30px;
  position: sticky;
  width: 340px;
  height: 323px;
  left: 30px;
  border: 1px solid rgb(225, 226, 227);
`;

const SubBoxFooter = styled.div`
  width: 280px;
  height: 40px;
  margin: 20px auto;
`;

const BookMarkBox = styled.div`
  position: relative;
  width: 298px;
  height: 95px;
  margin: 50px 0 0 40px;
  align-items: center;
`;

const SupportkBtn = styled.button`
  width: 280px;
  height: 50px;
  margin-top: 10px;
  justify-content: center;
  border-radius: 30px;
  outline: none;
  background: #3366ff;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  cursor: pointer;
  border: none;
`;

const BookMarkBtn = styled.button`
  display: flex;
  justify-content: center;
  width: 280px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid gray;
  outline: none;
  background: #fff;
  align-items: center;
  color: #00cba2;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid rgb(225, 226, 227);
`;

const ContentBox = styled.div`
  position: relative;
  display: flex;
  width: 280px;
  height: 20px;
  top: 15px;
  left: 20px;
  margin: 0 auto;
  margin-bottom: 5px;
  font-size: 14px;
`;

const RecommendedPerson = styled.div`
  width: 280px;
  height: 14px;
  margin-top: 5px;
  left: 10px;
  font-size: 14px;
  color: #9999;
`;

const Person = styled.div`
  width: 280px;
  height: 14px;
  margin-top: 5px;
  left: 10px;
  font-size: 14px;
  color: #9999;
`;

const Money = styled.div`
  width: 280px;
  height: 25px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
  left: 10px;
`;

const CompensationMoney = styled.div`
  position: relative;
  width: 280px;
  height: 25px;
  margin: 30px 0 0 35px;
  font-size: 15px;
  left: 10px;
`;

const ShareBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid rgb(225, 226, 227);
  background: #fff;
  outline: none;
`;

const LikeBtn = styled.button`
  position: relative;
  top: 10px;
  left: 10px;
  width: 56px;
  height: 20px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQHzY-TVQyh7sl8fdLeguBMubwD7bIIpw8dQ&usqp=CAU");
  background-repeat: no-repeat;
  background-size: 15px;
  background-position: 5px;
  background-color: #ffff;
  border-radius: 30px;
  outline: none;
  border: 1px solid rgb(225, 226, 227);
`;
