import React from 'react'
import Marquees from '../marquee'
import { marqueeImages } from './../../data/marqueeData'

const HomeSection2 = () => {
  return (
    <>
      <section className='white_bg marquee position-relative'>
        {/* <div className='image_bg'> */}
          {/* <div className='content_bg'> */}
            <Marquees mSpeed={30} title={true} mapData={marqueeImages} dataType="image" />
          {/* </div> */}
        {/* </div> */}
      </section>
    </>
  )
}

export default HomeSection2