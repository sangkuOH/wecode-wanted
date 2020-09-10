import React, { useRef, useState, useEffect } from 'react';
import {easeCircleInOut, range, max, select, axisBottom, axisLeft, scaleLinear, scaleBand, selectAll } from "d3";
import styled from 'styled-components';


function Chart({ chartData, jobValue, career, positionValue, compare }) {

  const [ data, setData ] = useState([]);
  const svgRef = useRef();
  const [ svgData, setSvgData ] = useState({});
  const [ focus, setFocus ] = useState();
  const [ job, setJob ] = useState();
  const [ salaryValue, setSalaryValue ] = useState();
  const [ position, setPosition ] = useState();
  const [ compareSalary, setCompareSalary ] = useState();

  const HEIGHT = 330
  const WIDTH = 790
  const margin = ({top: 30, right: 0, bottom: 30, left: 40});
  const color = "black"

  const svg = select(svgRef.current);

  let x = scaleBand()
      .domain(range(data.length))
      .range([margin.left, WIDTH - margin.right])
      .padding(0.7)

  let y = scaleLinear()
    .domain([0, max(data, d => d.value) < 6000 ? 6000 : max(data, d => d.value)])
    .range([HEIGHT - margin.bottom, margin.top])

  const getSalaryValue = ( data, focus ) => {
    let value;
    if(!data.length) return false
      data.forEach(el => {
        if(el.name === focus){
          value = el.value;
        }
      });
      return value;
  }

  useEffect(()=>{
    setData(convertChartData(chartData))
    setJob(jobValue)
    setSalaryValue(salaryComma(getSalaryValue(convertChartData(chartData), career)))
    setCompareSalary(getSalaryValue(convertChartData(chartData), career))
    setPosition(positionValue)
    setFocus(career)
  },[chartData])

  useEffect(()=>{
    setSalaryValue(salaryComma(getSalaryValue(convertChartData(chartData), career)))
    setCompareSalary(getSalaryValue(convertChartData(chartData), career))
  },[career])
  
  const salaryComma = (num) => {
    return num ? num.toLocaleString() : "";
  }

  const convertChartData = (chartData) =>{
    let tempData = [];
    chartData.forEach(element => {
      let name = '';
      let value = element[1];
      if(element[0] === 0){
        name = '신입';
      }else{
        name = element[0]+'년';
      }
      tempData.push({"name" : name, "value" : value});
    });
    return tempData;
  }
  
  useEffect(() => {
    setSvgData(svg);
  }, [data, career])

  useEffect(() => {
    svg.selectAll("svg > *").remove();

    let xAxis = g => g
      .attr('class', 'xAxis')
      .attr("transform", `translate(0,${HEIGHT - margin.bottom})`)
      .call(axisBottom(x).tickFormat(i => data[i].name).tickSizeOuter(0))
      
    let yAxis = g => g
      .attr('class', 'yAxis')
      .attr("transform", `translate(${margin.left},0)`)
      .call(axisLeft(y).ticks(6))
      .call(g => g.append("text")
      .attr("x", -margin.left)
      .attr("y", 10)
      .attr("fill", "currentColor")
      .attr("text-anchor", "start")
      .text(data.y))
      .transition()
    
    let yGrid = axisLeft(y).tickSize(-WIDTH).tickFormat('').ticks(6)
    
    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("class", "bar")
        .style("opacity", "0.1")
        .attr("fill", "color")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(0))
        .attr("width", x.bandwidth())
        .on("mouseenter", (e, idx) => {
          svg
            .selectAll(".tooltipSal")
            .data([e])
            .join("text")
            .attr("class", "tooltipSal")
            .attr("id", "tooltip")
            .text(`${idx.value.toLocaleString()}원`)
            .attr("x", e => e.target.attributes.x.value - 8)
            .attr("y", e => e.target.attributes.y.value - 8)
            .transition(0.5, 0.5, 0.1, 0)
            .attr("opacity", 1)
            .attr("background-image", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp3oIy09_1lJc1eY63iLZhUsp5ZcpHWL_kiA&usqp=CAU")
          svg
            .selectAll(".tooltipYear")
            .data([e])
            .join("text")
            .attr("class", "tooltipYear")
            .attr("id", "tooltip")
            .text(idx.name)
            .attr("x", e => e.target.attributes.x.value - 8)
            .attr("y", e => e.target.attributes.y.value - 30)
            .transition(0.5, 0.5, 0.1, 0)
            .attr("opacity", 1)
        })
        .on("mouseleave", () => svg.selectAll("#tooltip").remove())
        .transition()
          .duration(1000)
          .ease(easeCircleInOut)
          .attr("y", d => y(d.value))
          .attr("height", d => y(0) - y(d.value) )
          
    svg.append("g")
    .call(xAxis)

    svg.append("g")
    .call(yAxis)

    svg.append("g")
    .attr('class', 'y axis-grid')
    .call(yGrid)
    .style("transform", "translateX(30px)")
  },[data])

  useEffect(()=> {
    svg.selectAll(".compareSal").remove();
    svg
    .append("g")
    .selectAll(".compareSal")
    .data(data)
    .join("rect")
      .attr("class", "compareSal")
      .style("opacity", "1")
      .attr("fill", "white")
      .attr("x", x(data.findIndex(({name}) => name === career)))
      .attr("width", x.bandwidth())
      .attr("y", 290*(1 - (+compare/6500)))
      .attr("height", 10 )
  },[compare])

  useEffect(()=>{
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("class", "bar")
        .style("opacity", function(d){
          if(d.name === career){
            return "0.5"
          }else {
            return "0.1"
          } 
        })
        .attr("fill", function(d){
          if(d.name === career){
            return "white"
          }else {
            return color
          }
        })
  },[data, career])

  return(
    <ChartContainer>
      <Svg ref={ svgRef }/>
      <SumContainer>
        <span>
          <Job>{job}</Job>
          <Position>{position}</Position>
        </span>
        <Expected>{`${focus} ${position} 예상연봉`}</Expected>
        <SalaryValue className={ position ? "active" : "" } >{salaryValue}<sub>만원</sub></SalaryValue>
        <Compare className={ compare ? "active" : "" }>
          <sub>*</sub>
          <span>{
            100 - parseInt(((+compare) / (compareSalary)) * 100) > 0
            ? `${focus} 경력 예상 연봉 대비 ${100 - parseInt(((+compare) / (compareSalary)) * 100)}% 낮음`
            : `${focus} 경력 예상 연봉 대비 ${Math.abs(100 - parseInt(((+compare) / (compareSalary)) * 100))}% 높음`
          }</span>
        </Compare>
      </SumContainer>
    </ChartContainer>
  )
}


