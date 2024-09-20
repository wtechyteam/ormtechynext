"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "  Why do startups need a branding agency?  ",
      answer:
        " Startups need a branding agency to create a strong and memorable brand identity that differentiates them from competitors, attracts customers, and builds trust. A branding agency brings expertise, creativity, and strategic thinking to ensure the startup’s brand is effective and cohesive. ",
    },
    {
      question: "How does ORMTechies help startups with branding?",
      answer: `ORMTechies helps startups by providing comprehensive branding services such as custom logo design, brand name creation, brand architecture, website design, packaging design, and brand marketing. We ensure that each element of the brand is unique and resonates with the target audience.  `,
    },
    {
      question:
        "What is brand architecture and why is it important for startups?   ",
      answer:
        "Brand architecture is the organizational structure of a brand's portfolio, defining how different products and services relate to each other. For startups, it helps create clarity and consistency, making it easier for customers to understand and connect with the brand.  ",
    },
    {
      question: "How long does the branding process take with ORMTechies?",
      answer:
        "The branding process with ORMTechies varies depending on the scope of the project. Generally, it can take a few weeks to a few months to complete the entire process, from initial discovery to implementation and monitoring. ",
    },
    {
      question: `What makes ORMTechies different from other branding agencies?    `,
      answer: `ORMTechies stands out because of our focus on startups, deep understanding of the market, creative and strategic approach, and commitment to delivering personalized solutions. We work closely with startups to ensure their brand reflects their unique vision and goals. `,
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
