import React from "react";
import styled from "styled-components";

function Tag({ tagName }) {
  return <TagBtn>{tagName}</TagBtn>;
}

const TagBtn = styled.button`
  height: 46px;
  line-height: 46px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  margin: 0 0 10px 10px;
  padding: 0 26px;
  border: 0;
  border-radius: 25px;
  background-color: #f3f5f8;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
export default Tag;
