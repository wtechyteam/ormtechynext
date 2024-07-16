/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from "react";
import InnerTopBanner from "../common/innerTopBanner";
// import { Container, Card, Button } from "react-bootstrap";
// import { client, urlFor } from "../../../../utils/configSanity";
// import Link from 'next/link';


const OrmTechiesInMediaPage = () => {

  return (
    <>
       <InnerTopBanner
        title="ORMTechies Insights"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/contact.png"
      /> 
     
    </> 
  );
};

export default OrmTechiesInMediaPage;
