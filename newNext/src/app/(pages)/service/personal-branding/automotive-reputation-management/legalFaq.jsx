'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const AutomotiveFaqs = [
        {
            question: ' What are the benefits of auto dealership reputation management?   ',
            answer: 'Benefits include improved customer trust, increased sales, enhanced brand credibility, better online visibility, and effective crisis prevention.  ',
        },
        {
            question: 'How can ORMTechies help with automotive reputation management?    ',
            answer: `ORMTechies offers comprehensive solutions including review management, social media engagement, SEO optimization, and crisis management tailored for auto dealerships. `,
        },
        {
            question: 'What are reputation scorecards and how do they benefit auto dealerships?    ',
            answer: 'Reputation scorecards provide insights into your dealership’s online reputation performance, helping to track progress, identify trends, and make data-driven decisions.  ',
        },
        {
            question: 'How does ORMTechies use influencer relationships for auto dealership reputation management?      ',
            answer: 'We collaborate with influencers who can positively impact your dealership’s reputation, enhancing brand credibility and reaching new audiences.',
        },
        {
            question: 'How does ORMTechies ensure continuous improvement in auto dealership reputation management?    ',
            answer: ` ORMTechies continuously monitors trends, adjusts strategies, and implements new technologies to maintain and enhance your dealership’s online reputation.   `,
        },
      
        // Add more FAQs as needed
    ];

    return (
        <section className='sectionPadding'>
            <div className="container">
                <div className="title_section text-center">
                    <h2 className="title-xl fw-bold mb-5">FAQs</h2>
                    {/* <p>At ORM Techies, we cater to a diverse clientele across various industries, including:</p> */}
                </div>
                <FAQSection faqs={AutomotiveFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
