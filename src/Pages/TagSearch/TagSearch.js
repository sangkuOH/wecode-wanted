import React from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import SearchBar from "./Components/SearchBar";
import Tags from "./Components/Tags";
import TagItems from "./Components/TagItems";
import Footer from "../../Components/Footer/Footer";

function TagSearch() {
  return (
    <>
      <Nav />
      <SearchPage>
        <SearchBar />
        <Tags />
        <TagItems />
      </SearchPage>
      <Footer />
    </>
  );
}

const SearchPage = styled.div`
  margin-top: 50px;
`;
export default TagSearch;
