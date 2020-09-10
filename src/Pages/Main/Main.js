import React from "react";
import Nav from "../../Components/Nav/Nav";
import MainContainer from "./Components/MainContainer/MainContainer";
import Footer from "../../Components/Footer/Footer";

function Main() {
  return (
    <div className="Main">
      <Nav />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default Main;
