
import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import ImageInfoWrap from "../common/imageInfoWrap";
import HomeSection3 from "./homeSection3";
import HomeSection6 from "../homePage/homeSection6";




const ReputationAndReviewMonitoring = () => {
  return (
    <>
     <head>
         <title>Reputation and Review Monitoring For Your Brand </title>
         <meta title="Reputation and Review Monitoring For Your Brand"/>
         <meta name="description" content="Discover how we can help you transform Glassdoor reviews into actionable insights. Learn strategies to manage, respond, and remove negative reviews effectively. "/>
         <link rel="canonical" href="https://www.ormtechies.com/reputation-review-monitoring" />
         <meta name="robots" content="index, follow" />
       </head>
      <InnerTopBanner
        title="Reputation & Review Monitoring"
        info="When disaster strikes, you need to act quickly to mitigate the damage done to your business, so keeping an eye on your brand online is paramount."
      />
       <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"How much could a single reputation incident cost you in lost sales? "}
          imageUrl={"/images/hand-drawn-style-bankruptcy-concept.png"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Your business could be attacked at any time, day or night. It could be a competitor, a disgruntled ex-employee, even just a hard-to-please customer with a loud and unfair version of events. Whether it is with a removal or a response, it is important to act quickly. Left alone, bad reviews are a thorn in your side that can start costing you sales from the minute they’re posted. The worst way to find out about a reputation incident is when you wonder why sales have slowed down. Our WatchDog service has got your back, closely monitoring the web for attacks on your reputation, with our team on hand to act swiftly when an incident occurs. </p>"
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"So What is Included?"}
          imageUrl={"/images/choice-concept-illustration.png"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<ul><li><b>24/7 monitoring</b> of over 50 possible review sites<li><b>Lightning Fast Notifications</b> for all new reviews (2 hours or less)<li><b>Express Removal Processing</b> by ORMTechies Support for any new negative reviews (Submissions for removal will be made within 1 business day)<li><b>Significantly Discounted Removal Fee</b> No Deposit Required  You Only Pay For Successful Removals!<li><b>Notifications & Reports </b> All new reviews(of any rating) are tracked and sent to you in regular activity reports</ul>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Reputation Monitoring &  Insurance All In One"}
          imageUrl={"/images/20944573.jpg"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Your business reputation is invaluable. What are you doing to protect it?<ul><li>No setup fees <li> No contracts <li>The price is based on one location. Talk to us about an affordable multi-location package.</ul></p>"
          }
        />
      </section>
      <HomeSection3 />
      <HomeSection6 />
    </>
  );
 
};

export default ReputationAndReviewMonitoring;


export function generateMetadata(){
  return{
    title:"Reputation Management Services and Reviews",
    description:"Are you looking for a review service? Find out how our internet reputation management solutions can help you maintain a positive online image. Contact now!",
    canonical: 'https://www.ormtechies.com/reputation-review-monitoring',
    robots: 'index,follow'
  }
} 