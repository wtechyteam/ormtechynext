
import React from "react";
import Head from 'next/head';
import ImageInfoWrap from "../common/imageInfoWrap";
// import { useMounted } from "../../common/unmounted";
import PrimeBtn from "../common/primeBtn";
import HomeSection6 from "./homeSection6";

const AboutUsPage = () => {
  // const mounted = useMounted();
  // if (!mounted) return null; 

  return (
    <>
      <head>
        <title>Reputation Experts & Reputation Management Consultants</title>
        <meta name="description" content="Trusted reputation management consultants offer tailored services for businesses and individuals, from review management to complaint resolution. Call now!" />
        <link rel="canonical" href="https://www.ormtechies.com/about-us" />
        <meta name="robots" content="index, follow" />
      </head> 

      <div>
        {/* about-image-banner */}
        <div className="about_banner">
          <div className="blur_bg about_row">
            <div className="about_col item_center" lg={6}>
              <div className="hero_heading about_banner_padding">
                <h2 className="title-xl fw-bold text-white mt-5">
                  We Build Your Online Success
                </h2>
                <p className="text-16 text-white mt-4">
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
            <div className="about_banner about_col hide_1000" ></div>
          </div>
        </div>
        {/* image-content-section */}
        <section className="sectionPadding bg_gray">
  <ImageInfoWrap
    title={"Empowering Your Online Image: Meet ORM Techies"}
    imageUrl={"./images/about1.png"}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={`
      <p>We're more than just a reputation management company; we're your partners in success. Our dedication to excellence has earned us recognition within the industry, including great reputation management consultants reviews. We constantly push the boundaries of ORM to deliver real results. Trust our expertise and technology to positively impact your online reputation, always working in your best interests.</p>
      <p>We understand the challenges you face online – the negative reviews, the unwarranted complaints, the malicious trolls. Our customized ORM services address your specific needs, including handling reputation management consultant complaints. We remove unfavorable posts on respected websites like <a style='text-decoration: none; color: #212529;' href='/service/review-management/remove-glassdoor-reviews'>Glassdoor</a> and Trustpilot and craft personalized strategies to ensure your online reputation reflects the best of who you are.</p>
    `}
  />
</section>
        {/* Second ImageInfoWrap */}
        <section className="sectionPadding bg_gray">
          <ImageInfoWrap
            title={"We Build Your Online Success"}
            imageUrl={"./images/about2.png"}
            showPrimeBtn={true}
            primeBtnName={"get a free quote"}
            isReverse={true}
            borderBtnName={"faq"}
            darkButton="dark_btn"
            description={
              "<p>We're more than just a reputation management company; we're your partners in success. Our dedication to excellence has earned us recognition within the industry, including great reputation management consultants reviews, we constantly pushing the boundaries of ORM to deliver <a style='text-decoration: none; color: #212529;' href='/service/reputation-repair/improve-reviews'>improved results</a>. Trust our expertise and technology to positively impact your online reputation, always working in your best interests. </p><p>Your online reputation matters. Trust ORM Techies, your <a style='text-decoration: none; color: #212529;' href='service/reputation-repair'>reputation repair </a>company, to shape your digital narrative. Ready to upgrade? Contact us for a free consultation and achieve your digital goals. Join us and let's build a better online future together.</p>"
            }
          />
        </section>

        <HomeSection6 />
      </div>
    </>
  );
};

export default AboutUsPage;

export function generateMetaData() {
  return {
    title: 'Reputation Experts & Reputation Management Consultants',
    description: 'Trusted reputation management consultants offer tailored services for businesses and individuals, from review management to complaint resolution. Call now!',
    canonical: 'https://www.ormtechies.com/about-us',
    robots: 'index,follow'
  };
}

