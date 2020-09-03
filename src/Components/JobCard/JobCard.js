import React, { useState, useEffect } from "react";
import styled from "styled-components";
import JobCardList from "./Components/JobCardList";
import mixin from "../../Styles/Mixin";
import API from "./Config";

function JobCard() {
  const [initialData, setInitialData] = useState([]);
  const [offsetData, setOffsetData] = useState(0);
  const [fetching, setFetching] = useState(false);
  const LIMIT = 20;

  const getData = async () => {
    const res = await fetch(`${API}/positions?offset=${offsetData}`);
    const getDataList = await res.json();
    setInitialData([...initialData, ...getDataList.position_list]);
    setFetching(false);
    setOffsetData(offsetData + LIMIT);
  };

  const endScrollEvent = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setFetching(true);
      return;
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", endScrollEvent);
  }, []);

  useEffect(() => {
    if (fetching && offsetData < 221) {
      getData();
      setOffsetData(offsetData + LIMIT);
    } else {
      setFetching(false);
      return;
    }
  }, [fetching]);

  return (
    <JobList>
      {initialData.length &&
        initialData.map((el) => <JobCardList key={el.id} el={el} />)}
      {fetching && <Loading>Loading...</Loading>}
    </JobList>
  );
}
const JobList = styled.ul`
  margin: -10px;
`;

const Loading = styled.div`
  ${mixin.flex("row", "center", "center")};
  margin: 0 auto;
  font-size: 25px;
`;

export default JobCard;
