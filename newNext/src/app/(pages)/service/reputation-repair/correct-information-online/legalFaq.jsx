'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' What is online reputation management?  ',
            answer: ' Online reputation management involves monitoring, addressing, and enhancing the information available about you or your business online to ensure a positive image.  ',
        },
        {
            question: 'Why is online reputation important? ',
            answer: `A positive online reputation builds trust, and credibility, and can significantly impact personal and professional opportunities. `,
        },
        {
            question: 'How does Correct Information Online work?    ',
            answer: 'We start with a comprehensive assessment, develop a tailored strategy, create and optimize content, continuously monitor your online presence, and engage with your audience.  ',
        },
        {
            question: 'How do you ensure the accuracy of the information?    ',
            answer: 'We conduct thorough research and verification to ensure that the information we promote is accurate and factual. ',
        },
        {
            question: 'What is the cost of your services? ',
            answer: ` The cost varies based on the scope of services required. We offer customized packages to fit different budgets.`,
        },
        {
            question: `How can I get started with ORM Techies?   `,
            answer: ` Simply contact us through our website or phone, and our team will be happy to discuss your needs and develop a customized plan. `,
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
                <FAQSection faqs={LegalFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
