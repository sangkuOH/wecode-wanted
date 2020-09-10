import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tag from "./Tag";

function Tags() {
  const [tagData, setTagData] = useState([]);

  const getTagData = async () => {
    const res = await fetch(`http://3.131.35.195:8000/companies/recommend`);
    const getDataList = await res.json();
    setTagData([getDataList.tags]);
  };

  useEffect(() => {
    getTagData();
  }, []);

  return (
    <TagsContainer>
      <TagMenu>
        <Reco>추천</Reco>
        {tagData[0]?.map((el) => (
          <Tag key={el.tag_id} tagName={el.tag_name} />
        ))}
      </TagMenu>
    </TagsContainer>
  );
}

const TagsContainer = styled.div`
  padding-bottom: 24px;
  background-color: #fff;
  /* text-align: center; */
`;

const TagMenu = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1060px;
  margin: 0 auto;
  overflow: hidden;
`;

const Reco = styled.h4`
  font-weight: 400;
  line-height: 42px;
  margin-right: 6px;
  font-size: 14px;
  color: #111;
`;
export default Tags;
