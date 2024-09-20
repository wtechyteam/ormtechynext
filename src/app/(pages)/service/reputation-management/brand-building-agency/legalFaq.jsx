"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "What does a brand building firm do?",
      answer:
        " A brand building firm like ORMTechies specializes in developing and managing brands to ensure they are well-positioned and recognizable. This includes creating brand strategies, designing brand identities, managing digital marketing campaigns, and maintaining brand reputation.  ",
    },
    {
      question: "How does ORMTechies create a brand strategy? ",
      answer: `ORMTechies creates a brand strategy by conducting thorough market research to understand your target audience and competitors. We define your brand's unique value proposition, positioning, messaging, and visual identity, ensuring a cohesive strategy that aligns with your business objectives.  `,
    },
    {
      question:
        " What are the benefits of building a brand with social media?  ",
      answer:
        "Building a brand with social media allows you to engage directly with your audience, build brand awareness, and foster customer loyalty. ORMTechies develops customized social media strategies to create meaningful interactions, share compelling content, and monitor brand sentiment to strengthen your brand's online presence. ",
    },
    {
      question: "  What services does ORMTechies offer for brand development? ",
      answer:
        " ORMTechies offers a range of brand development services, including brand identity design (logo, color palette, typography), digital marketing (SEO, PPC, email marketing), social media management, content creation (blogs, videos, graphics), and reputation management (monitoring online reviews, managing brand perception). ",
    },
    {
      question: `How long does it take to build a brand with ORMTechies?  `,
      answer: `The time to build a brand varies based on factors such as market conditions, competition, and the complexity of your brand strategy. ORMTechies works closely with you to create a timeline that aligns with your goals and expectations. `,
    },
    
  ];

  return (
    <section className="sectionPadding">
      <div className="container">
        <div className="title_section text-center">
          <h2 className="title-xl fw-bold mb-5">FAQs</h2>
          {/* <p>At ORM Techies, we cater to a diverse clientele across various industries, including:</p> */}
        </div>
        <FAQSection faqs={CorporateFaqs} />
      </div>
    </section>
  );
}

export default LegalFaq;
