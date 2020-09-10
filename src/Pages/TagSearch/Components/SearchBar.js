import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar() {
  return (
    <SearchForm>
      <SearchInput type="search" placeholder="#태그, 회사, 포지션 검색" />
      <SearchIcon
        style={{
          position: "absolute",
          left: "15px",
          top: "45%",
          color: "#999",
          fontSize: "22px",
        }}
      />
    </SearchForm>
  );
}

const SearchForm = styled.form`
  position: relative;
  height: 96px;
  background-color: #fff;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 30px 0;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 36px 0 46px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 300;
  color: #333;
  background-color: #e8e8e8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus {
    outline: none;
  }
`;
export default SearchBar;
