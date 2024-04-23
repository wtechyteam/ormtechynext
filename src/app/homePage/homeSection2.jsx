import React from 'react'
import { marqueeImages } from '../data/marqueeData'
import Marquees from '../marquee'

const HomeSection2 = () => {
  return (
    <>
      <section className='white_bg marquee position-relative'>
      <Marquees mSpeed={30} title={true} mapData={marqueeImages} dataType="image" />
      </section>
    </>
  )
}

export default HomeSection2