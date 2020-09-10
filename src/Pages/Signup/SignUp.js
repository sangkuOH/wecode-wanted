import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "../../config";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";

const SignUp = ({ modalActive, history }) => {
  const [show, setShow] = useState(1);
  const [inputEmail, setInputEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validCautionEmail, setValidCautionEmail] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [validCautionPw, setValidCautionPw] = useState(false);
  const [inputName, setInputName] = useState("");
  const [validName, setValidName] = useState(false);
  const [validCautionName, setValidCautionName] = useState(false);
  const [inputPwRe, setInputPwRe] = useState("");
  const [validPwRe, setValidPwRe] = useState(false);
  const [validCautionPwRe, setValidCautionPwRe] = useState(false);
  const [inputPhone, setInputPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [validCautionPhone, setValidCautionPhone] = useState(false);

  useEffect(() => {
    inputEmail.includes("@" && ".")
      ? setValidEmail(true)
      : setValidEmail(false);
  }, [inputEmail]);

  useEffect(() => {
    inputPw.length >= 6 ? setValidPw(true) : setValidPw(false);
  }, [inputPw]);

  useEffect(() => {
    inputName.length > 0 ? setValidName(true) : setValidName(false);
  }, [inputName]);

  useEffect(() => {
    inputPw === inputPwRe ? setValidPwRe(true) : setValidPwRe(false);
  }, [inputPw, inputPwRe]);

  useEffect(() => {
    inputPhone.length === 11 && inputPhone.includes("010" || "011")
      ? setValidPhone(true)
      : setValidPhone(false);
  }, [inputPhone]);

  useEffect(() => {
    modalActive
      ? (window.document.body.style.overflowY = "hidden")
      : (window.document.body.style.overflowY = "scroll");
  }, [modalActive]);

  // 첫 번째 모달 - 이메일 확인

  const modalOneFetch = () => {
    console.log("modal1 함수 실행");
    if (validEmail === false) {
      setValidEmail(true);
    } else {
      fetch(`${API}/user/intro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "SignUp") {
            console.log("존재하지 않는 유저, 회원가입");
            setShow(2);
          } else if (res.message === "SignIn") {
            console.log("존재하는 유저, 비밀번호만 확인");
            setShow(3);
          }
        });
    }
  };

  // 백엔드 서버 off 시 테스트용 함수
  // const modalOneClick = () => {
  //   setShow(2);
  // };
  // const modalTwoClick = () => {
  //   setShow(3);
  // };

  // 두 번째 모달 - 회원가입

  const modalTwoFetch = () => {
    console.log("modal2 함수 실행");
    if (validName === false) {
      setValidCautionName(true);
    }
    if (validPhone === false) {
      setValidCautionPhone(true);
    }
    if (validPw === false) {
      setValidCautionPw(true);
    }
    if (validPwRe === false) {
      setValidCautionPwRe(true);
    }
    if (validName) {
      console.log("이름 조건 통과");
      if (validPhone) {
        console.log("휴대폰 번호 조건 통과");
        if (validPw) {
          console.log("패스워드 조건 통과");
          if (validPwRe) {
            console.log("패스워드 확인 조건 통과");
            fetch(`${API}/user/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: inputName,
                phone_number: inputPhone,
                email: inputEmail,
                password: inputPw,
              }),
            }).then((res) => {
              if (res.status === 200) {
                alert("회원가입이 완료되었습니다!");
              } else if (res.status === 400) {
                alert("회원님은 가입된 계정이 있습니다.");
              }
            });
            setShow(1);
            setInputEmail("");
          }
        }
      }
    }
  };

  // 세 번째 모달 - 로그인

  const modalThreeFetch = () => {
    console.log("modal3 함수 실행");
    if (validPw === false) {
      setValidPw(true);
    } else {
      fetch(`${API}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPw,
        }),
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((res) => localStorage.setItem("token", res.token));
        }
        if (res.status === 401) {
          alert("비밀번호를 확인해주세요.");
        }
      });
      loginComplete();
    }
  };

  // 모달 창 이동 함수

  const goModalOne = (e) => {
    if (validEmail && e.keyCode === 13) {
      modalOneFetch();
    } else if (!validEmail && e.keyCode === 13) {
      setValidCautionEmail(true);
    }
  };

  const goModalTwo = (e) => {
    if (!validName && e.keyCode === 13) {
      setValidCautionName(true);
    }
    if (!validPw && e.keyCode === 13) {
      setValidCautionPw(true);
    }
    if (!validPwRe && e.keyCode === 13) {
      setValidCautionPwRe(true);
    }
    if (e.keyCode === 13 && validName && validPw && validPwRe) {
      modalTwoFetch();
    }
  };

  const goModalThree = (e) => {
    if (validPw && e.keyCode === 13) {
      modalThreeFetch();
    }
    if (!validPw && e.keyCode === 13) {
      setValidCautionPw(true);
    }
  };

  // 회원가입, 로그인 시 메인 페이지 이동

  // const signUpComplete = () => {
  //   document.documentElement.scrollTop = 0;
  //   history.push("/");
  // };

  const loginComplete = () => {
    alert("로그인 완료");
    changeModal(false);
    changeLogin(true);
    console.log("changeLogin", changeLogin);
    loginWhich("default");
    setShow(0);
    document.documentElement.scrollTop = 0;
    history.push("/");
  };

  // 모달 창 취소

  const delModal = () => {
    changeModal(false);
    setShow(1);
  };
  const returnModal = () => {
    changeModal(false);
    setShow(1);
  };

  return (
    <SuContainer>
      <SuBg active={modalActive} onClick={delModal} show={show} />
      {/* 첫 모달 창, 이메일 체크 & 소셜 로그인 버튼 有 */}
      <SuCheck active={modalActive} show={show}>
        <SuTitle>
          <span>wanted</span>
          <CancleBtn onClick={delModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </CancleBtn>
        </SuTitle>
        <SuBody onKeyDown={goModalOne}>
          <SuBodyTitle>
            <h1>당신의 커리어 여정,</h1>
            <h1>원티드에서 행복하게</h1>
            <h2>
              지금 원티드와
              <br />
              커리어 여정을 시작하세요!
            </h2>
          </SuBodyTitle>
          <SuInput>
            <i>이메일</i>
            <InputEmail
              onChange={(e) => setInputEmail(e.target.value)}
              onKeyDown={() => setValidCautionEmail(false)}
              type="text"
              placeholder="이메일을 입력해 주세요."
              value={inputEmail}
              validCautionEmail={validCautionEmail}
            />
            <CautionEmail validCautionEmail={validCautionEmail}>
              올바른 이메일 형식을 입력해주세요.
            </CautionEmail>
          </SuInput>
          <SuBodyContents>
            <SocialBtn onClick={modalOneFetch} blue>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#FFF"
                  stroke-width="2"
                >
                  <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                  <path d="M3.2 5.6L12 12l8.8-6.4"></path>
                </g>
              </svg>
              <i>이메일로 시작하기</i>
            </SocialBtn>
            <h4>or</h4>
            <SocialBtn margin>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#1877f2"
                  fill-rule="evenodd"
                  d="M18 9a9 9 0 1 0-10.406 8.89v-6.288H5.309V9h2.285V7.017c0-2.255 1.343-3.501 3.4-3.501.984 0 2.014.175 2.014.175v2.215h-1.135c-1.118 0-1.467.694-1.467 1.406V9h2.496l-.399 2.602h-2.097v6.289C14.71 17.215 18 13.492 18 9"
                ></path>
              </svg>
              <i>페이스북으로 시작하기</i>
            </SocialBtn>
            <SocialBtn margin>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  fill="#000"
                  fill-rule="nonzero"
                  d="M13.852 9.563c.025 2.724 2.36 3.63 2.386 3.642-.02.064-.373 1.292-1.23 2.56-.741 1.096-1.51 2.189-2.722 2.212-1.19.022-1.574-.715-2.935-.715-1.36 0-1.786.692-2.913.737-1.17.045-2.06-1.186-2.807-2.278C2.104 13.486.937 9.406 2.504 6.65c.778-1.367 2.169-2.233 3.679-2.255 1.148-.023 2.232.782 2.934.782s2.02-.968 3.404-.826c.58.025 2.207.238 3.252 1.786-.084.053-1.941 1.147-1.921 3.425m-2.238-6.689c.621-.76 1.04-1.82.925-2.874-.895.036-1.977.604-2.62 1.364-.575.674-1.078 1.751-.943 2.785.998.078 2.017-.514 2.638-1.275"
                ></path>
              </svg>
              <i>Apple로 시작하기</i>
            </SocialBtn>
            <GoogleLogin
              clientId="75282035045-o9nuoc2rcgo0okpev9b5avmcek00g0se.apps.googleusercontent.com"
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
              render={(props) => (
                <SocialBtn onClick={props.onClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#EA4335"
                        d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                      ></path>
                      <path d="M0 0h18v18H0z"></path>
                    </g>
                  </svg>
                  <i>Google로 시작하기</i>
                </SocialBtn>
              )}
              onSuccess={(res) => {
                localStorage.setItem("googleToken", res.wc.access_token);
                const googleToken = localStorage.getItem("googleToken");
                fetch(`http://127.0.0.1:8000/user/googlesignin`, {
                  method: "GET",
                  headers: {
                    Authorization: googleToken,
                    "Content-Type": "application/json",
                  },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    localStorage.setItem("access_token", res.access_token);
                    localStorage.removeItem("googleToken");
                    console.log(res);
                    changeModal(false);
                    changeLogin(true);
                    document.documentElement.scrollTop = 0;
                    history.push("/cv");
                  });
              }}
            />
            <p>걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.</p>
            <i>
              회원가입 시 <span>개인정보 처리방침</span>과 <span>이용약관</span>
              을 확인하였으며, 동의합니다.
            </i>
          </SuBodyContents>
        </SuBody>
      </SuCheck>

      {/* 두 번째 모달 창 - 등록되지 않은 계정, 회원가입 */}
      <SuNotUser active={modalActive} show={show}>
        <SuTitle>
          <span>회원가입</span>
          <CancleBtn onClick={returnModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </CancleBtn>
        </SuTitle>
        <SuBody onKeyDown={goModalTwo}>
          <SuInput>
            <i>이름</i>
            <InputName
              onChange={(e) => setInputName(e.target.value)}
              onKeyDown={() => setValidCautionName(false)}
              type="text"
              placeholder="이름을 입력해 주세요."
              value={inputName}
              validCautionName={validCautionName}
            />
            <CautionName validCautionName={validCautionName}>
              이름은 필수정보 입니다.
            </CautionName>
          </SuInput>
          <SuInput>
            <i>휴대폰 번호</i>
            <InputPhone
              onChange={(e) => setInputPhone(e.target.value)}
              type="text"
              placeholder="(예시) 01034567890"
              value={inputPhone}
              validCautionName={validCautionPhone}
            />
            <CautionPhone validCautionPhone={validCautionPhone}>
              올바른 연락처 형식이 아닙니다.
            </CautionPhone>
          </SuInput>
          <SuInput>
            <i>비밀번호</i>
            <InputPw
              onChange={(e) => setInputPw(e.target.value)}
              onKeyDown={() => setValidCautionPw(false)}
              type="password"
              placeholder="비밀번호를 6자 이상 입력해 주세요."
              value={inputPw}
            />
            <CautionPw validCautionPw={validCautionPw}>
              비밀번호를 6자 이상 입력해 주세요.
            </CautionPw>
          </SuInput>
          <SuInput>
            <i>비밀번호 확인</i>
            <InputPwRe
              onChange={(e) => setInputPwRe(e.target.value)}
              type="password"
              placeholder="비밀번호를 다시 한번 입력해 주세요."
              value={inputPwRe}
              validCautionPwRe={validCautionPwRe}
            />
            <CautionPwRe>비밀번호를 다시 확인해 주세요.</CautionPwRe>
          </SuInput>
          <SocialBtn onClick={modalTwoFetch}>
            <i>회원가입하기</i>
          </SocialBtn>
        </SuBody>
      </SuNotUser>
      {/* 세 번째 모달 창 - 이미 등록된 계정일 때 */}
      <SuUser show={show} active={modalActive}>
        <SuTitle>
          <span>비밀번호 입력</span>
          <CancleBtn onClick={returnModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </CancleBtn>
        </SuTitle>
        <SuBody onKeyDown={goModalThree}>
          <SuInput>
            <i>비밀번호</i>
            <InputPw
              onKeyDown={() => setValidCautionPw(false)}
              onChange={(e) => setInputPw(e.target.value)}
              validCautionPw={validCautionPw}
              type="password"
              placeholder="비밀번호"
            />
            <CautionPw validCautionPw={validCautionPw}>
              올바른 비밀번호가 아닙니다.
            </CautionPw>
          </SuInput>
          <SocialBtn onClick={modalThreeFetch}>
            <i>로그인</i>
          </SocialBtn>
          <h5>
            <span>비밀번호 초기화/변경</span>
          </h5>
        </SuBody>
      </SuUser>
    </SuContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    modalActive: state.modalActive,
  };
};