export default Chart

const ChartContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`
const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  width: calc(25% - 25px);
`

const Svg = styled.svg`
  height: 100%;  
  width: 74.5%;
  margin: 0;

  .y path {
    display: none
  }

  path {
    opacity: 0.1;
  }

  .tick line {
    opacity: 0.1;
  }

  .xAxis, .yAxis {

    .tick line {
      opacity: 0;
    }
  }

  #tooltip {
    fill: white;
    font-size:15px;
    font-weight: 600;
    
    .compareSal {
      width: 50px;
      height: 20px;
    }
  }
`

const Job = styled.button`
  margin-bottom: 10px;
  padding: 8px 10px;
  color: #22bd79;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  background-color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`

const Position = styled.button`
  margin-bottom: 10px;
  padding: 8px 10px;
  color: #22bd79;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  background-color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
`

const Expected = styled.span`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.8;
  white-space: pre-wrap;
`

const SalaryValue = styled.span`
  line-height: 1.4;
  color: #FFFFFF;
  font-size: 40px;
  font-weight: 700;
  margin: 0;

  sub {
    bottom: 0;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
`

const Compare = styled.div`
  display: none;
  margin: 10px 0 0 10px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  white-space: pre-wrap;

  &.active {
    display: block;
    white-space: nowrap;
  }
`