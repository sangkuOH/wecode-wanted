import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeModal, dropProfile } from "../../store/actions";
import NavList from "../NavList/NavList";
import SignUp from "../../Pages/Signup/SignUp";
import Logout from "../../Pages/Signup/Logout";

const Nav = ({
  changeModal,
  dropProfile,
  loginCheck,
  profileDrop,
  history,
}) => {
  const [data, setData] = useState({});
  const [menuExplore, setMenuExplore] = useState(false);

  useEffect(() => {
    fetch("/data/navList/navList.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <NavContainer>
        <NavWrap>
          <NavBox show={menuExplore}>
            <NavContents>
              <WantedLogo
                onClick={() => {
                  dropProfile(false);
                  setMenuExplore(false);
                  document.documentElement.scrollTop = 0;
                  history.push("/");
                }}
              >
                <p>wanted</p>
              </WantedLogo>
              <NavUl>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/explore");
                  }}
                  onMouseEnter={() => {
                    setMenuExplore(true);
                    dropProfile(false);
                  }}
                >
                  탐색
                </li>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/salary");
                  }}
                  onMouseEnter={() => setMenuExplore(false)}
                >
                  직군별 연봉
                </li>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/cv");
                  }}
                  onMouseEnter={() => setMenuExplore(false)}
                >
                  이력서
                </li>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/");
                  }}
                  onMouseEnter={() => setMenuExplore(false)}
                >
                  추천
                </li>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/");
                  }}
                  onMouseEnter={() => setMenuExplore(false)}
                >
                  이벤트
                </li>
                <li
                  onClick={() => {
                    dropProfile(false);
                    history.push("/");
                  }}
                  onMouseEnter={() => setMenuExplore(false)}
                >
                  매치업
                </li>
              </NavUl>
              <NavUl>
              <i onClick={() => history.push("/tagsearch")} className="fa fa-search" aria-hidden="true"></i>

                <NotLoginProfile
                  onClick={() => dropProfile(!profileDrop)}
                  loginCheck={loginCheck}
                />
                <UserInfo
                  onClick={() => changeModal(true)}
                  loginCheck={loginCheck}
                >
                  회원가입/로그인
                </UserInfo>
                <li onClick={() => history.push("/")}>기업 서비스</li>
                <ProfileDropDown show={profileDrop}>
                  <ul>
                    <li onClick={() => history.push("/profile")}>
                      <Link to="/">프로필</Link>
                    </li>
                    <li>
                      <Link to="/apply">제안받기 현황</Link>
                    </li>
                    <li>
                      <Link to="/apply">지원현황</Link>
                    </li>
                    <li>
                      <Link to="/">좋아요</Link>
                    </li>
                    <li>
                      <Link to="/">북마크</Link>
                    </li>
                    <li>
                      <Link to="/">설정</Link>
                    </li>
                  </ul>
                  <Logout />
                </ProfileDropDown>
              </NavUl>
            </NavContents>
          </NavBox>
          <DropDownBox
            show={menuExplore}
            onMouseLeave={() => setMenuExplore(false)}
          >
            {data.develop && (
              <div>
                <NavList
                  title={data.develop.title}
                  url={data.develop.url}
                  contents={data.develop.contents}
                />
                <NavList
                  title={data.develop2.title}
                  url={data.develop2.url}
                  contents={data.develop2.contents}
                />
                <NavList
                  title={data.business.title}
                  url={data.business.url}
                  contents={data.business.contents}
                />
                <NavList
                  title={data.market.title}
                  url={data.market.url}
                  contents={data.market.contents}
                />
                <NavList
                  title={data.design.title}
                  url={data.design.url}
                  contents={data.design.contents}
                />
                <NavList
                  title={data.work.title}
                  url={data.work.url}
                  contents={data.work.contents}
                />
              </div>
            )}
          </DropDownBox>
          <NavHiddenBackground show={menuExplore} />
        </NavWrap>
      </NavContainer>
      <SignUp />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginCheck: state.loginCheck,
    profileDrop: state.profileDrop,
  };
};

export default withRouter(
  connect(mapStateToProps, { changeModal, dropProfile })(Nav)
);

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  z-index: 2002;
`;

const NavWrap = styled.div`
  width: 100%;
  height: 50px;
`;

const NavHiddenBackground = styled.div`
  position: ${(props) => (props.show ? "fixed" : "static")};
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.show ? "0.5" : "0")};
  top: 0px;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

const NavBox = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 900;
  background-color: white;
`;

const NavContents = styled.div`
  width: 1060px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const WantedLogo = styled.i`
  p {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bold;
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    width: 10px;
    height: 10px;
    margin-right: 10px;
    margin-bottom: 3px;
    color: #505050;
    cursor: pointer;
  }
  li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    padding: 17px 13px;
    :hover {
      border-bottom: 2px solid #36e;
    }
  }
`;

const NotLoginProfile = styled.div`
  display: ${(props) => (props.loginCheck ? "block" : "none")};
  cursor: pointer;
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png");
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  border: 1px solid #d1d1d1;
  background-color: #eee;
  background-position: 50%;
  background-size: cover;
`;

const UserInfo = styled.li`
  display: ${(props) => (props.loginCheck ? "none" : "block")};
  cursor: pointer;
`;

const DropDownBox = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  height: 295px;
  background-color: white;
  z-index: ${(props) => props.show && "300"};
  transform: ${(props) =>
    props.show ? "translateY(0px)" : "translateY(-300px)"};
  transition: ease 0.3s;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e1e2e3;
  & > div {
    width: 1060px;
    height: 100%;
    display: flex;
  }
`;

const ProfileDropDown = styled.div`
  position: ${(props) => (props.show ? "absolute" : "")};
  display: ${(props) => (props.show ? "" : "none")};
  background-color: #fff;
  top: 50px;
  width: 170px;
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e1e2e3;
  ul {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 100%;
      margin: 10px 0;
      font-weight: 400;
      font-size: 15px;
      color: #333;
      
      a{
        color: black;
      }
    }
    li:first-child {
      padding: 10px 0;
      border-bottom: 1px solid #e1e2e3;
    }
  }
`;
