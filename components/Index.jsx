import React from "react";
import HomePage from "./HomePage";
import RecentWork from "./RecentWork";
import Image from "next/image";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import CopyRight from "./CopyRight";

const Index = () => {
  return (
    <>
      <HomePage />
      <RecentWork />
      <AboutMe />
      <Skills />
      <CopyRight />
    </>
  );
};

export default Index;
