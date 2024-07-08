'use client'
import * as React from "react";
import {reviewMetaData} from './reviewMetaData';
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
      <InnerTopBanner
        title="Review-Management"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image. "
      />
      <HomeSection2 />

<section className="sectionPadding bg_white">
  <ImageInfoWrap
    title={"Online Reputation Management"}
    imageUrl={"/images/online-reputation.webp"}
    isReverse={true}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>A good reputation is among the most valuable assets for any business. The internet has magnified the effects of brand perception, for better or for worse – and that’s fantastic when consumer sentiment is positive. For companies experiencing a reputation crisis, the effects are even more pronounced.</p><p>That’s why we provide a full suite of services to help manage your online reputation effectively. When a business discovers negative, misleading or false content regarding their operation online, the ideal course of action is to remove it – but this is not always feasible. That’s where Online Reputation Management (ORM) comes in.</p>"
    }
  />
</section>
<StatisticsSection />
<section className="sectionPadding bg_gray">
  <ImageInfoWrap
    title={"Stay One Step Ahead"}
    imageUrl={"/images/image670.png"}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>Some websites will stop at nothing to ensure their content is left untouched. In these cases, the problem can still be significantly mitigated through our skilful reputation management services. This involves the strategic promotion of positive content and the suppression of negative content.</p><p>75% of searchers don’t go past the first page of Google results. If the first two pages of your search results are with positive content, any negative material’s impact will be decimated. ORM allows you to be proactive with your reputation, rather than simply reacting and going into damage control if something harmful pops up.</p>"
    }
  />
</section>
<section className="sectionPadding bg_white">
  <ImageInfoWrap
    title={"Proactive Protection"}
    imageUrl={"/images/imageproactive.png"}
    isReverse={true}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>Here at ORMTechies, our team knows digital like the back of our hand. We possess deep, extensive experience in digital marketing, SEO and social media. This gives us the expertise to create powerfully positive content that overrides the rest.</p><p>ORM can protect individuals just as much as businesses. 80% of employers now search job applicants on Google before bringing them in for an interview. How would you fare if you were assessed on your Google results right now? If an unsavoury result pops up, it could compromise your chances of scoring your dream job. Is it worth the risk?</p>"
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

<reviewMetaData />