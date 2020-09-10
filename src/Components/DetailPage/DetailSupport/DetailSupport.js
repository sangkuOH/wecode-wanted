import React, { useState, useEffect } from "react";
import { withRouter, Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { hsl } from "d3";

const DetailSupport = ({ data, handleComponentChange }) => {
  const [chekedList, setChekedList] = useState([]);
  const ResumeBoxHandler = (item) => {
    if (chekedList.includes(item)) {
      setChekedList(chekedList.filter((option) => option !== item));
    } else setChekedList([...chekedList, item]);
  };
  const nowhistory = useHistory();
  const { id } = useParams();

  const gotoHandler = () => {
    nowhistory.push("/explore");
  };
  useEffect(() => console.log(id), []);
  const handleFetch = () => {
    const token = localStorage.getItem("token");
    fetch("http://3.131.35.195:8000/user/applicationstatus", {
      method: "POST",
      headers: {
        Authorization: token
      },
      body: JSON.stringify({
        position_id: `${id}`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "DONE") {
          alert("제출이 완료되었습니다.");
          gotoHandler();
        } else {
          alert("정상적인 접근방법이 아닙니다");
        }
      });
  };
  const dataInfo = data.applicant_information;
  const dataAttat = data.attatchment;
  return (
    <SupportBox>
      <SupportHeader>
        <div />
        <h2>지원하기 </h2>
        <button onClick={handleComponentChange}>뒤로</button>
      </SupportHeader>
      <SupportBody>
        <SupportSubHeader>지원 정보</SupportSubHeader>
        <CommonInput>
          <h4>이름</h4>
          <DataInfo> {dataInfo?.name}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>이메일</h4>
          <DataInfo>{dataInfo?.email}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>연락처</h4>
          <DataInfo>{dataInfo?.phonenumber}</DataInfo>
        </CommonInput>
        <CommonInput>
          <h4>추천인</h4>
          <DataInfo>WeCode</DataInfo>
        </CommonInput>
        <SupportSubHeader>첨부 파일</SupportSubHeader>
        <SupportBtn>
          {dataAttat?.map((el, idx) => (
            <ResumeBox
              key={idx}
              onClick={() => ResumeBoxHandler("resume")}
              isChecked={chekedList.includes("resume")}
            >
              <input type="checkbox" name="xxx" value="yyy" />
              <ResumeTable>
                <p>{dataInfo?.name}</p>
                <ResumeSmallBox>
                  <span>{el.languae}</span>
                  <span>2020.8.31</span>
                  <span>{el.completion_status}</span>
                </ResumeSmallBox>
              </ResumeTable>
              <ArrowImg></ArrowImg>
            </ResumeBox>
          ))}
          <LabelBox>
            <label>업로드</label>
            <input type="file"></input>
          </LabelBox>
          <NewResume>
            새 이력서 작성
            <p>원티드 이력서로 지원하면 최종 합격률이 40% 높아집니다.</p>
          </NewResume>
        </SupportBtn>
      </SupportBody>
      <FooterBox
        onClick={() => ResumeBoxHandler("resume")}
        isChecked={chekedList.includes("resume")}
      >
        <button onClick={handleFetch}>제출하기</button>
      </FooterBox>
    </SupportBox>
  );
};

export default withRouter(DetailSupport);

const SupportBox = styled.div`
  position: absolute;
  width: 1060px;
  top: 0;
  right: 0;
  left: 0;
  width: 340px;
  height: 700px;
  border: 1px solid #e1e2e3;
  background: white;
  z-index: 999;
`;

const SupportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e1e2e3;
  div {
    color: #333;
    font-size: 16px;
  }
  button {
    font-size: 16px;
    line-height: 16px;
    color: #999;
    border: none;
    outline: none;
    background: white;
    cursor: pointer;
  }
`;

const SupportBody = styled.div`
  height: 560px;
  position: sticky;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SupportBtn = styled.div`
  width: 100%;
  height: 100%;

  margin: 20px 0 0 10px;
  label {
    margin: 20px 0 0 10px;
  }
`;

const SupportSubHeader = styled.div`
  height: 22px;
  margin-top: 20px;
  border-left: 2px solid #258bf7;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`;

const CommonInput = styled.div`
  display: flex;
  border-bottom: 1px solid #999;
  margin: 0 10px 0 16px;
  font-weight: 400;
  h4 {
    width: 80px;
    height: 50px;
    line-height: 50px;
  }

  input {
    width: 255px;
    outline: none;
    border: none;
    font-weight: bold;
  }
`;

const NewResume = styled.button`
  width: 283px;
  height: 50px;
  margin: 12px 0 0 10px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: normal;
  color: #666;
  outline: none;
  cursor: pointer;
  p {
    width: 283px;
    font-size: 12px;
    color: #666;
  }
`;

const LabelBox = styled.label`
  display: block;
  width: 283px;
  height: 50px;
  text-align: center;
  border-radius: 25px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
  color: #666;
  cursor: pointer;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 50px;
  top: 0;
  bottom: 0;
  border-top: 1px solid #e1e2e3;

  button {
    margin: 0 auto;
    width: 298px;
    height: 100%;
    align-items: center;
    color: #ccc;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 30px;
    margin: 18px 20px;
    ${({ isChecked }) =>
      isChecked
        ? `background: #3366ff;color : white;`
        : `background: #f2f4f7; color: gray;`}
  }
`;

const ResumeBox = styled.div`
  position: relative;
  display: flex;
  width: 310px;
  height: 60px;
  /* ${({ isChecked }) =>
    isChecked ? `border: 1px solid blue` : `border: 1px solid #ececec`}; */

  padding: 14px 0 10px 10px;
  background: #fff;
  border-radius: 4px;

  input {
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: none;
    outline: none;
  }
`;

const ResumeTable = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  p {
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #333;
    display: flex;
    font-weight: 600;
  }
`;

const ResumeSmallBox = styled.div`
  display: flex;
  span {
    font-size: 10px;
    margin-right: 8px;
    color: #333;
  }
`;

const ArrowImg = styled.span`
  position: absolute;
  top: 35%;
  right: 15px;
  width: 10px;
  height: 10px;
  border-top: 2px solid rgba(167, 167, 167);
  border-right: 2px solid rgba(167, 167, 167);
  transform: rotate(45deg);
`;

const DataInfo = styled.div`
  margin: 0 auto;
  height: 33px;
  width: 100%;
  line-height: 50px;
`;
