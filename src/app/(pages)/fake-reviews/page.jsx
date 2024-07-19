'use client'
import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import ImageInfoWrap from "../common/imageInfoWrap";
import HomeSection6 from "../homePage/homeSection6";



const FakeReviewRemovalPage = () => {
  return (
    <>
      <InnerTopBanner
        title="Fast Fake Review Removal Or You Don’t Pay."
        info="Suffering from fake, defamatory online reviews? Now you can defend your business and reclaim the reputation you’ve worked so hard for. "
      />
        <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"What You’re Going Through"}
          imageUrl={"/images/business-decisions-concept-illustration.png"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>You’re running or managing a business. It’s a full plate of responsibilities and tasks. While your work is rewarding and you feel you’re doing well, the modern reality is that while you’re working hard on your business, the world of online reviews is always there, seemingly judging your every move. </p><p>Good or bad, fair or unfair, fake or real – all reviews are posted and instantly public, ready to make or break a business. A 5-star rating for your business on a review site like Google fuels new business and keeps your existing customers coming back for more. But, unfortunately, it may be something you take for granted until it goes wrong.</p><p>Nothing travels as fast as bad news. We know how hard it is to receive reviews that don’t reflect the effort you and your staff put into your work. It’s heartbreaking to have your online reputation compromised and devastating to see what effect fake reviews can have on your business.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Types of Fake Reviews"}
          imageUrl={"/images/illustrated-bad-review-concept.png"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>You’re busy checking your site’s reviews online and suddenly, you spot a negative review.  It’s frankly baffling.  Your staff hasn’t reported anything to you, and you don’t recognize the information.  The reviewer’s name doesn’t ring any bells.</p><p>Fake negative reviews can come from several sources.  These are just some examples: <ul><li>Competitors<li>Ex-employees<li>Disgruntled customers </ul></p><p>These are people you’ve had contact with. They’re on a mission to hurt you and maybe get friends and family involved to do so. </p><p>Random trolls are particularly baffling as they may have had limited experience with your business.  And it matters! As you probably already know, bad reviews are bad for business.</p><p>So is there a solution?</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"How ORMTechies Fights Back For You"}
          imageUrl={"/images/stand-out-concept-illustration.png"}
          showPrimeBtn={true}
         
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>At ORMTechies, we can help you regain your reputation. Our friendly team of experts, backed by our award-winning content removal technology, will work with you and your business to deal with fake reviews.</p><p>Not only that, we can help you protect yourself for the future. Fake reviews don’t simply disappear, and all business owners need to be vigilant. ORMTechies can help you remove fake reviews from sites including Google, Glassdoor, and Tripadvisor.</p><p>ORMTechies works to ensure that our solutions work with your business. We help you remove those fake reviews damaging your hard work.</p><p>Removing fake reviews is only the first step. ORMTechies monitors your reviews to help you catch other fake reviews in the future. We’ll maximize your review profile ratings by adding new, real 5-star reviews on auto-pilot.</p><p>Managing your business’s online presence can be a headache. ORMTechies clears those extra responsibilities so you can spend your time where it’s most needed – building your business.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Our Commitment to Fairness"}
          imageUrl={"/images/vector-businessman-with-puzzle-teamwork-partnership-concept-illustration.png"}
          showPrimeBtn={true}
         isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>We want your business to have the reputation it deserves and we’ll help you defend that reputation. Our promise is simple: If we can’t remove it, you don’t pay. It doesn’t cost you anything to have us check if we can remove content, so contact us for a free quote.</p>"
          }
        />
      </section>
      <HomeSection6 />
    </>
  );
 
};

export default FakeReviewRemovalPage;
