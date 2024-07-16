'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const RetailFaqs = [
        {
            question: ' How do you manage online reviews for retail businesses?',
            answer: 'We use advanced review monitoring systems and response strategies to monitor and respond to customer reviews promptly and professionally. ',
        },
        {
            question: 'How does ORMTechies handle negative reviews for retail businesses?   ',
            answer: `We have prepared response templates and strategies to address negative reviews professionally and aim to resolve customer issues positively. `,
        },
        {
            question: 'What types of analytics do you provide for retail reputation management?    ',
            answer: 'We provide analytics on review trends, sentiment analysis, customer feedback, and key performance indicators (KPIs) related to your brand’s reputation.  ',
        },
        {
            question: 'What makes ORMTechies different from other retail reputation management companies?     ',
            answer: 'ORMTechies offers personalized strategies, transparent communication, and a customer-centric approach to reputation management. ',
        },
        {
            question: 'What makes ORMTechies different from other retail reputation management companies?  ',
            answer: `ORMTechies offers personalized strategies, transparent communication, and a customer-centric approach to reputation management.  `,
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
                <FAQSection faqs={RetailFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
