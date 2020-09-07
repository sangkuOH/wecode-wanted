import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import mixIn from '../../Styles/Mixin';


function Footer() {
  return (
    <Page>
      <FooterFunction>
        <FunctionList>
          <ListLogo>
            <img alt="logo" src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted.png" width="100" />
          </ListLogo>
          <ListHeader>
            <div>
              <HeaderItems>
                <Link className="use" to="/footer">이용약관</Link>
              </HeaderItems>
            </div>
            <div>
              <HeaderItems>
                <Link className="use" to="/footer">개인정보 처리방침</Link>
              </HeaderItems>
              <HeaderItems>
                <Link className="use" to="/footer">고객센터</Link>
              </HeaderItems>
            </div>
          </ListHeader>
        </FunctionList>
        <FunctionLang>
          <img src="https://s3.ap-northeast-2.amazonaws.com/wanted-public/ico_KR.svg" alt="country flag KR" />
          <select>
            <option value="KR">한국 (한국어)</option>
            <option value="JP">日本 (日本語)</option>
            <option value="TW">台灣 (繁體中文)</option>
            <option value="WW">Worldwide (English)</option>
            <option value="HK">Hong Kong (English)</option>
            <option value="SG">Singapore (English)</option>
          </select>
          <i />
        </FunctionLang>
      </FooterFunction>
      <FooterList>
        <p>
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147호<br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021<br />
          © Wantedlab, Inc.
        </p>
      </FooterList>
    </Page>
  );
}

export default Footer;

const Page = styled.footer`
  height: 246px;
  padding: 30px 25px 50px 25px;
  line-height: 1.42857143;
  font-size: 14px;
  background-color: #2b2d2e;
`
const FooterFunction = styled.div`
  display: flex;
  width: 90%;
  max-width: 1060px;
  height: 21%;
  margin: 0 auto 25px;
`

const FunctionList = styled.div`
  display: flex;
  width: calc(100% - 250px);
`
const ListLogo = styled.div `
  ${mixIn.flex("center")};
  height: 36px;
  margin-right: 50px;
`
const ListHeader = styled.div `
  display: flex;
  font-size: 16px;
`

const HeaderItems = styled.span `
  margin-right: 45px;
  .use {
    line-height: 36px;
    font-weight: 400;
    color: hsla(0,0%,100%,.8);
  }
`
const FunctionLang = styled.div `
  position: relative;
  width: 250px;
  height: 36px;
  img {
    position: absolute;
    top: 50%;
    left: 15px;
    width: 20px;
    height: 14px;
    transform: translateY(-50%);
  }
  select {
    width: 100%;
    height: 36px;
    background: #000;
    border: none;
    font-size: 14px;
    line-height: 36px;
    color: hsla(0,0%,100%,.8);
    padding: 0 45px;
    appearance: none;
    outline: none;
  }
  option {
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  i::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 45%;
    right: 15px;
    border-top: 6px solid #B5B5B5;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`

const FooterList = styled.div `
  height: 36%;
  max-width: 1060px;
  width: 90%;
  margin: 0 auto 25px;
  p {
    width: calc(100% - 250px);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.66667em;
    color: hsla(0,0%,100%,.8);
  }
`