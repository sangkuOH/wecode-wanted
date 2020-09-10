import React from 'react';
import Chart from './Chart';
import styled from 'styled-components';


function SalaryChart({chartData, jobValue, career, positionValue, compare}) {
  return(
    <Page>
      <Container>
        <Chart
          chartData={chartData}
          jobValue={jobValue}
          career={career}
          positionValue={positionValue}
          compare={compare}
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