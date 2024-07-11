'use client'
import React from 'react';
import InnerTopBanner from "./../common/innerTopBanner";
// import GlassdoorFaq from "./glassdoorFaq";
import ImageInfoWrap from "./../common/imageInfoWrap";
import HomeSection9 from "./homeSection9";

const AmplifyReviewsPage = () => {
  return (
    <>
    <head>
         <title>From Reviews to Results: Get Insightful Glassdoor Reviews  </title>
         <meta name="description" content="Discover how we can help you transform Glassdoor reviews into actionable insights. Learn strategies to manage, respond, and remove negative reviews effectively. "/>
         <link rel="canonical" href="https://www.ormtechies.com/content-removal/glassdoor" />
         <meta name="robots" content="index, follow" />
       </head>
       <InnerTopBanner
         title="Amplify Reviews "
         info="Let your happy customers drive your marketing for you with AMPLIFY and manage it all from our Review Optimization Platform "
       />
       <section className="sectionPadding bg_gray">
         <ImageInfoWrap
           title={"Reviews Build Reputation "}
           imageUrl={"/images/orm-about.webp"}
           showPrimeBtn={true}
           primeBtnName={"get a free quote"}
           borderBtnName={"faq"}
           darkButton="dark_btn"
           description={
             `<p>Positive customer reviews are the crucial "social proof" you need for a winning online reputation. With AMPLIFY, collecting positive reviews has never been easier.</p><p>AMPLIFY provides a streamlined platform to efficiently generate and manage authentic customer reviews. Customized to fit your business, it automates feedback requests, making the review process simple and user-friendly for your customers.</p>`
           }
         />
       </section>
       <section className="sectionPadding bg_white">
         <ImageInfoWrap
           title={"Drive More Growth Through 5-Star Ratings "}
           imageUrl={"/images/orm-about.webp"}
           showPrimeBtn={true}
           isReverse={true}
           primeBtnName={"get a free quote"}
           borderBtnName={"faq"}
           darkButton="dark_btn"
           description={
             "<p>With AMPLIFY, you can enhance your business’s reputation and attract more customers while proactively managing online reviews.<ul><li>93% of local consumers rely on reviews for evaluating a businesses.<li>AMPLIFY facilitates customer review prompts.<li>White-labeled monthly report for brand perception insights.<li>The data supports the development of a tailored business strategy.<li>AMPLIFY enables consistent review collection.</ul> </p>"
           }
         />
       </section>
       <section className="sectionPadding bg_gray">
         <ImageInfoWrap
           title={"Tailored to Your Preferences "}
           imageUrl={"/images/orm-about.webp"}
           showPrimeBtn={true}
           primeBtnName={"get a free quote"}
           borderBtnName={"faq"}
           darkButton="dark_btn"
           description={
             "<p>Customising the AMPLIFY platform to your business needs is vital for success. Statistics shows the importance of tailored messaging for enhancing online reputation.<ul><li>Modify branding, SMS and email messages, email templates, timing, review rating thresholds, and review platforms.<li>Tailoring your review campaign can lead to increased results and usually achieve more positive reviews from satisfied customers.<li>A customised approach can strengthen customer loyalty and engagement.<li>Concentrate on review platforms most pertinent to your industry for improved campaign effectiveness.</ul></p>"
           }
         />
       </section>
       {/* <GlassdoorFaq /> */}
       <HomeSection9 />
     </>
  )
}

export default AmplifyReviewsPage