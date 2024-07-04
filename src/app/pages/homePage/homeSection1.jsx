import BorderBtn from './../common/borderBtn'
 
import Image from 'next/image'
import React from 'react';
import HubspotForm from 'react-hubspot-form';
// import banner from "../../../../public/images/homepage/Hero-Image.png";
import addImage1 from "../../../../public/images/add-img-1.png";


const HomeSection1 = () => {
  return (
    <section className={`sectionPadding  hero_banner`}>
      <div className="container top_padding">
        <div className={`row align-items-center`}>

          <div className="col-lg-6 contentWrap mb-5 mb-lg-0">
            <h2 className='title-xxl fw-bold text-white'>
              Your Trusted Partner in Online Reputation Management
            </h2>
            <p className='title-sm text-white'> Take control of your online reputation. We offer customized ORM services for individuals and businesses. Shape your digital narrative now!</p>
            <div className='d-flex flex-wrap gap-3 mt-4 pt-3'>
              {/* <PrimeBtn btnName="Get a free quote" /> */}
              <BorderBtn btnName={"Request a call"} />
            </div>
            <div className='d-flex flex-wrap gap-3 mt-4 pt-3'>
              <Image placeholder='blur' quality={100} width={1000} height={1000} className='add_img' src={addImage1} alt='add' title='trending company' />
              <Image placeholder='blur' quality={100} className='add_img' src={addImage1} alt='add' title='trending company' />
            </div>
          </div>
          <div className="col-lg-6 text-center ">
           {/*   <Image
              width={640}
              height={640}
              placeholder='blur'
              quality={100}
              className='responsive_img padding_hero_img'
              src={banner}
              alt='Reputation Management Image'
              title='Reputation Management Image'
              style={{ width: "auto", height: "auto" }}
            />  */}
            <div className='ps-0 ps-xl-5'>
            <HubspotForm 
                portalId='46372694'
                formId='4470d94d-3abb-4cb6-8c90-e94916d164b6'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection1