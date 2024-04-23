import BorderBtn from '@/common/borderBtn'
import PrimeBtn from '@/common/primeBtn'
import Image from 'next/image'
import React from 'react';
import banner from "./../../../public/images/Hero-Image.webp";


const HomeSection1 = () => {
  return (
    <section className={`sectionPadding hero_banner`}>
      <div className="container">
        <div className={`row align-items-center flex-row-reverse`}>
          <div className="col-md-6 mb-5 mb-md-0 text-center">
            <Image 
              loading='lazy'
              src={banner} 
              alt='side-img' 
            />
          </div>
          <div className="col-md-6 hero_heading">
            <h2 className='title-xl fw-bold '>
              When your reputation is on the line, you can rely on Removify
            </h2>
            <p>Remove unwanted online content quickly and efficiently.
              If we {"don't"} succeed, you {"don't"} pay.</p>
            <div className='mt-5'>
              <PrimeBtn btnName="Get a free qoute" />
              <BorderBtn btnName={"Request a call"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1