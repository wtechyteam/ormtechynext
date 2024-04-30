import BorderBtn from '@/app/pages/common/borderBtn'
import PrimeBtn from '@/app/pages/common/primeBtn'
import Image from 'next/image'
import React from 'react';
import banner from "../../../../public/images/Hero-Image.webp";
import addImage1 from "../../../../public/images/add-img-1.png";


const HomeSection1 = () => {
  return (
    <section className={`sectionPadding  hero_banner`}>
      <div className="container top_padding">
        <div className={`row align-items-center flex-row-reverse`}>
          <div className="col-lg-6 mb-5 mb-md-5 text-center ">
            <Image
              width={640}
              height={640}
              placeholder='blur'
              quality={100}
              className='responsive_img padding_hero_img'
              src={banner}
              alt='Reputation Management Image'
              title='Reputation Management Image'
              style={{ width: "auto", height: "auto" }}
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
              <Image placeholder='blur' quality={100} width={1000} height={1000} className='add_img' src={addImage1} alt='add' title='trending company' />
              <Image placeholder='blur' quality={100} className='add_img' src={addImage1} alt='add' title='trending company' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1