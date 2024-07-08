"use client";
import React from "react";
import "./homePageStyle.scss";
import { useMounted } from "./../../common/unmounted";
import HomeSection1 from "./homeSection1";
import HomeSection2 from "./homeSection2";
import HomeSection3 from "./homeSection3";
import HomeSection4 from "./homeSection4";
import HomeSection5 from "./homeSection5";
import HomeSection6 from "./homeSection6";
import HomeSection7 from "./homeSection7";
import HomeSection8 from "./homeSection8";
import HomeSection9 from "./homeSection9";
import HomeSection10 from "./homeSection10";
import HomeFaq from "./homeFaq";

const HomePage = () => {
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection10 />
      <HomeFaq />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
      <HomeSection9 />
    </>
  );
};

export default HomePage;