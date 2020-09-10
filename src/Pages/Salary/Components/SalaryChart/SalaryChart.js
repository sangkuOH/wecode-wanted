import React from 'react';
import Chart from './Chart';
import styled from 'styled-components';


function SalaryChart(props) {
  return(
    <Page>
      <Container>
        <Chart
          chartData={props.chartData}
          jobValue={props.jobValue}
          career={props.career}
          positionValue={props.positionValue}
          compare={props.compare}
        />
      </Container>
    </Page>
  )
}


export default SalaryChart;

const Page = styled.div`
  height: 400px;
  min-height: 350px;
  padding: 40px 0;
  background-color: #22bd79;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1060px;
  margin: 0 auto;
`