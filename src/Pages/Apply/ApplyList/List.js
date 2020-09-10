import React from "react";
import styled from "styled-components";

function List({data}) {
  const createList = (data) => {
    let application = data.application_status;
    return application.map((el, idx) => (
      <StatusList key={idx}>
        <CompanyList>
          <img src={el.logo_url} />
          <span>{el.company}</span>
        </CompanyList>
        <PositionList>{el.position}</PositionList>
        <PersonList>{el.applicant_name}</PersonList>
        <DateList>{el.created_at}</DateList>
        <ResultList>{el.result}</ResultList>
      </StatusList>
    ))
  }

  return(
    <>{data && createList(data)}</>
  )
}


export default List

const StatusList = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  word-break: break-all;
  white-space: nowrap;
  color: black;
  cursor: pointer;
  background-color: white;
  border-bottom: 1px solid rgba(209,209,209,0.4);
`

const CompanyList = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 30%;

    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
`

const PositionList = styled.div`
  width: 25%;
`

const PersonList = styled.div`
  width: 17%;
`

const DateList = styled.div`
  width: 15%;
`

const ResultList = styled.div`
  width: 13%;
`