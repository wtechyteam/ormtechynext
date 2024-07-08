'use client'
import React from "react";

import InnerTopBanner from "../../common/innerTopBanner";
import SubMenu1 from "./submenu1";
import Image from "next/image";
import styled from "styled-components";
import ImageInfoWrap from '../../common/imageInfoWrap';
import StatisticsSection from "./statisticsSection";
import HomeSection9 from "./homeSection9";
import HomeSection6 from "./homeSection6";


// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #002A4C;
  text-align: center;
  margin-bottom: 20px; 
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center;
`;

// Cards Data
const cardsData = [
  {
    imageSrc: "/images/side-image-3.webp",
    title: "Invite Customers",
    description:
      "Contact your customers through email, SMS, or opt for the Page-Only feature to encourage them to share their reviews.",
  },
  {
    imageSrc: "/images/side-image-3.webp",
    title: "Ask for Ratings",
    description:
      "Craft personalized, branded landing pages that invite customers to provide their feedback and ratings.",
  },
  {
    imageSrc: "/images/side-image-3.webp",
    title: "Customer Feedback",
    description:
      "Acquire, oversee, and actively engage with customer feedback to enhance your brand’s overall experience.",
  },
  {
    imageSrc: "/images/side-image-3.webp",
    title: "Public Reviews",
    description:
      "Encourage customers to effortlessly and promptly share their reviews across a network of 50+ leading publisher sites.",
  },
];

const SubMenuPage = () => {
 
  return (
    <>
      <InnerTopBanner
        title="Hello I am Submenus Page"
        info="Boost your online presence with ORM Techies. Specializing in personal branding, we help professionals, influencers, and entrepreneurs craft compelling digital identities. Unlock success with customized strategies and expert guidance."
      />
      <section className='sectionPadding bg_white'>
                <ImageInfoWrap
                    title={'Online Reputation Management'}
                    imageUrl={"/images/online-reputation.webp"}
                    showPrimeBtn={true}
                    isReverse={true}
                    primeBtnName={"get a free quote"}
                    borderBtnName={"faq"}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"}
                />
            </section>
      <Container className=' bg_gray' >
      <Title>Key Highlights</Title>
        <CardsContainer>
         
          {cardsData.map((card, index) => (
            <SubMenu1
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardsContainer>
      </Container>
      <section className='sectionPadding bg_white'>
                <ImageInfoWrap
                    title={'Online Reputation Management'}
                    imageUrl={"/images/online-reputation.webp"}
                    showPrimeBtn={true}
                    
                    primeBtnName={"get a free quote"}
                    borderBtnName={"faq"}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"}
                />
            </section>
            <section className='sectionPadding bg_gray'>
                <ImageInfoWrap
                    title={'Online Reputation Management'}
                    imageUrl={"/images/online-reputation.webp"}
                    showPrimeBtn={true}
                    isReverse={true}
                    primeBtnName={"get a free quote"}
                    borderBtnName={"faq"}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"}
                />
            </section>
            <StatisticsSection />
            <HomeSection6 />
            <HomeSection9 />
           
    </>
  );
};

export default SubMenuPage;
