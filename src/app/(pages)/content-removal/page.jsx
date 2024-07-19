
import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import ImageInfoWrap from "./../common/imageInfoWrap";
import HomeSection3 from "./homeSection3";
import HomeSection9 from "../homePage/homeSection9";



const ContentRemoval = () => {
  return (
    <>
      <InnerTopBanner
        title="Negative Content Removal Experts  "
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image. "
      />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Negative Content Removal "}
          imageUrl={"/images/5358810.jpg"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Negative content can present itself anywhere on the internet in many different forms, which is why can assist in removing any type of negative content that may exist.</p><p>We utilise different methods depending on content type and the platform it exists on, which is why our strategy for online content removal is specific and tailored to each client to ensure the highest chance of success.</p><p>Below are just some of the Australian and international websites that we can remove content from. If the site you need content from is not listed, still reach out and contact us – we’ll be happy to take a look and find the best online content removal strategy for you.</p>"
          }
        />
      </section>
      <HomeSection3 />
      <section className="sectionPadding bg_gray">
        <ImageInfoWrap
          title={"Why Do We Remove Negative Online Content?"}
          imageUrl={"/images/9214777.jpg"}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>The internet can be an unforgiving place with a disproportionate amount of freedom being given to people to post whatever they like as quickly as they’d like. Unfortunately, this same power isn’t awarded to those who are trying to defend themselves against any unfair, illegitimate or otherwise fake negative content that is posted about them or their business.</p><p>We believe in the internet being a place where freedom of speech is protected – what we don’t believe in is people using this freedom to destroy individual and business reputations with dishonest, defamatory or fake content. We exist to help people fight back against the unmediated and unbalanced online landscape that may otherwise cause irreparable damage to their reputation.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Why The Team At ORMTechies Are The Content Removal Experts"}
          imageUrl={"/images/vector-professional-icon-business-illustration-line-symbol-people-management-set-concept.png"}
          showPrimeBtn={true}
          isReverse={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>In the past, technology for sharing content has advanced faster than the tools available to question and remove it. We are here to change this. We’ve developed our own advanced technology in-house which is constantly evolving and bettering our methods. This technology coupled with our highly experienced legal team has allowed us to create smarter and faster processes for content removal.</p>"
          }
        />
      </section>
      <HomeSection9 />
     
    </>
  );
 
};

export default ContentRemoval;
