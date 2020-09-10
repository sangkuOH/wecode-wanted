import React from "react";
import JobSlide from "./JobSlide/JobSlide";
import JobCard from "../../Components/JobCard/JobCard";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";

const Explore = () => {
  return(
    <>
    <Nav />
    <JobSlide />
    <JobCard />
    <Footer />
    </>
  ) 
};

export default Explore;
