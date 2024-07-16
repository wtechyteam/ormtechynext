'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const IndeedFaqs = [
        {
            question: ' How can a negative Indeed review impact my business?  ',
            answer: 'Negative reviews can deter potential candidates, harm your brand reputation, and affect employee morale. ',
        },
        {
            question: 'What services does ORM Techies offer for negative review removal? ',
            answer: `ORM Techies provides monitoring, analysis, and removal of reviews that violate Indeed's policies. `,
        },
        {
            question: 'How does ORM Techies identify negative Indeed Review?    ',
            answer: 'We use advanced tools to continuously monitor your Indeed profile for any new reviews.  ',
        },
        {
            question: 'What is the process for removing a negative Indeed review?     ',
            answer: 'We analyze the review for policy violations and submit a removal request to Indeed. ',
        },
        {
            question: 'How can ORM Techies assist in maintaining a positive online reputation?    ',
            answer: `We provide comprehensive review handling services, including monitoring, analysis, response management, and review removal to ensure a positive and professional online presence.  `,
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
                <FAQSection faqs={IndeedFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
