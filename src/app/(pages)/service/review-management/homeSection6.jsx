import React from 'react';
import Marquees from '../../marquee/index';
import Image from 'next/image';
import { marqueeCardData } from './../../../data/marqueeData';
import { Col, Row } from 'react-bootstrap';

const HomeSection6 = () => {
  return (
    <section className=' bg_dark position-relative'>
      <div className=' image_bg'>
        <div className='content_bg sectionPadding2'>
          <div className='d-flex justify-content-center align-items-center mb-5 container'>
                <Image width={40} height={40} src={'/images/Google-logo.png'} alt='img' title='rating logo' />
                <h2 className='text-white mx-3 mb-0 text-24 fw-bold'>5.0</h2>
                <div className='d-flex gap-2'>
                  <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                  <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                  <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                  <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                  <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                </div>
                <div className="d-flex align-items-center">
                  <div className='divider mx-3'></div>
                  <h2 className='text-white mb-0 text-24'>Based on 240+ reviews</h2>
                </div>
          </div>
          <Marquees mSpeed={60} pauseOnHover={true} mapData={marqueeCardData} dataType="card" />
        </div>
      </div>
    </section>
  )
}

export default HomeSection6