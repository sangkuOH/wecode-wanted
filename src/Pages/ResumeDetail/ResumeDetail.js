import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdDownload } from "react-icons/io";
import  API  from "../../config";

const ResumeDetail = (props) => {
  const [introHigh, setIntroHigh] = useState(0);
  const [careerHigh, setcareerHigh] = useState(0);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [career, setCareer] = useState([]);
  const [education, setEducation] = useState([]);
  const [award_history, setAwardHistory] = useState([]);
  const [foreignlanguage, setForeignLanguage] = useState([]);
  const [link, setLink] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  useEffect(() => {
    GetFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetFunc = () => {
    const token = localStorage.getItem("token");
    fetch(`${API}/cv/1`, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setTitle(res.title);
        setName(res.writer_name);
        setEmail(res.email);
        setPhone(res.phone_number);
        setDescription(res.description);
        setCareer(res.career);
        setEducation(res.award_history);
        setForeignLanguage(res.foreignlanguage);
        setLink(res.link);
        console.log(res);
      });
  };

  const writeFunc = () => {
    const token = localStorage.getItem("token");
    fetch(`${API}/cv/${props.match.params.id}`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title        : title,
        writer_name  : name,
        email        : email,
        phone_number : phone_number,
        description  : description,
        career: career,
        education: education,
        award_history: award_history,
        foreignlanguage: foreignlanguage,
        link: link
        // user_email: "ssm2@naver.com",
      }),
    }).then(() => {
      props.history.push("/cv");
    });
  };

  return (
    <RsDetail>
      <PageWrap>
        <ContentsHeader>
          <select>
            <option selected="selected">한국어</option>
          </select>
          <LanIcon>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="globe"
              class="svg-inline--fa fa-globe fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              ></path>
            </svg>
          </LanIcon>
          <DownBox>
            <IoMdDownload />
          </DownBox>
        </ContentsHeader>
        <ContentsName>
          <input
            type="text"
            placeholder="이력서 제목(필수)"
            defaultValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </ContentsName>
        <ContentsUser>
          <input type="text" placeholder="이름(필수)" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="이메일(필수)" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          <input
            type="text"
            placeholder="연락처(필수) ex) 010-0000-0000"
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
          />
        </ContentsUser>
        <BottomWrap>
          <BottomBox high={introHigh}>
            <BoxTitle>간단 소개글</BoxTitle>
            <Textarea
              high={introHigh}
              placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
              maxlength="2000"
              defaultValue={description}
              onChange={(e) => 
                setDescription(e.target.value)}
            />
          </BottomBox>
          <BottomBox high={careerHigh}>
            <BoxTitle>경력</BoxTitle>
            <Textarea
              high={careerHigh}
              placeholder="경력 사항을 입력해 주세요."
              maxlength="2000"
              defaultValue={career}
              onChange={(e) => 
                setCareer(e.target.value)}
                // setIsValiCareer((e.target.value).length>0 === true);
              
            />
          </BottomBox>
          <BottomBox high={careerHigh}>
            <BoxTitle>학력</BoxTitle>
            <Textarea
              high={careerHigh}
              placeholder="학력 사항을 입력해 주세요."
              maxlength="2000"
              defaultValue={education}
              onChange={(e) => 
                setEducation(e.target.value)}
            
            />
          </BottomBox>
          <BottomBox high={careerHigh}>
            <BoxTitle>수상 및 기타</BoxTitle>
            <Textarea
              high={careerHigh}
              placeholder="수상 내역을 입력해 주세요."
              maxlength="2000"
              defaultValue={award_history}
              onChange={function careerFunc(e) {
                setAwardHistory(e.target.value);
                // setIsValiCareer((e.target.value).length>0 === true);
              }}
            />
          </BottomBox>
          <BottomBox high={careerHigh}>
            <BoxTitle>외국어</BoxTitle>
            <Textarea
              high={careerHigh}
              placeholder="외국어 사용 능력을 입력해 주세요."
              maxlength="2000"
              defaultValue={career}
              onChange={function careerFunc(e) {
                setForeignLanguage(e.target.value);
              }}
            />
          </BottomBox>
          <BottomBox high={careerHigh}>
            <BoxTitle>링크</BoxTitle>
            <Textarea
              high={careerHigh}
              placeholder="링크 사항을 입력해 주세요."
              maxlength="2000"
              defaultValue={link}
              onChange={function careerFunc(e) {
                setLink(e.target.value);
              }}
            />
          </BottomBox>
        </BottomWrap>
      </PageWrap>
      <RsDetailFooter>
        <FooterWrap>
          <ButtonWrap>
            <Button onClick={writeFunc} white>
              <span>임시 저장</span>
            </Button>
            <Button onClick={writeFunc}>
              <span>작성 완료</span>
            </Button>
          </ButtonWrap>
        </FooterWrap>
      </RsDetailFooter>
    </RsDetail>
  );
};

export default ResumeDetail;

const RsDetail = styled.div`
  padding: 50px 0 72px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PageWrap = styled.div`
  width: 1060px;
  margin: 0 auto;
`;

const ContentsHeader = styled.div`
  margin-top: 30px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  select {
    width: 100px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #bababa;
    background-color: #ffffff;
    padding-left: 37px;
  }
`;

const LanIcon = styled.span`
  position: absolute;
  left: 11px;
  top: 10px;

  width: 18px;
  height: 14px;
`;

const DownBox = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
  border-radius: 3px;
  svg {
    width: 20px;
    height: 20px;
    opacity: 0.6;
    margin-left: 2px;
  }
`;

const ContentsName = styled.div`
  width: 100%;
  height: 40px;
  margin: 70px 0 50px;
  input {
    width: 100%;
    color: #3b3d40;
    font-size: 36px;
    font-weight: 500;
    outline: none;
    border: none;
  }
  input::placeholder {
    color: rgba(118, 118, 118, 0.5);
  }
`;

const ContentsUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 60px 0;
  input {
    margin-top: 10px;
    width: 100%;
    color: #3b3d40;
    font-size: 16px;
    outline: none;
    border: none;
    &::placeholder {
      color: rgba(118, 118, 118, 0.5);
    }
  }
`;

const BottomWrap = styled.div`
  width: 100%;
`;

const BottomBox = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const BoxTitle = styled.div`
  padding: 20px 0 6px;
  font-size: 16px;
  font-weight: 500;
  color: #3b3d40;
  border-bottom: 1px solid #bababa;
`;

const Textarea = styled.textarea`
  height: ${(props) => props.high / 3 + 73}px;
  max-height: 960px;
  overflow-y: visible;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  width: 100%;
  color: #3b3d40;
  outline: none;
  border: none;
  resize: none;
  &::placeholder {
    color: rgba(118, 118, 118, 0.5);
  }
`;

const RsDetailFooter = styled.div`
  width: 100%;
  height: 73px;
  position: fixed;
  bottom: 0px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 1060px;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  cursor: pointer;
  width: 174px;
  height: 51.71px;
  background-color: ${(props) => (props.white ? "#ffffff" : "#258bf7")};
  border: 1px solid #258bf7;
  border-radius: 3px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 5px;
    color: ${(props) => (props.white ? "#258bf7" : "#ffffff")};
  }
`;