export default withRouter(
  connect(mapStateToProps, { changeModal, changeLogin, loginWhich })(SignUp)
);

const SuContainer = styled.div`
  display: flex;
`;

const SuBg = styled.div`
  background-color: #000;
  display: ${(props) => (props.active ? "block" : "none")};
  position: ${(props) => (props.active ? "fixed" : "none")};
  top: 0px;
  opacity: ${(props) => (props.active ? "0.4" : "0")};
  width: 100%;
  height: 100vh;
  z-index: ${(props) => (props.active ? "100" : "0")};
`;

// 첫 번째 모달 창 (이메일 확인)
const SuCheck = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  visibility: ${(props) => (props.show === 1 ? "visible" : "hidden")};
  transition: all 0.4s linear;
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  height: calc(100vh - 150px);
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  overflow-y: scroll;
  z-index: ${(props) => (props.active ? 200 : 0)};
`;

// 두 번째 모달 창 (이메일 없음 => 회원가입)
const SuNotUser = styled.div`
  position: ${(props) => (props.active ? "fixed" : "none")};
  visibility: ${(props) => (props.show === 2 ? "visible" : "hidden")};
  opacity: ${(props) => (props.show === 2 ? 1 : 0)};
  transition: all 0.4s linear;
  position: fixed;
  opacity: ${(props) => (props.show === 2 ? 1 : 0)};
  z-index: ${(props) => (props.active ? 201 : 0)};

  background-color: #fff;
  top: 50%;
  left: 50%;
  width: 400px;
  height: calc(100vh - 150px);
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

