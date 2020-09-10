import React from "react";
import styled from "styled-components";

function Aside() {
  return(
    <AsideContent>
      <div>
        <AsideNavWrap>
          <AsideNavHeader>등록한 후보자</AsideNavHeader>
          <AsideNavItem>
            <header>추천한 후보자</header>
          </AsideNavItem>
        </AsideNavWrap>
        <AsideNavWrap>
          <AsideNavHeader>지원</AsideNavHeader>
          <AsideNavItem>
            <span>작성중</span>
            <Inwriting>6</Inwriting>
          </AsideNavItem>
          <AsideNavItem>
            <span>지원한 포지션</span>
          </AsideNavItem>
        </AsideNavWrap>
      </div>
    </AsideContent>
  )
}


export default Aside

const AsideContent = styled.div`
  width: 30%;
  margin: 0 30px 20px 20px;
`

const AsideNavWrap = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-of-type {
    border: none;
  }
`

const AsideNavHeader = styled.div`
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: #86939e;
`

const AsideNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  margin: 12px 0;
  
  header {
    color: #176fd8;
    font-weight: 600;
  }

  span {
    margin: 12px 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    color: #3b3d40;
  }
`

const Inwriting = styled.div`
  padding: 2px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  color: #3b3d40;
  background-color: #e0e0e0;
  cursor: pointer;
`