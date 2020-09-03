import React from 'react';
import styled from 'styled-components';
import Chart from './Chart';

function SalaryChart(props) {
  return(
    <Page>
      <Container>
        <Chart chartData={props.chartData}/>
      </Container>
    </Page>
  )
}

export default SalaryChart;

const Page = styled.div `
  height: 400px;
  min-height: 350px;
  padding: 40px 0;
  background-color: #22bd79;
`

const Container = styled.div `
  width: 100%;
  height: 100%;
  max-width: 1060px;
  margin: 0 auto;
`