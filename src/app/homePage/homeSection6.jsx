import React from 'react'
import Marquees from '../marquee'
import { marqueeCardData } from '../data/marqueeData'

const HomeSection6 = () => {
  return (
    <section className='sectionPadding2 bg_dark'>
        <Marquees pauseOnHover={true} mapData={marqueeCardData} dataType="card"/> 
    </section>
  )
}

export default HomeSection6