'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const IndividualFaqs = [
        {
            question: ' Why is individual reputation management important?   ',
            answer: 'Managing your online reputation is crucial for professional opportunities and personal relationships. With the help you can assist by optimizing your online profiles and managing online reviews effectively.  ',
        },
        {
            question: 'How can ORMTechies help improve my online reputation?    ',
            answer: `We offer personalized strategies, social media optimization, and content creation to enhance your online image and suppress negative content. `,
        },
        {
            question: 'Is my information safe with ORMTechies during reputation management?  ',
            answer: 'Yes, we prioritize your privacy and conduct all reputation management activities confidentially and securely. ',
        },
        {
            question: 'What is the process for starting individual reputation management services with ORMTechies?      ',
            answer: 'We can begin with a thorough analysis of your current online reputation and develop a personalized strategy based on your goals and needs. ',
        },
        {
            question: 'Can ORMTechies manage my social media profiles to improve my online reputation?   ',
            answer: `ORMTechies provides crisis management strategies to minimize damage and restore your firm's reputation quickly and effectively.  `,
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
                <FAQSection faqs={IndividualFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
