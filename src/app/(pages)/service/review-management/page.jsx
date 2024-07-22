
import * as React from "react";
import Head from "next/head";
import HomeSection2 from './homeSection2';
import HomeSection6 from './homeSection6';
import InnerTopBanner from "../../common/innerTopBanner";
import ImageInfoWrap from "../../common/imageInfoWrap";
import HomeSection9 from "./homeSection9";
import StatisticsSection from "./statisticsSection";
import ReviewManagementFaq from "./ReviewManagementFaq";

const ReviewManagementPage = () => {
  return (
    <>
      <Head>
        <title>Online Reputation: Review Management Services & Software</title>
        <meta name="description" content="Upgrade your online presence with expert review management services. Gain control over customer feedback and improve your reputation on Google. Contact us!" />
        <link rel="canonical" href="https://www.ormtechies.com/service/review-management" />
        <meta name="robots" content="index, follow" />
      </Head>
      <InnerTopBanner
        title="Online Review Management"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image. Which involves strategically handling customer feedback across various platforms to maintain a positive online reputation."
        // imageSrc="/images/imagereview.svg"
      />
      <HomeSection2 />
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Transform Your Brand by Customized Review Management Services"}
          imageUrl={"/images/rr1.png"}
          isReverse={true}
          showPrimeBtn={true}
          primeBtnName={"Get a Free Quote"}
          borderBtnName={"FAQ"}
          darkButton="dark_btn"
          description={
            `<p>Our comprehensive approach includes customized strategies to encourage satisfied customers to leave positive reviews. We also address negative feedback promptly and professionally, turning potential crises into opportunities for improvement. By leveraging our review management expertise, you can attract more customers and increase revenue.</p>
             <ul>
               <li>Monitoring and Tracking: Regularly monitor review platforms to stay informed about what customers are saying about your business.</li>
               <li>Prompt Response: Respond promptly to both positive and negative reviews. Acknowledge positive feedback with gratitude and address negative feedback with a solution-oriented approach.</li>
               <li>Encouraging Positive Reviews: Implement strategies to encourage satisfied customers to leave reviews. This could include follow-up emails, in-store signage, or incentives for leaving feedback.</li>
               <li>Addressing Negative Reviews: Develop a protocol for addressing negative reviews professionally and promptly. Offer solutions, apologize for any negative experiences, and demonstrate a willingness to make things right.</li>
               <li>Generating Positive Publicity: Encourage satisfied customers to share their positive experiences on social media or other public platforms to increase your brand's positive visibility.</li>
             </ul>`
          }
        />
      </section>
      <StatisticsSection />
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Boost Your Online Reputation with Expert Review Management Tools"}
          imageUrl={"/images/isometric-feedback-concept-with-people-giving-stars_52683-62300.avif"}
          showPrimeBtn={true}
          primeBtnName={"Get a Free Quote"}
          borderBtnName={"FAQ"}
          darkButton="dark_btn"
          description={
            `<p>
              <ol>
                <li>Glassdoor: A platform where employees and former employees can anonymously review companies. We monitor Glassdoor to manage your company's reputation, respond to feedback, and improve employee satisfaction.</li>
                <li>Google My Business: Essential for managing your business’s presence on Google Search and Maps. We use this tool to update business information, respond to reviews, and engage with customers to enhance your online reputation.</li>
                <li>MouthShut: A consumer review website where users can review products and services. We manage your presence on MouthShut by monitoring reviews, addressing customer feedback, and ensuring your brand maintains a positive image.</li>
                <li>Trustpilot: A leading review platform that helps collect and respond to customer reviews. We utilize Trustpilot to gather valuable customer feedback, respond to reviews, and leverage positive testimonials to build trust and credibility.</li>
              </ol>
            </p>`
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"How ORMTechies Can Help"}
          imageUrl={"/images/helping-partner-concept-illustration_114360-8584.avif"}
          isReverse={true}
          showPrimeBtn={true}
          primeBtnName={"Get a Free Quote"}
          borderBtnName={"FAQ"}
          darkButton="dark_btn"
          description={
            `<p>ORMTechies excels in transforming businesses through strategic online review services. Their comprehensive services cover online review management, Google review management, and customer review management. ORMTechies' advanced review management system automates monitoring and responding to reviews across platforms.</p>
             <p>They specialize in enhancing online reputation, boosting local SEO, and increasing customer trust. With proven strategies and expert guidance, ORMTechies helps businesses maintain a positive brand image and attract more customers. Their tailor solutions and experienced team ensure effective management of online reviews, delivering measurable results and a competitive advantage in today's digital marketplace.</p>`
          }
        />
      </section>
      <ReviewManagementFaq />
      <HomeSection6 />
      <HomeSection9 />
    </>
  );
};

export default ReviewManagementPage;
