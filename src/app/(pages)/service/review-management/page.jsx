'use client'
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";
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
            "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"
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
            "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"
          }
        />
      </section>
      <section className="sectionPadding bg_white">
        <ImageInfoWrap
          title={"Stay One Step Ahead"}
          imageUrl={"/images/imageproactive.png"}
          isReverse={true}
          showPrimeBtn={true}
          primeBtnName={"get a free quote"}
          borderBtnName={"faq"}
          darkButton="dark_btn"
          description={
            "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"
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
