import Image from 'next/image'
import React from 'react'
import "./homePageStyle.scss"
import HomeSection1 from './homeSection1'
import HomeSection2 from './homeSection2'
import HomeSection3 from './homeSection3'
import HomeSection4 from './homeSection4'
import HomeSection5 from './homeSection5'
import HomeSection6 from './homeSection6'
import HomeSection7 from './homeSection7'

const HomePage = () => {
  return (
    <>
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
    </>
  )
}

export default HomePage