"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "How can ORM Techies help develop my small business brand strategy?",
      answer:
        " We work closely with you to understand your business goals, target audience, and market positioning. Based on this, we craft a tailored brand strategy that includes messaging, visual identity, and marketing tactics to effectively reach and engage your customers.  ",
    },
    {
      question: "Why is branding important for my small business? ",
      answer: `Branding is crucial because it differentiates your business from competitors, builds customer loyalty, and enhances recognition. A strong brand identity helps communicate your values and establishes trust with your audience. `,
    },
    {
      question:
        "What makes ORM Techies different from other branding companies for small businesses? ",
      answer:
        "Our personalized approach, industry expertise, and commitment to understanding each client's unique needs set us apart. We focus on delivering tangible results that will help your business grow.   ",
    },
    {
      question: "Can ORM Techies help with rebranding an existing small business? ",
      answer:
        " Yes, we specialize in rebranding services, which include evaluating your current brand, identifying areas for improvement, and implementing a refreshed brand strategy that resonates with your target audience.",
    },
    {
      question: `How long does it take to see results from branding efforts with ORM Techies? `,
      answer: `Branding is a long-term investment, but you can start seeing initial results within a few months. Consistent and strategic efforts over time will yield significant benefits in terms of brand recognition and customer loyalty. `,
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
