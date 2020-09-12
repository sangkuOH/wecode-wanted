import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

function TagItemList({ el }) {
  return (    
      <ItemList >
        <Link to={`/detail/${el.position_id}`}>
        <ItemContents>
          <ItemImg alt="company logo" src={el.logo_url} />
          <ItemText>{el.company_name}</ItemText>
        </ItemContents>
        <ItemTag>
          <span>{el.tags}</span>
        </ItemTag>
        <ItemBtn>팔로우</ItemBtn>
        </Link>
      </ItemList>
  );
}

const ItemList = styled.a`
  position: relative;
  display: block;
  width: calc(50% - 20px);
  background-color: #fff;
  border-radius: 3px;
  margin: 20px 0 0 20px;
  padding: 20px 20px 13px;
  cursor: pointer;
`;

const ItemContents = styled.div`
  position: relative;
  height: 50px;
`;

const ItemImg = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #f1f1f2;
`;

const ItemText = styled.h5`
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
  width: calc(100% - 160px);
  max-height: 50px;
  overflow: hidden;
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const ItemTag = styled.div`
  width: 100%;
  margin-top: 23px;
  font-size: 14px;
  height: 28px;
  font-weight: 400;
  line-height: 1;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  span {
    margin-right: 12px;
    line-height: 28px;
    cursor: default;
  }
`;

const ItemBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 9px 15px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  background-color: #258bf7;
  border-radius: 3px;
  border: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
export default TagItemList;
