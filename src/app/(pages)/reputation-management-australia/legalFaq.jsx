'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CorporateFaqs = [
        {
            question: '  Why is online reputation management important for businesses in Australia? ',
            answer: 'Online reputation management is crucial because it influences customer perception and can impact sales. Maintaining a positive reputation is essential with a significant percentage of consumers relying on online reviews.  ',
        },
        {
            question: 'How can ORMTechies help with internet removals?  ',
            answer: `ORMTechies specializes in online reputation management and provides comprehensive internet removal services to address and eliminate negative content.  `,
        },
        {
            question: 'Why is online reputation management important in Australia? ',
            answer: ' Australian consumers heavily rely on online reviews when making purchasing decisions. Maintaining a positive online presence is crucial for attracting and retaining customers in Australia.  ',
        },
        {
            question: '  How can ORMTechies help with online review management?  ',
            answer: 'ORMTechies offers comprehensive review management services, including encouraging positive reviews, responding to reviews, mitigating negative reviews, and monitoring review sites. ',
        },
        {
            question: 'What are the benefits of using ORMTechies reputation management services?  ',
            answer: `The benefits include enhanced credibility, increased customer trust, improved search engine rankings, protection of personal information, and ongoing support to maintain a positive online reputation.`,
        },
        
       
    ];

    return (
        <section className='sectionPadding'>
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
