import React from 'react'
import Marquees from '../marquee'
import { marqueeCardData } from '../../data/marqueeData'
import Image from 'next/image'

const HomeSection6 = () => {
  return (
    <section className=' bg_dark position-relative'>
      <div className=' image_bg'>
        <div className='content_bg sectionPadding2'>
          <div className='item_center mb-5 '>
            <Image width={40} height={40} src={'/images/Google-logo.png'} alt='img' />
            <h2 className='white_font mx-3 mb-0 text-24 font_700'>5.0</h2>
            <div className='d-flex gap-2'>
              <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' />
              <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' />
              <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' />
              <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' />
              <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' />
            </div>
            <div className='divider'></div>
            <h2 className='white_font mb-0 text-24'>Based on 240+ reviews</h2>
          </div>
          <Marquees mSpeed={60} pauseOnHover={true} mapData={marqueeCardData} dataType="card" />
        </div>
      </div>

    </section>
  )
}

export default HomeSection6