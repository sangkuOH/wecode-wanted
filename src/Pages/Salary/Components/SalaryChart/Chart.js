import React, { useRef, useState, useEffect } from 'react';
import {easeCircleInOut, range, max, select, axisBottom, axisLeft, scaleLinear, scaleBand, selectAll } from "d3";
import styled from 'styled-components';

function Chart(props) {

  const [ data, setData ] = useState([]);
  const svgRef = useRef();
  const [ svg, setSvg ] = useState({});

  useEffect(()=>{
    setData(convertChartData(props.chartData))
  },[props.chartData])

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
    setSvg(svg);
  }, [data])

  useEffect(() => {
    const svg = select(svgRef.current);
    svg.selectAll("svg > *").remove();
    let height = 330
    let width = 790
    let margin = ({top: 30, right: 0, bottom: 30, left: 40});
    let color = "black"
    
    let x = scaleBand()
      .domain(range(data.length))
      .range([margin.left, width - margin.right])
      .padding(0.7)

    let y = scaleLinear()
      .domain([0, max(data, d => d.value) < 6000 ? 6000 : max(data, d => d.value)  ])
      .range([height - margin.bottom, margin.top])

    let xAxis = g => g
      .attr('class', 'xAxis')
      .attr("transform", `translate(0,${height - margin.bottom})`)
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
    
    let yGrid = axisLeft(y).tickSize(-width).tickFormat('').ticks(6)

    svg
      .append("g")
        .attr("fill", color)
      .selectAll("rect")
      .data(data)
      .join("rect")
        .attr("class", "bar")
        .style("opacity", "0.1")
        .attr("x", (d, i) => x(i))
        .attr("y", d => y(0))
        .attr("width", x.bandwidth())
        .on("mouseenter", (e, idx) => {
          svg
            .selectAll(".tooltip")
            .data([e])
            .append("text")
            .attr("class", "tooltip")
            console.log("마우스 오버")
        })
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

  return(
    <Svg ref={ svgRef } />
  )
}

export default Chart

const Svg = styled.svg `
  height: 100%;
  width: 100%;
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
`