// 세 번째 모달창 (이메일 있음 => 로그인)
const SuUser = styled.div`
  position: ${(props) => (props.active ? "fixed" : "none")};
  visibility: ${(props) => (props.show === 3 ? "visible" : "hidden")};
  opacity: ${(props) => (props.show === 3 ? 1 : 0)};
  transition: all 0.4s linear;
  position: fixed;
  z-index: ${(props) => (props.active ? 200 : 0)};
  background-color: #fff;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 319px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`;

const SuTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
  span {
    font-weight: 900;
    font-size: 20px;
  }
`;

const CancleBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 15px;
  line-height: 0;
  background-color: #fff;
  border: none;
  cursor: pointer;
  outline: 0;
  svg {
    width: 24px;
    height: 24px;
    color: #999;
  }
`;

const SuBody = styled.div`
  padding: 20px;
  text-align: center;
  h5 {
    position: absolute;
    bottom: 5px;
    height: 54px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      cursor: pointer;
      font-size: 14px;
      color: #36f;
      font-weight: 600;
    }
  }
`;

const SuBodyTitle = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 40px;
  h1 {
    line-height: 1.54;
    font-size: 26px;
    font-weight: 600;
    color: #333;
  }
  h2 {
    margin-top: 16px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    color: #666;
  }
