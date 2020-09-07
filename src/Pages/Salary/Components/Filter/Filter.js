import React, { useRef, useState, useEffect } from 'react';
import SalaryChart from '../SalaryChart/SalaryChart';
import styled from 'styled-components';


function Filter(props) {
  const [ job, setJob ] = useState();
  const [ position, setPosition ] = useState();
  const [ career, setCareer ] = useState();
  const [ chartData, setChartData] = useState();
  const jobSelect = useRef();
  
  let salrayList = props.data.salary_list;
  
  useEffect(()=>{
    setJob(getFirstDepth());
    setPosition(getSecondDepth('개발'));
    setChartData(getSalary('개발', '파이썬 개발자'));
  },[]);

  //직업 대분류 셀렉트박스
  const getFirstDepth = () => {
    let mainCategory = new Set();
    salrayList.forEach(obj => {
      let job = obj.main_category;
      mainCategory.add(job);
    });
    return Array.from(mainCategory);
  }

  //직업 소분류 셀렉트박스
  const getSecondDepth= (value) => {
    let subCategory = new Set();
    salrayList.forEach(obj => {
      if(obj.main_category === value){
        subCategory.add(obj.sub_category);
      }
    });
    return Array.from(subCategory);
  }
  
  //연차 별 연봉 데이터
  const getSalary = (main, sub) => {
    let salary = [];
    salrayList.forEach(obj => {
      if((obj.main_category === main) && (obj.sub_category === sub)){
        salary = obj.salary;
      }
    });
    return salary;
  };

  const onChange = (e) => {
    if(e.target.name === "job"){
      setPosition(getSecondDepth(e.target.value));
    } else if (e.target.name === "position"){
      setChartData(getSalary(jobSelect.current.value,  e.target.value));
    } else {
      setCareer(e.target.value)
    }
  }

  const firstDepthOption = (data) => {
    return(
      <Item>
        <ItemWrap>
          <Content ref={jobSelect} name={'job'} onChange={onChange}>
          {
            data.map((val) => {
            return <option>{val}</option>
            })
          }
          </Content>
        </ItemWrap>
      </Item>
    )
  }
  const sencondDepthOption = (data) =>{
    return(
      <Item>
        <ItemWrap>
          <Content name={'position'} onChange={onChange}>
          {
            data.map((val) => {
            return <option>{val}</option>
            })
          }
          </Content>
        </ItemWrap>
      </Item>
    )
  }

  const careerDepthOption = (data) => {
    return(
      <Item>
        <ItemWrap>
          <Content name={'career'} onChange={onChange}>
            {data && data.map(el => {
              if (el === "0" ){
                return <option>신입</option>
              } else if (!isNaN(el)) {
                return <option>{`${el}년`}</option>
              }
              return <option>{el}</option>}
            )}
          </Content>
        </ItemWrap>
      </Item>
    )
  }

  return (
    <Page>
      {chartData && < SalaryChart chartData={chartData} />}
      <Container>
        <Box>
          {job && firstDepthOption(job)}
          {position && sencondDepthOption(position)}
          {chartData && careerDepthOption(Object.keys(chartData), "career")}
          <Item>
            <input disabled={ career ? false : true } type="text" placeholder="연봉" />
          </Item>
        </Box>
      </Container>
    </Page>
  );
}

export default Filter;

const Page = styled.div `
  left: 0;
  right: 0;
  bottom: -24px;
`

const Container = styled.div `
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: -1%;
`

const Box = styled.ul `
  height: 44.5px;
  background: #FFFFFF;
  box-shadow: 0 2px 2px 0 rgba(1,1,1,0.2);
`

const Item = styled.li`
  position: relative;
  display: inline-block;
  width: 25%;
  border-right: 1px solid #EEEEEE;

  input {
    width: 100%;
    margin-bottom: 0;
    padding: 13px 15px;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    font-size: 16px;
    color: #333333;
    appearance: none;
    outline: none;
  }
`

const Content = styled.select`
  width: 100%;
  margin-bottom: 0;
  padding: 13px 15px;
  appearance: none;
  outline: none;
  resize: none;
  color: #333333;
  font-size: 16px;
  border: 0;
  border-radius: 0;

  option {
    color: rgb(170, 170, 170);
  }
`

const ItemWrap = styled.span `

  ::after{
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 15px;
    content: '';
    border-top: 6px solid #B5B5B5;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
  }
`