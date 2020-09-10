import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import mixin from "../../../Styles/Mixin";

function JobCardList({ el }) {
  const [heartAndNumber, setHeartAndNumber] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setHeartAndNumber(!heartAndNumber);
  };

  return (
    <JobCardLists>
      <Link to={`/detail/${el.id}`}>
        <Cardheader imgUrl={el.img}>
          <ButtonTop type="button" onClick={handleClick}>
            <FavoriteIcon
              style={{
                marginRight: "5px",
                color: `${heartAndNumber ? "#ff415c" : "hsla(0,0%,100%,.3)"}`,
                fontSize: "15px",
              }}
            />
            {heartAndNumber ? el.likes + 1 : el.likes}
          </ButtonTop>
          <ButtonBottom type="button">
            <span>AI 분석</span>
          </ButtonBottom>
          <AiText>
            프로필 이력서를 400자 이상 작성하면, AI가 이력서를 분석하여 서류
            통과 확률을 알려줍니다.
            <ArrowLeftIcon
              style={{
                position: "absolute",
                left: "10px",
                bottom: "-22px",
                fontSize: "38px",
                color: "#000",
                transform: "rotate(-90deg)",
              }}
            />
          </AiText>
        </Cardheader>
        <Contents>
          <Position>{el.title}</Position>
          <CompanyName>{el.company}</CompanyName>
          <CompanyLocation>
            {el.city}
            <span>.</span>
            {el.country}
          </CompanyLocation>
          <Reward>채용보상금 1,000,000원</Reward>
        </Contents>
      </Link>
    </JobCardLists>
  );
}

const JobCardLists = styled.li`
  display: inline-block;
  width: 25%;
  padding: 10px;
  vertical-align: top;

  a {
    display: block;
  }
`;

const Contents = styled.div`
  padding: 14px 10px;
`;

const Position = styled.div`
  position: relative;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  max-height: 2.4em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const CompanyName = styled.div`
  color: #333;
  font-weight: 600;
  margin-top: 4px;
  font-size: 14px;
  line-height: 1.6;
`;

const CompanyLocation = styled.div`
  line-height: 1.6;
  margin-top: 6px;
  color: #999;

  span {
    position: relative;
    top: -4px;
    margin: 0 3px;
  }
`;

const Reward = styled.div`
  margin-top: 6px;
  color: #666;
  font-size: 13px;
`;

const ButtonTop = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 0;
  font-size: 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  cursor: pointer;
  border: 0;

  &:focus {
    outline: none;
  }
`;

const AiText = styled.div`
  display: none;
  position: absolute;
  bottom: 50px;
  left: 10px;
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.2px;
  text-align: left;
  color: #fff;
  border-radius: 3px;
  background-color: #000;
`;

const ButtonBottom = styled.button`
  position: absolute;
  left: 10px;
  bottom: 10px;
  ${mixin.flex("column", "center", "center")};
  padding: 0 7px;
  width: auto;
  height: 30px;
  border: 0;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 12px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    margin-top: 2px;
    pointer-events: none;
  }
`;

const Cardheader = styled.div`
  background-image: url(${(props) => props.imgUrl});
  padding-bottom: 75%;
  position: relative;
  background-size: cover;
  background-position: 50%;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);

  ${ButtonBottom}:hover+ ${AiText} {
    display: block;
  }
`;

export default JobCardList;
