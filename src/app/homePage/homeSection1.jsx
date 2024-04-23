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
              <div className=''>
              <button>Get a free qoute</button>
              <button className='border_btn ms-3'>Request a call</button>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1