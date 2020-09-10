import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ResumeListToggle from "../ResumeListClick/ResumeListClick";
import { MdMoreVert } from "react-icons/md";
import { API } from "../../config";

const ResumeList = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    ResumeListGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function ResumeListGet() {
    const token = localStorage.getItem("token");
    fetch(`${API}/cv/list`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }

  const goDetail = (value) => {
    props.history.push(`/cv/${value}`);
  };

  return (
    <>
      {data.resume?.map((el, idx) => {
        return (
          <BoxContainer>
            <BoxWrap>
              <BoxSection key={idx}>
                <HeaderWarp
                  onClick={() => {
                    goDetail(el.id);
                    props.setToggle(0);
                  }}
                >
                  <NameArea>{el.title}</NameArea>
                  <DateArea>{el.created_at.substring}</DateArea>
                </HeaderWarp>
                <TextArea>
                  <HiddenBox
                    onClick={() => {
                      goDetail(el.id);
                      props.setToggle(0);
                    }}
                  >
                    <span></span>
                  </HiddenBox>
                  <DisplayBox
                    onClick={() =>
                      props.toggle !== el.id
                        ? props.setToggle(el.id)
                        : props.setToggle(0)
                    }
                  >
                    <MdMoreVert />
                  </DisplayBox>
                </TextArea>
              </BoxSection>
            </BoxWrap>
            <ResumeListToggle
              id={el.id}
              toggle={props.toggle}
              resumeListGet={ResumeListGet}
            />
          </BoxContainer>
        );
      })}
    </>
  );
};

export default withRouter(ResumeList);

const BoxContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 190px;
  width: calc(25% - 25px);
  margin-left: 20px;
  margin-bottom: 20px;
`;

const BoxWrap = styled.div`
  width: 100%;
  z-index: 10;
  background-color: #fff;
`;

const BoxSection = styled.div`
  cursor: pointer;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
`;

const HeaderWarp = styled.div`
  height: calc(100% - 40px);
  border-bottom: 1px solid #e0e0e0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const NameArea = styled.span`
  color: #999;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-bottom: 10px;
`;

const DateArea = styled.span`
  color: #999;
  font-size: 16px;
`;

const TextArea = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;

const HiddenBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: grey;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
  }
`;

const DisplayBox = styled.div`
  width: 15%;
  height: 100%;
  z-index: 200;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60%;
    height: 60%;
    opacity: 0.5;
  }
`;
