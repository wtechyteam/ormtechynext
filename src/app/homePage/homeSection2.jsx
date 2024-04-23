import React from 'react'
import { marqueeImages } from '../data/marqueeData'
import Marquees from '../marquee'

const HomeSection2 = () => {
  return (
    <>
      <section className='white_bg'>
      <Marquees title={true} mapData={marqueeImages} dataType="image" />
      </section>
    </>
  )
}

export default HomeSection2