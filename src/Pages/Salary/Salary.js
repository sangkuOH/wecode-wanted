import React, { useState, useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import Sleep from "./Sleep";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

function Salary() {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch("http://192.168.0.23:8000/companies/salary");
    // const res = await fetch('/data/filter/filter.json')
    const data = await res.json();
    await setData(data);
  };

  return (
    <SalaryContainer>
      {data && <Filter data={data} />}
      <Sleep data={data} />
      <Footer />
    </SalaryContainer>
  );
}

export default Salary;

const SalaryContainer = styled.div`
  position: relative;
  background-color: #f8f8fa;
`;
