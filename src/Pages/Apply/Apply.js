import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Aside from "./Aside/Aside";
import DashBoard from "./DashBoard/DashBoard";
import mixIn from '../../Styles/Mixin';

function Apply() {

  return(
    <Page>
      <ApplyContainer>
        <Header>
          <li>
            <Target href="#" >지원현황</Target>
          </li>
          <li>
            <a href="#" >좋아요</a>
          </li>
          <li>
            <a href="#" >북마크</a>
          </li>
        </Header>
        <MainContainer>
          <Aside />
          <DashBoard/>
        </MainContainer>
      </ApplyContainer>
    </Page>
  )
}

export default withRouter(Apply)

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F8F8FA;
`  
const ApplyContainer = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #F8F8FA;
`

const Header = styled.ul `
  ${mixIn.flex("center")};
  margin: 40px 0;
  padding-right: 181.58px;
  padding-left: 74.38px;

  li {
    margin: 0 6px;
    color: #999;
    font-size: 18px;
    text-align: center;
    font-weight: 600;

    a {
      ${mixIn.flex("center")};
      width: 100%;
      height: 40px;
      padding: 0 30px;
      color: #333;
      border-radius: 999px;
    }
  }
`

const Target = styled.a`
  background: white;
`

const MainContainer = styled.div`
    display: flex;
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
`