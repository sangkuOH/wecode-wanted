import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import Filter from "./Components/Filter/Filter";
import Sleep from "./Sleep";
import JobCard from "../../Components/JobCard/JobCard";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";

function Salary() {
  const [data, setData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch("http://3.131.35.195:8000/companies/salary");
    // const res = await fetch('/data/filter/filter.json')
    const data = await res.json();
    await setData(data);
  };

  return (
    <SalaryContainer>
      <Nav />
      {data && <Filter data={data} />}
      <Sleep data={data} />
      <JobCard name="salary"/>
      <Footer />
    </SalaryContainer>
  );
}

export default Salary;

const SalaryContainer = styled.div`
  background-color: #f8f8fa;
`;
