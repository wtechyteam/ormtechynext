
import * as React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import ImageInfoWrap from "../common/imageInfoWrap";
import HomeSection9 from "../homePage/homeSection9";
import HomeSection4 from "../homePage/homeSection4";


const ServicePage = () => {
  return (
    <>
      <InnerTopBanner
        title="Our Services"
        info="If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals."
      />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"We Make Individuals & Businesses Look Great On Google"}
          imageUrl={"/images/orm-about.webp"}
          primeBtnName={"get a free quote"}
          isReverse={true}
          form={true}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>A positive online reputation can also help enhance your visibility and brand awareness. When potential customers search for your business online, what they find can have a significant impact on their perception of your brand. With internet reputation management services, you can ensure that your brand is well-represented across all digital channels, maximizing your visibility and attracting more customers to your business. </p>"
          }
        />
        
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Reputation Repair Services "}
          imageUrl={"/images/online-reputation.webp"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>If you're online, our reputation repair services can help. Our team of experts will work tirelessly to remove or suppress negative content, ensuring that your online reputation is restored to its former glory.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Digital Reputation Management "}
          imageUrl={"/images/online-reputation.webp"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>In today's digital world, your online reputation is more important than ever before. Our digital reputation management services are designed to help you monitor, manage, and enhance your online presence across all digital channels, from social media to search engines.</p>"
          }
        />
      </section>
      <HomeSection4 />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Reputation Marketing  "}
          imageUrl={"/images/online-reputation.webp"}
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
          imageUrl={"/images/online-reputation.webp"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Online reviews can have a significant impact on your business's reputation and bottom line. Our review management services can help you monitor and respond to reviews across all major review sites, ensuring that your brand's reputation remains intact. "
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