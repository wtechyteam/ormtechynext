'use client'
import * as React from "react";
import InnerTopBanner from "./../../../common/innerTopBanner";
import GoogleReviewsFaq from "./GoogleReviewsFaq";
import ImageInfoWrap from "./../../../common/imageInfoWrap";
import HomeSection9 from "./homeSection9";

const GoogleReviewsInner = () => {
  return (
    <>
   <head>
        <title>Review Rewind: Undoing Unwanted Google Feedback </title>
        <meta name="description" content="Learn how ORM Techies helps businesses remove negative Google reviews and improve their online reputation. Expert strategies, ethical approaches, and personalized solutions."/>
        <link rel="canonical" href="https://www.ormtechies.com/google-reviews" />
        <meta name="robots" content="index, follow" />
      </head>
      <InnerTopBanner
        title="Expert Removal Of Google Search Results "
        info="Unwanted Google results can turn innocent searches into reputation disasters. "
      />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Google’s long memory causes lasting damage"}
          imageUrl={"/images/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration.png"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>“The internet never forgets” wouldn’t cause so much misery if it wasn’t for Google being so good at reminding everyone.</p><p>Google’s stated mission is to “to organize the world’s information and make it universally accessible and useful”. What it hasn’t yet reconciled is how unfair and damaging that can be when the “information” being returned starts souring new relationships. Ruining business opportunities. Pausing careers. Stopping the flow of new business.</p><p>Whether you’re a business or an individual, unsavory results in a Google search for your name are an instant poison to your reputation that needs to be dealt with as soon as possible.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"You can defend your reputation with ORMTechies "}
          imageUrl={"/images/5002461.jpg"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p> Google is a complex beast, but sometimes the solutions are simple – you just need to know how. Since every search result is different, the first step is always to reach out and get a free consultation. At worst, you’ll at least find out the situation and possible solutions, which may not be immediately obvious to you otherwise.</p><p>You’ll be contacting a team with enormous experience and resources in this field, including our own custom-built technology platform. Whether it is complete and permanent removal, or suppressing the content away from Page 1 of Google, you can rely on ORMTechies to free you from the burden of an unwanted Google search result.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"The impact of negative search results"}
          imageUrl={"/images/complain-concept-with-one-star-review.png"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<h4>For Businesses</h4><p>When negative results pop up beside your company name, it can stop people in their tracks before you’ve had a chance to interact. Online, your reputation is everything: a negative review, unpleasant article, or aggressive discussions about your business could all have a massive impact on performance.</p><h4>For Individuals</h4><p>Like any brand, a personal brand can be enormously tarnished by unwanted Google search results. Prospective employers, clients, or investors are all liable to look you up on Google. This goes double for jobs built on reputation: doctors, lawyers, and many other professionals rely on us to defend their online presence.</p><p>Often it’s not even something you’ve done: simple association with a negative event or disreputable company can cause long lasting damage.</p><p>Whatever your situation, unfortunately these are problems that rarely go away by themselves. Dealing with them immediately is the only way to limit the cost and damage. </p>"
          }
        />
      </section>
      <GoogleReviewsFaq />
      <HomeSection9 />
    </>
  );
};

export default GoogleReviewsInner;
