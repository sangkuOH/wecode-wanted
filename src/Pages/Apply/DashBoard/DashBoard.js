import React, { useEffect, useState } from "react";
import ApplyList from '../ApplyList/ApplyList';
import styled from "styled-components";

function DashBoard() {
  const [ data, setData ] = useState();

  useEffect(() => {
    fetch("/data/apply/apply.json")
    .then((res) => res.json())
    .then((res) => setData(res))
  },[]);

  const sumValue = (el) => {
    const data = el.process
    let objList = [];
    for(let key in data){
      let obj = {};
      obj.name = key;
      obj.value = data[key];
      objList.push(obj);
    }
    return objList;
  }

  const createDashboard = (data) => {
    data = sumValue(data);
    return data.map((val, idx) => {
      return <dl key={idx}>
              <dt>{val.value}</dt>
              <dd>{val.name}</dd>
            </dl>
    })
  }

  return(
    <Container>
      <StatusSum>
        {data && createDashboard(data)}
      </StatusSum>
      <StatusNav>
        <StatusTotal>총 0건</StatusTotal>
        <SeachBar>
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="회사 / 지원자명 검색"></input>
        </SeachBar>
      </StatusNav>
      <ApplyList data={data}/>
    </Container>
  )
}


export default DashBoard

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(75% - 35px);
  margin: 0 20px;
  margin-bottom: 20px;
`

const StatusNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px;
`

const StatusTotal = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #3b3d40;
`

const SeachBar = styled.div`

  i {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    color: #505050;
  }

  input {
    width: 160px;
    min-height: 30px;
    margin-bottom: 20px;
    padding: 0;
    text-align: right;
    border: none;
    background: none;
    outline: none;
    font-size: 16px;
    color: #333333;
  }
`

const StatusSum = styled.div`
  display: flex;
  justify-content: space-around;
  color: #86939e;

  dl {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 157px;
    border-right: 1px solid #d1d1d1;

    &:last-of-type {
      border: none;
    }
  }

  dt {
    font-size: 40px;
    line-height: 1;
  }

  dd {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
  }
`