"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "How does personal reputation management online work?",
      answer:
        " Personal reputation management online includes monitoring digital mentions, creating positive content, and addressing negative information. We use advanced tools and strategies to manage your online reputation effectively.  ",
    },
    {
      question: "Why is personal online reputation management important?",
      answer: `Personal online reputation management is crucial because it influences how others perceive you professionally and personally. We ensure that your online presence is positive and aligned with your goals. `,
    },
    {
      question:
        "What are the benefits of positive Internet Reputation reviews?  ",
      answer:
        "Positive reviews on the internet need to be improved search engine rankings, and enhanced brand reputation. ",
    },
    {
      question: "  How does ORMTechies handle negative online content? ",
      answer:
        " We address negative online content through rapid response strategies, content creation, and SEO techniques to suppress and counteract harmful information.  ",
    },
    {
      question: `What are the benefits of personal reputation management?  `,
      answer: `The benefits include a positive online image, improved trust and credibility, and increased career opportunities. We provide customized solutions to achieve these benefits.  `,
    },
    {
      question: `How frequently should I revise my online reputation management approach?    `,
      answer: ` Regular updates are essential to stay current with online trends. We provide ongoing monitoring and adjustments to keep your strategy effective.  `,
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
