"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "What does Internet Reputation Management involve?",
      answer:
        " It involves monitoring, managing, and influencing your online presence to ensure a positive perception of your brand. ",
    },
    {
      question: "How can Internet Reputation services help my business? ",
      answer: `They can help your business by improving online reviews, enhancing brand credibility, and increasing customer trust.  `,
    },
    {
      question:
        "What are the benefits of positive Internet Reputation reviews?  ",
      answer:
        "Positive reviews on the internet need to be improved search engine rankings, and enhanced brand reputation. ",
    },
    {
      question: " How does ORMTechies handle negative online reviews?  ",
      answer:
        " We respond promptly to negative reviews, address customer concerns, and work to turn negative experiences into positive outcomes. ",
    },
    {
      question: `How can I improve my brand's online image with ORMTechies?  `,
      answer: `ORMTechies creates and promotes positive content, optimizes your online profiles, and manages your online reputation across various platforms. `,
    },
    {
      question: `What are internet reputation reviews?  `,
      answer: ` These are assessments of how well a service manages online reputations. ORMTechies has received excellent internet reputation reviews for our effective strategies.  `,
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
