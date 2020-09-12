import React, { useEffect } from "react";

import styled from "styled-components";

const DetailProps = ({
  img,
  company,
  city,
  tags,
  intro,
  data,
  duty,
  expiry_date,
  location,
  country,
  company_field,
  qualification,
  longitude,
  latitude,
  preference,
  benefit,
}) => {
  const propsList = [duty, qualification, preference, benefit];

  return (
    <>
      <MainImg>
        <img src={img} />
      </MainImg>
      <Section>
        <Company>{company}</Company>
        <SubTitle>
          <City>{city}.</City>
          <Country> {country} </Country>
        </SubTitle>
        {tags && tags.map((tag) => <Tags>{tag}</Tags>)}
      </Section>
      <Intro dangerouslySetInnerHTML={{ __html: intro }} />
      {propsList.map((data) => (
        <Unification dangerouslySetInnerHTML={{ __html: data }} />
      ))}
      <div>
        <ExpiryDate>
          <span>마감일</span> {expiry_date}
        </ExpiryDate>
        <Location>
          <span>근무지역</span> {location}
        </Location>
      </div>
      <LocationImg />
      {latitude}
      <FollowBox>
        <CompanField>
          <CompanAlign>
            <div>
              <img src="http://digitalmoney.kr/Files/5/News/202002/1884_20200225102706975.JPG" />
            </div>
            <div>
              <h6>전문기술</h6>
              {company_field}
            </div>
          </CompanAlign>
        </CompanField>
        {longitude}
        <FollowBtn>팔로워</FollowBtn>
      </FollowBox>
      <FooterHeader>
        <h5>마상원티드님, 이 포지션을 찾고 계셨나요? </h5>
      </FooterHeader>
    </>
  );
};

export default DetailProps;

const Unification = styled.div`
  text-decoration: none;
  margin-bottom: 40px;
  padding-right: 20px;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 1.75;
`;

const Intro = styled.div`
  margin-bottom: 80px;
  padding-right: 20px;
  font-size: 16px;
  color: #333;
  font-weight: 400;
  line-height: 1.75;
  text-decoration: none;
`;

const LocationImg = styled.div`
  margin-top: 20px;
  background-image: url("https://maps.googleapis.com/maps/api/staticmap?language=ko&size=700x254&markers=color:red|37.4922431,126.9912597&key=AIzaSyAbIGoF6i1GH3KuDoT0yvQUNO7xGDkHSGM&zoom=14&scale=2");
  display: block;
  width: 100%;
  padding-bottom: 40%;
  background-color: #fbfbfb;
  background-size: cover;
  background-position: 50%;
`;

const ExpiryDate = styled.div`
  margin: 30px 0 20px 0;
  font-size: 16px;
  color: black;
  width: 100%;
  span {
    margin-right: 30px;
    color: #999;
  }
`;

const Location = styled.div`
  color: #333;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  vertical-align: text-top;
  span {
    margin-right: 11px;
    color: #999;
    margin-bottom: 30px;
  }
`;

const CompanField = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  display: inline-block;
  font-size: 14px;
  text-align: left;
  color: #9999;

  img {
    width: 60px;
    height: 50px;
  }
`;

const CompanAlign = styled.div`
  display: flex;
  line-height: 24px;
`;

const FollowBtn = styled.button`
  width: 96.34px;
  height: 40px;
  line-height: 14px;
  font-size: 14px;
  background: #258bf7;
  border: none;
  color: #ffff;
  font-weight: 600;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  border-radius: 3px;
`;

const FollowBox = styled.div`
  display: flex;
  justify-content:space-between;
  width:660px;
  margin-top: 80px;
  border-radius: 3px;
  padding: 20px;
  border:1px solid rgb(225, 226, 227);
`;

const Section = styled.section`
  margin: 30px 0 60px 0;
  width: 660px;
  height: 120px;
`;

const Tags = styled.button`
  width: 122px;
  height: 30px;
  margin: 10px 5px 5px 0;
  border: none;
  background-color: #f3f5f8;
  border-radius: 30px;
  outline: 0;
  cursor: pointer;
`;

const City = styled.div`
  font-size: 14px;
  width: 30px;
  height: 15px;
  color: #9999;
`;

const Country = styled.div`
  font-size: 14px;
  width: 50px;
  height: 15px;
  color: #9999;
`;

const SubTitle = styled.div`
  display: flex;
  width: 700px;
  height: 24px;
`;

const Company = styled.div`
  margin: 15px;
  width: 660px;
  height: 24px;
  margin: 0 0 10px;
  font-size: 24px;
`;

const MainImg = styled.div`
  width: 660px;
  height: 480px;

  img {
    width: 408x;
    height: 480px;
  }
`;

const FooterHeader = styled.div`
  position: relative;
  top: 40px;
  height: 30px;
  h5 {
    width: 100%;
    height: 30px;
    font-size: 20px;
  }
`;
