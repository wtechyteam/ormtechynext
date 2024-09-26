'use client'
import React from "react";
import { Helmet } from "react-helmet";
import "./homePageStyle.scss";
import { homepageMetaData } from './homepageMetaData';
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
  const metadata = homepageMetaData();

  if (!mounted) return null;

  return (
    <>
      <Helmet>
        <title>Online Reputation Management Services | ORM Techies </title>
        <meta name="description" content="Trusted Online Reputation Management Services by ORM Techies. Specializing in personal branding, reputation repair, and proactive management. Contact us now!" />
      </Helmet>
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
