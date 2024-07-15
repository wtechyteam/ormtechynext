'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' How can negative content impact my business?  ',
            answer: `Negative content can deter potential customers, reduce sales, and damage your brand's credibility. It can also affect partnerships and business opportunities.`,
        },
        {
            question: 'Can negative reviews be removed?   ',
            answer: `While complete removal isn't always possible, we work to suppress negative content by promoting positive information and optimizing search results.`,
        },
        {
            question: 'How long does it take to improve my online reputation?    ',
            answer: ' Results can vary, but significant improvements typically occur within 3 to 6 months, depending on the severity of the negative content and the strategies implemented. ',
        },
        {
            question: 'What methods do you use to manage online reputation?    ',
            answer: 'We use a combination of search engine optimization (SEO), high-quality content creation, digital public relations, and continuous monitoring to manage and improve your online reputation. ',
        },
        {
            question: 'Can you help with social media management?     ',
            answer: `Yes, we provide comprehensive social media management services to enhance your online presence across various platforms.  `,
        },
        {
            question: `How do I get started with ORM Techies?      `,
            answer: `Contact us through our website to schedule a consultation. We will discuss your specific needs and develop a customized strategy to improve your online reputation.  `,
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
