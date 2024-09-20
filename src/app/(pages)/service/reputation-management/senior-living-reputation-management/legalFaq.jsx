"use client";
import FAQSection from "../../../../common/Faq";
import React from "react";

function LegalFaq() {
  // Define your FAQ data as an array of objects with 'question' and 'answer' properties
  const CorporateFaqs = [
    {
      question: "Why is reputation management important for senior living communities?",
      answer:
        " Reputation management is crucial as it influences residents' decisions and can impact occupancy rates. A positive reputation enhances trust and attracts new residents.",
    },
    {
      question: "What are the benefits of senior living reputation management services?  ",
      answer: `Benefits include improved online visibility, enhanced resident satisfaction, increased trust among families, and a competitive advantage in the market. `,
    },
    {
      question:
        "What strategies do ORMTechies use to generate positive reviews for our senior living community? ",
      answer:
        "We implement strategies to encourage satisfied residents and families to leave positive reviews, boosting your community's online reputation.  ",
    },
    {
      question: " How can senior living reputation management services help during a crisis?   ",
      answer:
        " ORMTechies provides crisis management services, responding quickly to mitigate damage and protect your community's reputation during challenging times. ",
    },
    {
      question: `What makes ORMTechies’ approach to senior living reputation management unique?    `,
      answer: `Our approach combines innovative technology, personalized strategies, and a deep understanding of the senior living industry to deliver exceptional results. 

 `,
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
