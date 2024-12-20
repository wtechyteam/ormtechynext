'use client'
import * as React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import ImageInfoWrap from "../common/imageInfoWrap";
import HomeSection9 from "../homePage/homeSection9";
import HomeSection4 from "../homePage/homeSection4";


const ServicePage = () => {
  return (
    <>
     <head>
         <title>Our Services | Online Reputation Management Experts</title>
         <meta title="Our Services | Online Reputation Management Experts"/>
         <meta name="description" content="ORMTechies specialize in removing harmful content and managing your online image. Get expert help with online reputation management. Risk-free removal services."/>
         <link rel="canonical" href="https://www.ormtechies.com/service" />
         <meta name="robots" content="index, follow" />
       </head>
      <InnerTopBanner
        title="Our Services"
        info="If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals."
      />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"We Make Individuals & Businesses Look Great On Google"}
          imageUrl={"/images/group-business-people-with-thumbs-up-social-media-good-opinion-feedback-customer-review-concept.png"}
          primeBtnName={"get a free quote"}
          isReverse={true}
          form={true}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            `<p>A <a style='text-decoration: none; color: #212529;' href="/service/reputation-repair/knowledge-panel"> positive public perception </a> reputation can also help enhance your visibility and brand awareness and in <a style='text-decoration: none; color: #212529;' href="/service/reputation-repair/remove-results"> removing harmful content.</a>  When potential<a style='text-decoration: none; color: #212529;' href='/service/personal-branding/construction-reputation-management'> customers </a> search for your business online, what they find can have a significant impact on their perception of your brand. With internet reputation management services, you can ensure that your brand is well-represented across all digital channels, maximizing your visibility and attracting more customers to your business. </p>`
          }
        />
        
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Reputation Repair Services "}
          imageUrl={"/images/website-setup-concept-landing-page.png"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            `<p>If you're online, our<a style='text-decoration: none; color: #212529;' href="/service/reputation-repair">reputation repair services </a>can help. Our team of experts will work tirelessly to remove or suppress negative content, ensuring that your online reputation is restored to its former glory.</p>`
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Digital Reputation Management "}
          imageUrl={"/images/review-concept-landing-page-illustration.png"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            `<p>In today's digital world, your online reputation is more important than ever before. Our digital <a style='text-decoration: none; color: #212529;' href="/service/reputation-management"> reputation management services </a> are designed to help you monitor, manage, and enhance your online presence across all digital channels, from social media to search engines.</p>`
          }
        />
      </section>
      <HomeSection4 />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Reputation Marketing  "}
          imageUrl={"/images/public-relations-illustration-with-spokesperson.png"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Your online reputation is one of your most valuable assets. Our reputation marketing services can help you leverage positive reviews and testimonials to attract more customers and grow your business.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Review Management  "}
          imageUrl={"/images/2968304.jpg"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            `<p>Online reviews can have a significant impact on your business's reputation and bottom line. Our <a style='text-decoration: none; color: #212529;' href="/service/review-management">review management services</a> can help you monitor and respond to reviews across all major review sites, ensuring that your brand's reputation remains intact. `
          }
        />
      </section>
      <HomeSection9 />
    </>
  );
};

export default ServicePage;

 function generateMetadata(){
  return{
    title:"Social Media Reputation MGMT, Marketing and Repair Services",
    description:"Repair your digital reputation with our agency specializes in comprehensive reputation management services, from social media to online reviews. Call us!"
  }
}