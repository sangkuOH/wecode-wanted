import React, { useState, useEffect } from "react";
import DetailProps from "./DetailProps";
import DetailPageSub from "./DetailPageSub";
import styled from "styled-components";

const DetailPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://192.168.0.23:8000/positions/${106}`)
      .then((res) => res.json())
      .then((res) => setData([res.detail]));
  }, []);

  return (
    <DetailPageContainer>
      <DetailBox>
        <DetailPageMain>
          {data?.map((el, idx) => (
            <DetailProps {...el} key={el[idx]} img={el.img[0]} />
          ))}
        </DetailPageMain>
        <DetailPageSub />
      </DetailBox>
    </DetailPageContainer>
  );
};

const DetailPageMain = styled.div`
  width: 660px;
  height: 100%;
  margin-right: 18px;
`;

const DetailPageContainer = styled.div`
  width: 1060px;
  height: 100%;
  margin: 0 auto;
`;

const DetailBox = styled.div`
  display: flex;
  width: 1060px;
  height: 100%;
  margin-top: 30px;
`;

export default DetailPage;
