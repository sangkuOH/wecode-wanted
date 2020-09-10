import React from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { changeLogin, dropProfile, loginWhich } from "../../store/actions";

const Logout = ({ changeLogin, dropProfile, loginWhich }) => {
  const logOutComplete = () => {
    localStorage.clear();
    changeLogin(false);
    dropProfile(false);
    loginWhich("default");
    document.documentElement.scrollTop = 0;
  };

  return (
    <LogOutContainer>
      <i>
        <List onClick={logOutComplete}>로그아웃</List>
      </i>
      <LogOutWrap>
        <GoogleLogout
          clientId="75282035045-o9nuoc2rcgo0okpev9b5avmcek00g0se.apps.googleusercontent.com"
          render={(props) => (
            <li onClick={props.onClick} disabled={props.disabled}>
              로그아웃
            </li>
          )}
          onLogoutSuccess={() => logOutComplete()}
        />
      </LogOutWrap>
    </LogOutContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loginWhich: state.loginWhich,
  };
};

export default connect(mapStateToProps, {
  changeLogin,
  dropProfile,
  loginWhich,
})(Logout);

const LogOutContainer = styled.div`
  i {
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 400;
      font-size: 15px;
      height: 46px;
      margin: 10px 0 0 0;
      background-color: #f2f4f7;
      border-top: 1px solid #e1e2e3;
      color: #767676;
    }
  }
`;

const List = styled.li`
  display: ${(props) => props.loginWhich !== "default" && "none"};
`;

const LogOutWrap = styled.i`
  display: ${(props) => props.loginWhich !== "google" && "none"};
`;
