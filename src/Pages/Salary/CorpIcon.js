import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function CorpIcon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.0.23:8000/positions/logo`)
    // fetch(`/data/salary/salary.json`)
    .then((res) => res.json())
    .then((res) => setData(res.logo_list))
  }, [])

  useEffect(()=>{
    console.log(data)
  },[data])

  const createView = (data) => {
    return data.map((el, idx) => {
      return <CorpIcons key={idx} style={{background: `url(${el.logo}) center / cover`}}/>;
    })
  }

  return (
    <Container>
        {data.length !== 0 && createView(data)}
        <Last>+3989</Last>
    </Container>
  );
}

export default CorpIcon;

const Container = styled.div`
  display: flex
`

const CorpIcons = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 6px;
  border: 1px solid #eee;
  border-radius: 3px;
`
const Last = styled.div`
  min-width: 48px;
  margin: auto;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 48px;
  color: #999;
  background: #f8f8fa;
  border: none;
  list-style: none;
`