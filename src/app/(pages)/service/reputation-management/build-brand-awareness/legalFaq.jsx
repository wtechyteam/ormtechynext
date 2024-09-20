"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: " What are the benefits of building brand presences?",
      answer:
        " Building awareness offers several benefits, including increased customer loyalty, competitive advantage, and the ability to charge premium prices for your products or services. ORMTechies helps businesses achieve these benefits by ensuring your brand is recognized and remembered by your target audience.  ",
    },
    {
      question: "How can I improve my brand's online presence? ",
      answer: `ORMTechies improves your brand's online presence through comprehensive SEO strategies, social media management, online reputation management, and targeted digital advertising campaigns.   `,
    },
    {
      question:
        " Does ORMTechies provide custom strategies for building brand awareness?   ",
      answer:
        "Yes, ORMTechies provides custom strategies for building brand awareness based on your specific business goals, target audience, industry, and budget. Our team develops personalized strategies that maximize your brand's visibility and recognition in the marketplace. ",
    },
    {
      question: "What is the difference between brand awareness and brand identity?",
      answer:
        "  Brand awareness refers to how well-known your brand is, whereas brand identity encompasses the visual and messaging elements that represent your brand. Brand identity collectively creates a distinct and memorable brand image.   ",
    },
    {
      question: `How can ORMTechies help build brand awareness?    `,
      answer: `ORMTechies employs a range of strategic marketing techniques to build brand awareness. Our team uses public relations and influencer marketing to further enhance your brand's visibility and recognition. `,
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
