import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import fileUpload from "../../ImagesResume/file-upload-solid.svg";
import newResume from "../..//ImagesResume/file-alt-regular.svg";
import ResumeList from "../ResumeList/ResumeList";
import { connect } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import API from "../../config";


const Resume = ({ loginCheck, history }) => {
  const [isToggle, setToggle] = useState(0);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  const ResumeBtnFunction = (value) => {
    if (value === 1) {
      history.push("/cv/new");
    } else {
      alert("준비중입니다.");
    }
  };

  const newResumeFunc = () => {
    const token = localStorage.getItem("token");
    fetch(`${API}/cv/new`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // user_email: "ssm2@naver.com",
      }),
    }).then(() => {
      history.push("/cv");
    });
  }

  return (
    <>
    <Nav />
    <RsContainer>
      <RsNotLogin loginCheck={loginCheck}>
        <NotLoginBox height="676px">
          <NotLoginText height="22%" color="black" size="56px">
            <h1>이력서 양식, 그 이상</h1>
            <h3>
              채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를
              만들었습니다.
            </h3>
            <h4>
              서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
            </h4>
            <BtnBox >
              <UserBtn border white>
                이력서 관리
              </UserBtn>
              <UserBtn onClick={newResumeFunc} border>새 이력서 작성</UserBtn>
            </BtnBox>
          </NotLoginText>
          <IntroBackground
            height="284px"
            url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_01_en.png"
          />
        </NotLoginBox>
        <NotLoginBox height="497px">
          <NotLoginText height="15%" color="white" size="40px">
            <h1>지원에 유리한</h1>
            <h3>
              글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에
              맞춰서 제작하였습니다.
            </h3>
            <h4>군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.</h4>
          </NotLoginText>
          <IntroBackground
            height="100%"
            url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_02.jpg"
          />
        </NotLoginBox>
        <NotLoginBox height="497px">
          <NotLoginText height="12%" color="black" size="40px">
            <h1>본질에 집중한</h1>
            <h3>
              보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다.
            </h3>
            <h4>
              불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI
              요소들을 제거하였습니다.
            </h4>
          </NotLoginText>
          <IntroBackground
            height="244px"
            paddingBottom="20%"
            url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_03_ko.png"
          />
        </NotLoginBox>
        <NotLoginBox height="584px">
          <NotLoginText height="14%" color="white" size="40px">
            <h1>활용이 자유로운</h1>
            <h3>
              PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이
              쉽습니다.
            </h3>
            <h4>
              가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는
              결과물을 얻을 수 있습니다.
            </h4>
            <BtnBox>
              <UserBtn white>샘플 다운로드</UserBtn>
              <UserBtn border>새 이력서 작성</UserBtn>
            </BtnBox>
          </NotLoginText>
          <IntroBackground
            height="100%"
            url="https://s3.ap-northeast-2.amazonaws.com/wanted-public/resume_intro/resume_04.jpg"
          />
        </NotLoginBox>
      </RsNotLogin>
      <RsLogin loginCheck={loginCheck}>
        <RsLoginWrap>
          <Title>
            <h4>최근 문서</h4>
            <span>
              원티드 이력서 소개<i>ⓘ</i>
            </span>
          </Title>
          <Contents>
            <ContentWrap>
              <ContentBox onClick={() => ResumeBtnFunction(1)}>
                <BoxWrap>
                  <IconBox blue>
                    <Icon url={newResume} />
                  </IconBox>
                  <span>새 이력서 작성</span>
                </BoxWrap>
              </ContentBox>
              <ContentBox onClick={() => ResumeBtnFunction(2)}>
                <BoxWrap>
                  <IconBox>
                    <Icon url={fileUpload} />
                  </IconBox>
                  <span>파일 업로드</span>
                </BoxWrap>
              </ContentBox>
              <ResumeList isToggle={isToggle} setToggle={setToggle} />
            </ContentWrap>
          </Contents>
        </RsLoginWrap>
      </RsLogin>
    </RsContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginCheck: state.loginCheck,
  };
};

export default withRouter(connect(mapStateToProps)(Resume));

const RsContainer = styled.div``;

const RsNotLogin = styled.div`
  display: ${(props) => (props.loginCheck ? "none" : "block")};
`;

const NotLoginBox = styled.div`
  position: relative;
  height: ${(props) => props.height};
`;

const NotLoginText = styled.div`
  position: absolute;
  top: ${(props) => props.height};
  z-index: 3;
  width: 100%;
  color: ${(props) => props.color};
  text-align: center;
  h1 {
    font-size: ${(props) => props.size};
    font-weight: 600;
  }
  h3,
  h4 {
    font-size: 18px;
    font-weight: 400;
  }
  h3 {
    margin: 30px 0 10px 0;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBtn = styled.button`
  cursor: pointer;
  outline: 0;
  height: 58px;
  font-size: 18px;
  font-weight: 600;
  margin: 0 5px;
  padding: 15px 50px;
  border-radius: 30px;
  background-color: ${(props) => (props.white ? "#fff" : "#3a68f9")};
  color: ${(props) => (props.white ? "#3a68f9" : "#fff")};
  border: ${(props) => (props.border ? "#3a68f9" : "#fff")} 1px solid;
`;

const IntroBackground = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: ${(props) => props.height};
  padding-bottom: ${(props) => props.paddingBottom};
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const RsLogin = styled.div`
  display: ${(props) => (props.loginCheck ? "flex" : "none")};
  justify-content: center;
  background-color: #f8f8fa;
  padding: 50px 0 100px 0;
  width: 100%;
`;

const RsLoginWrap = styled.div`
  width: 1060px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0 10px 0;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  h4 {
    padding: 15px 0;
    color: #333;
  }
  span {
    color: #258bf7;
    i {
      margin-left: 5px;
      font-size: 17px;
    }
  }
`;

const Contents = styled.div`
  margin-left: -20px;
  width: calc(100% + 40px);
  display: flex;
  justify-content: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ContentBox = styled.div`
  cursor: pointer;
  height: 190px;
  width: calc(25% - 25px);
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  z-index: 10;
`;

const BoxWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin: 20px 0 0;
  }
`;

const IconBox = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  margin: 0 auto;
  border-radius: 50%;
  background: ${(props) => (props.blue ? "#36f" : "#e1e2e3")};
`;

const Icon = styled.div`
  background-image: url(${(props) => props.url});
  background-position: 50%;
  background-size: cover;
  position: absolute;
  top: 33%;
  left: 33%;
  width: 26px;
  height: 26px;
`;
