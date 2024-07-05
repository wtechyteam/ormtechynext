'use client'
import React from "react";
import ImageInfoWrap from "./../common/imageInfoWrap";
import PrimeBtn from "./../common/primeBtn";
import HomeSection6 from "./homeSection6";

const AboutUsPage = () => {
  return (
    <div>
      {/* about-image-banner */}
      <div className="about_banner">
        <div className="blur_bg about_row">
          <div className="about_col item_center" lg={6}>
            <div className="hero_heading about_banner_padding">
              <h2 className="title-xl fw-bold text-white">
                We Build Your Online Success
              </h2>
              <p className="text-16 text-white">
                At ORM Techies, we are the reputation experts and guardians of
                your online narrative. Driven by a passion for fairness and
                fueled by the best expertise, our mission is to help you take
                control of your online reputation.
                <br />
                <br />
                Whether you’re an individual or a business, we have the tools
                and know-how to boost your brand and safeguard your image.
              </p>
              <PrimeBtn btnName={"get a quote"} />
            </div>
          </div>
          <div className="about_banner about_col hide_1000"></div>
        </div>
      </div>
      {/* image-content-section */}
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Empowering Your Online Image: Meet ORM Techies"}
          imageUrl={"/images/orm-about.webp"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>We're more than just a reputation management company; we're your partners in success. Our dedication to excellence has earned us recognition within the industry, including great reputation management consultants reviews, we constantly pushing the boundaries of ORM to deliver real results. Trust our expertise and technology to positively impact your online reputation, always working in your best interests.</p>"
          }
        />
      </section>
      {/* marquee-card section */}
      {/* 
      <section className=' bg_dark position-relative'>
        <div className=' image_bg'>
          <div className='content_bg sectionPadding2'>
            <div className='item_center mb-5 container'>
              <Row>
                <Col md={6} className="item_center flex-wrap mb-md-0 mb-2">
                  <Image width={40} height={40} src={'/images/Google-logo.png'} alt='img' title='rating logo' />
                  <h2 className='text-white mx-3 mb-0 text-24 fw-bold'>5.0</h2>
                  <div className='d-flex gap-2'>
                    <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                    <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                    <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                    <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                    <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                  </div>
                </Col>
                <Col md={6} className="item_center position-relative">
                  <div className='divider'></div>
                  <h2 className='text-white mb-0 text-24 no_wrap ms-0 ms-md-2'>Based on 240+ reviews</h2>
                </Col>
              </Row>
            </div>
            <Marquees mSpeed={60} pauseOnHover={true} mapData={marqueeCardData} dataType="card" />
          </div>
        </div>
      </section> 
      */}
      {/* Second ImageInfoWrap */}
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"We Exist To Fight Trolls"}
          imageUrl={"/images/orm-about.webp"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          isReverse={true}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Your online reputation matters. Trust ORM Techies, your reputation experts, to shape your digital narrative. Ready to upgrade? Contact us for a free consultation and achieve your digital goals. Join us and let's build a better online future together. </p>"
          }
        />
      </section>

      <HomeSection6 />
    </div>
  );
};

export default AboutUsPage;
