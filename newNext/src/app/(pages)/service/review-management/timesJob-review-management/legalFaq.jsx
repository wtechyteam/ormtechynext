'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const TimesJobsFaqs = [
        {
            question: ' What are the benefits of using Timejob Resume Services?  ',
            answer: 'Timejob resume services help job seekers create professional resumes that increase their chances of attracting employers.  ',
        },
        {
            question: 'How can ORMTechies help with Timejob Review Management?  ',
            answer: `ORMTechies specializes in review management, helping you monitor, analyze, and respond to reviews effectively. `,
        },
        {
            question: 'How does ORMTechies optimize Timejob Resume Services?  ',
            answer: 'ORMTechies optimizes Timejob resume services by crafting resumes that highlight your skills and experiences effectively.  ',
        },
        {
            question: 'How can I improve my Timesjobs profile to attract more employees?   ',
            answer: 'ORMTechies can help optimize your Timesjobs profile with relevant keywords and a professional presentation to attract more employers. ',
        },
        {
            question: 'What strategies does ORMTechies use for Timejob management?     ',
            answer: `ORMTechies uses advanced tools and strategies to monitor, analyze, and respond to reviews professionally and promptly.   `,
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
                <FAQSection faqs={TimesJobsFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
