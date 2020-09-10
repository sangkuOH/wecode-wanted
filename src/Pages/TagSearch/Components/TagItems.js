import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TagItemList from "./TagItemList";

function TagItems() {
  const [tagItemData, setTagItemData] = useState([]);

  const getData = async () => {
    const res = await fetch(`http://192.168.0.23:8000/companies/tags`);
    const tagList = await res.json();

    setTagItemData([...tagList.company_tag]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BodyColor>
      <TagItemsContainer>
        <ContainerList>
          {tagItemData.length &&
            tagItemData.map((el) => {
              return <TagItemList key={el.position_id} el={el} />;
            })}
        </ContainerList>
      </TagItemsContainer>
    </BodyColor>
  );
}

const BodyColor = styled.div`
  background-color: #f8f8fa;
`;

const TagItemsContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 50px;
    background-color: #f8f8fa;
  }
`;
export default TagItems;