`;

const SuInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-bottom: 22px;
  i {
    color: #767676;
    font-size: 14px;
    font-weight: 400;
  }
`;

const InputEmail = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-top: 11px;
  border: 1px solid ${(props) => (props.validCautionEmail ? "#36f" : "#e1e2e3")};
  border-radius: 5px;
  font-size: 15px;
  color: #333;
  background-color: #fff;
  :focus {
    outline: none;
    border-color: #36f;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const InputName = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-top: 11px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.validCautionName ? "red" : "#e1e2e3")};
  background-color: #fff;
  font-size: 15px;
  color: #333;
  :focus {
    outline: none;
    border-color: #36f;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const InputPw = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-top: 11px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.validCautionPw ? "red" : "#e1e2e3")};
  background-color: #fff;
  font-size: 15px;
  color: #333;
  :focus {
    outline: none;
    border-color: #36f;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const InputPwRe = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  margin-top: 11px;
  border-radius: 5px;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 15px;
  color: #333;
  :focus {
    outline: none;
    border-color: #36f;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const InputPhone = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  font-size: 15px;
  margin-top: 11px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.validCautionPhone ? "red" : "#e1e2e3")};
  background-color: #fff;
  color: #333;
  :focus {
    outline: none;
    border-color: #36f;
    box-shadow: 0 0 0 1px "#3a68f9";
  }
  ::placeholder {
    color: #767676;
    opacity: 0.5;
  }
`;

const SuBodyContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  p {
    margin-top: 26px;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: rgb(153, 153, 153);
  }
  & > i {
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    color: rgb(153, 153, 153);
    margin-bottom: 20px;
    span {
      color: rgb(51, 54, 255);
      text-decoration: underline;
    }
  }
  & > h4 {
    color: rgb(150, 150, 150);
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    margin: 10px auto;
  }
`;

const SocialBtn = styled.button`
  position: ${(props) => props.hidden && "absolute"};
  bottom: 60px;
  outline: 0;
  width: 90%;
  height: 54px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.blue ? "#fff" : "rgb(115, 115, 115)")};
  background-color: ${(props) => (props.blue ? "rgb(51, 102, 255)" : "#fff")};
  border-radius: 27px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 226, 227);
  margin-bottom: ${(props) => (props.margin ? "10px" : "")};
  margin-top: ${(props) => (props.top ? "20px" : "")};
  svg {
    margin-right: 10px;
  }
  i {
    font-size: 16px;
    font-weight: 600;
  }
`;

const CautionEmail = styled.div`
  display: ${(props) => (props.validCautionEmail ? "block" : "none")};
  width: 100%;
  padding: 0 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
  text-align: left;
`;

const CautionName = styled.div`
  display: ${(props) => (props.validCautionName ? "block" : "none")};
  width: 100%;
  padding: 0 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
  text-align: left;
`;

const CautionPw = styled.div`
  display: ${(props) => (props.validCautionPw ? "block" : "none")};
  width: 100%;
  padding: 0 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
  text-align: left;
`;

const CautionPwRe = styled.div`
  display: ${(props) => (props.validCautionPwRe ? "block" : "none")};
  width: 100%;
  padding: 0 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
  text-align: left;
`;

const CautionPhone = styled.div`
  display: ${(props) => (props.validCautionPhone ? "block" : "none")};
  width: 100%;
  padding: 0 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
  text-align: left;
`;
