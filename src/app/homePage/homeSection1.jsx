import BorderBtn from '@/common/borderBtn'
import PrimeBtn from '@/common/primeBtn'
import Image from 'next/image'
import React from 'react';
import banner from "./../../../public/images/Hero-Image.webp";
import addImage1 from "./../../../public/images/add-img-1.png";


const HomeSection1 = () => {
  return (
    <section className={`sectionPadding2 pb-1 hero_banner`}>
      <div className="container top_padding">
        <div className={`row align-items-center flex-row-reverse`}>
          <div className="col-lg-6 mb-5 mb-md-5 text-center ">
            <Image
              className='responsive_img padding_img'
              loading='lazy'
              src={banner}
              alt='side-img'
            />
          </div>
          <div className="col-lg-6 hero_heading">
            <h2 className='title-xxl fw-bold white_font'>
              Your Trusted Partner in Online Reputation Management
            </h2>
            <p className='title-sm white_font margin_bottom_40'> Take control of your online reputation. We offer customized ORM services for individuals and businesses. Shape your digital narrative now!</p>
            <div className='d-flex flex-wrap gap-3'>
              <PrimeBtn btnName="Get a free qoute" />
              <BorderBtn btnName={"Request a call"} />
            </div>
            <div className='d-flex flex-wrap gap-3 my-5'>
              <Image className='add_img' src={addImage1} alt='add' />
              <Image className='add_img' src={addImage1} alt='add' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1