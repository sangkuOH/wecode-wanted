import React from 'react';
import CorpIcon from './CorpIcon';
import styled from 'styled-components';


function Sleep() {
  return (
    <Page>
      <Container>
        <SmallHeader>
          <span>
            <Sup>*</Sup>
            이 데이터는 채용 정보에 포함된 직무 별 요구 경력(최저, 최대)과 연봉(최저, 최대)을 바탕으로 추정한 예상 연봉 데이터입니다.
          </span>
        </SmallHeader>
        <MainContainer>
          <Wrap>
            <MainHeader>
              이제 밤새워 채용사이트 보지 마세요.
            </MainHeader>
            <MainDescription>
              원티드 매치업에 프로필을 등록하면, 기업의 인사담당자가 직접 면접을 제안합니다.
            </MainDescription>
            <MainIcons>
              <CorpIcon />
            </MainIcons>
            <MainBtn>시작하기</MainBtn>
          </Wrap>
          <BigHeader>
            <HeaderContent>
              연봉 업그레이드 포지션
              <HeaderBtn>더보기</HeaderBtn>
            </HeaderContent>
          </BigHeader>
        </MainContainer>
      </Container>
    </Page>
  );
}

export default Sleep;

const Page = styled.div `
  background-color: #F8F8FA;
`

const Container = styled.section `
  position: relative;
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 50px;
  
`

const SmallHeader = styled.h5 `
  margin: 10px 0 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #B5B5B5;
`

const Sup = styled.sup `
  top: -0.5em;
`
const MainContainer = styled.div `
  margin-top: 50px;
  margin-bottom: 50px;
`
const Wrap = styled.div `
  margin: 42px 0 40px;
  padding: 55px;
  background: white;
`

const MainHeader = styled.div `
  margin: 0;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  color: #258bf7;
  margin-bottom: 20px;
  word-break: keep-all;
`

const MainDescription = styled.div `
  font-size: 20px;
  line-height: 1;
  color: #000000;
  margin-bottom: 40px;
  word-break: keep-all;
`

const MainBtn = styled.button `
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  background-color: #258bf7;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
`
const MainIcons = styled.div `
  margin: 30px -6px;
  overflow: hidden;
`

const BigHeader = styled.div `
  position: relative;
`

const HeaderContent = styled.h2 `
  line-height: 1.4;
  word-wrap: break-word;
  margin: 20px 0 15px;
  font-size: 26px;
  font-weight: 700;
  color: #333333;
`

const HeaderBtn = styled.button `
  position: absolute;
  top: 50%;
  right: 0;
  padding: 0;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #B5B5B5;
  background: none;
  transform: translateY(-50%);

  &:hover {
    color: #757575;
  }
`