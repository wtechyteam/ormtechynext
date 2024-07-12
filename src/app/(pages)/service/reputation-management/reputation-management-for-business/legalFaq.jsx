'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const BusinessFaqs = [
        {
            question: ' What are online reputation management services for small businesses?  ',
            answer: 'Online reputation management services for small businesses involve monitoring and managing online reviews and mentions to improve brand reputation. ',
        },
        {
            question: 'Why is small business online reputation management important?  ',
            answer: `Small business online reputation management is crucial for attracting customers and building trust, which we help achieve through effective strategies. `,
        },
        {
            question: 'What is the role of reputation management in small business growth?   ',
            answer: 'Reputation management plays a key role in small business growth by enhancing credibility and attracting new customers, areas are where we excel.  ',
        },
        {
            question: 'How can ORMTechies help with reputation management for small businesses?    ',
            answer: 'We specialize in reputation management for small businesses, offering tailored solutions to enhance online presence and customer trust. ',
        },
        {
            question: `How can small businesses benefit from ORMTechies' online reputation management service? `,
            answer: `Small businesses benefit from ORMTechies' expertise in online reputation management, which helps them maintain a positive brand image and grow their customer base.  `,
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
                <FAQSection faqs={BusinessFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
