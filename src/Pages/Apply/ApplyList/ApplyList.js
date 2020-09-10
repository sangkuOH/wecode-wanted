import React from "react";
import styled from "styled-components";
import List from "./List";

function ApplyList({data}) {

  return(
    <ApplyListContainer>
      <StatusHeader>
        <Company>지원회사</Company>
        <Position>지원 포지션</Position>
        <Person>지원자</Person>
        <Date>작성시간</Date>
        <Result>지원결과</Result>
      </StatusHeader>
        <List data={data} />
    </ApplyListContainer>
  )
}


export default ApplyList

const ApplyListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StatusHeader = styled.div`
  display: flex;
  padding: 10px;
  text-align: center;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  font-weight: 500;
  color: #86939e;
  border-bottom: 1px solid #d1d1d1;
`

const Company = styled.div`
  width: 30%;
  text-align: left;
`

const Position = styled.div`
  width: 25%;
`

const Person = styled.div`
  width: 17%;
`

const Date = styled.div`
  width: 15%;
`

const Result = styled.div`
  width: 13%;
`