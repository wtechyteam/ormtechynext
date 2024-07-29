
import * as React from "react";
// import { useMounted } from "./../../../common/unmounted";
import HomeSection2 from "./homeSection2";
import HomeSection6 from "./homeSection6";
import PersonalBrandingFaq from "./PersonalBrandingFaq";
import InnerTopBanner from "../../common/innerTopBanner";
import ImageInfoWrap from "../../common/imageInfoWrap";
import HomeSection9 from "./homeSection9";
import StatisticsSection from "./statisticsSection";


const PersonalBrandingPage = () => {
  // const mounted = useMounted();
  // if (!mounted) return null; 
  return (
    <>
   <head>
        <title>Personal Branding Agency and Expert Consulting Services</title>
        <meta name="description" content="Expert Personal Branding Agency to enhance your online reputation. Our consulting services craft compelling digital identities for professionals and businesses." />
        <link rel="canonical" href="https://www.ormtechies.com/service/personal-branding" />
        <meta name="robots" content="index, follow" />
      </head> 
      <InnerTopBanner
        title="Level Up Your Online Presence With Personal Branding Experts"
        info="Boost your online presence with ORM Techies. Specializing in personal branding, we help professionals, influencers, and entrepreneurs craft compelling digital identities. Unlock success with customized strategies and expert guidance"
      />
    <HomeSection2 />

<section className="sectionPadding bg_white">
  <ImageInfoWrap
    title={" Level Up Your Online Presence With Personal Branding Experts"}
    imageUrl={"/images/experts.avif"}
    isReverse={true}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>Personal branding is like a digital business card for YOU. It's about crafting a strong online presence that showcases your skills, experience, and values. But building a powerful personal brand can be tricky. That's where ORM Techies comes in. Whether you're an entrepreneur, influencer, or professional, how you present yourself online can make or break your success.</p><p><b>Why Personal Branding Matters </b>Your brand acts as your digital calling card, a concise yet impactful introduction that tells the world who you are, what you value, and why you deserve attention. A strong personal brand isn't just about vanity; it's about establishing yourself as a trusted authority in your field. By crafting a compelling online persona, you build confidence, influence, and trust with your audience, allowing you to stand out from the competition.</p>"
    }
  />
</section>
<StatisticsSection />
<section className="sectionPadding bg_white">
  <ImageInfoWrap
    title={"The Services We Offer"}
    imageUrl={"/images/servicespp.avif"}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>We at ORM Techies understand the details of building a personal brand in today's dynamic environment. Our personalized approach to personal branding consulting services makes sure that your brand reflects your unique identity while resonating with your target audience. <ul><li>Strategic Brand Positioning: We'll work with you to create a strong web presence. Through a collaborative process, we'll help you identify your ideal audience – the people you want to connect with most.<li>Online Reputation Management: We understand the importance of a strong online presence in today's digital world. That's why our team of personal brand consultants manages your online reputation, ensuring your digital footprint reflects your expertise. Confidently showcase your skills, attract opportunities, and build trust with your target audience.<li>Social Media Management: Social media is a powerful tool for building a strong personal brand. At ORM Techies, we harness the power of social media to strengthen your brand. From creating engaging content to managing your profiles, we guide you to make a lasting impact and forge deeper connections with your audience.<li>Brand Identity Development: Establishing a solid online presence matters, whether you're experienced or new. Our personal branding experts work with you to build a convincing brand identity. <li>Content Creation and Optimization: We don't just talk about personal branding, we build it. Our team customizes compelling content to highlight your skills and expertise and position you as a leader in the tech field. </ul></p>"
    }
  />
</section>
<section className="sectionPadding bg_gray">
  <ImageInfoWrap
    title={"Why Choose ORM Techies?"}
    imageUrl={"/images/imagenew.png"}
    isReverse={true}
    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>When it comes to individual branding, trust the experts at ORM Techies to deliver results that exceed your expectations:<ul><li>Expertise: Our team of personal branding consultants brings years of experience and industry knowledge to every project, ensuring that your personal brand reflects your unique personality and professional goals.<li>Customized Solutions: We understand that every personal brand is different, which is why we offer customized solutions personalized tailored to your specific needs, goals, and budget.<li>Proven Results: With a track record of success and satisfied clients, ORM Techies is your trusted partner for all your individual branding needs.</ul></p>"
    }
  />
</section>
<section className="sectionPadding bg_white">
  <ImageInfoWrap
    title={"Take the Next Step with ORM Techies"}
    imageUrl={"/images/3569284.jpg"}

    showPrimeBtn={true}
    primeBtnName={"get a free quote"}
    borderBtnName={"faq"}
    darkButton="dark_btn"
    description={
      "<p>Transform your personal brand with ORM Techies your personal branding company and unlock new opportunities for success. Contact us now to schedule your free consultation and discover how our personalized branding solutions can help you stand out from the crowd. Don't let your personal brand hold you back—partner with ORM Techies and take control of your online reputation today!</p>"
    }
  />
</section>
<PersonalBrandingFaq />
<HomeSection6 />
<HomeSection9 />
    </>
  );
};

export default PersonalBrandingPage;

