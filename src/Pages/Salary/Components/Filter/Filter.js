import React, { useRef, useState, useEffect } from 'react';
import SalaryChart from '../SalaryChart/SalaryChart';
import styled from 'styled-components';


function Filter(props) {
  const [ job, setJob ] = useState();
  const [ position, setPosition ] = useState();
  const [ career, setCareer ] = useState("");
  const [ chartData, setChartData] = useState();
  const [ jobValue, setJobValue] = useState("개발");
  const [ positionValue, setPostionValue ] = useState("파이썬 개발자");
  const [ compare, setCompare ] = useState();
  const jobSelect = useRef();

  const salrayList = props.data.salary_list;

  useEffect(() => {
    setJob(getFirstDepth());
    setPosition(getSecondDepth('개발'));
    setChartData(getSalary('개발', '파이썬 개발자'));
  },[]);

  const getFirstDepth = () => {
    let mainCategory = new Set();
    salrayList.forEach(obj => {
      mainCategory.add(obj.main_category);
    });
    return [...mainCategory];
  }

  const getSecondDepth= (value) => {
    const subCategory = new Set();
    salrayList.forEach(obj => {
      if(obj.main_category === value){
        subCategory.add(obj.sub_category);
      }
    });
    return [...subCategory];
  }
  
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
    const { name, value } = e.target;
    if(name === "job"){
      setPosition(getSecondDepth(value));
      setJobValue(value);
    } else if (name === "position"){
      setChartData(getSalary(jobSelect.current.value, value));
      setPostionValue(value);
    } else if (name === "career"){
      setCareer(value);
    } else {
      setCompare(value);
    }
  }

  const firstDepthOption = (data) => {
    return(
      <Item>
        <ItemWrap>
          <Content ref={jobSelect} name={'job'} onChange={onChange}>
          {
            data.map((val, idx) => {
            return <option key={idx}>{val}</option>
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
          <Content name="position" onChange={onChange}>
          { 
            data.map((val, idx) => {
            return <option key={idx}>{val}</option>
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
          <Content career={career} name="career" onChange={onChange}>
          <option disabled selected>경력</option>
            {data && data.map((el, idx) => {
              if (el === "0" ){
                return <option key={idx}>신입</option>
              } else if (!isNaN(el)) {
                return <option key={idx}>{`${el}년`}</option>
              }
              return <option key={idx}>{el}</option>}
            )}
          </Content>
        </ItemWrap>
      </Item>
    )
  }

  return (
    <Page>
      {chartData && < SalaryChart 
        chartData={chartData}
        jobValue={jobValue}
        career={career}
        positionValue={positionValue}
        compare={compare}
      />}
      <Container>
        <Box>
          {job && firstDepthOption(job)}
          {position && sencondDepthOption(position)}
          {chartData && careerDepthOption(Object.keys(chartData), "career")}
          <Item className={career ? "currency" : ""} >
            <input className={career ? "active" : ""} disabled={ career ? false : true } type="number" placeholder="연봉" onChange={onChange} />
          </Item>
        </Box>
      </Container>
    </Page>
  );
}


export default Filter;

const Page = styled.div`
  left: 0;
  right: 0;
  bottom: -24px;
`

const Container = styled.div`
  width: 87.72%;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: -1%;
`

const Box = styled.ul`
  height: 44.5px;
  background: #FFFFFF;
  box-shadow: 0 2px 2px 0 rgba(1,1,1,0.2);
`

const Item = styled.li`
  position: relative;
  display: inline-block;
  width: 25%;
  -webkit-appearance: none;
  margin: 0;
  border-right: 1px solid #EEEEEE;

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &.currency::after {
    position: absolute;
    top: 33%;
    right: 15px;
    content: "만원";
    color: #B5B5B5;
  }

  input {
    width: 100%;
    padding: 13px 15px;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    font-size: 16px;
    color: #333333;
    outline: none;
    cursor: not-allowed;
    
    &.active {
      cursor: auto;
    }
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

  &.default {
    color: rgb(170, 170, 170);
  }
`

const ItemWrap = styled.span`

  &::after {
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