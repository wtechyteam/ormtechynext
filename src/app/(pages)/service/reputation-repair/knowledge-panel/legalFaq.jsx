'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' What is a Knowledge Panel?  ',
            answer: 'A Knowledge Panel is an information box that appears on search engine result pages, summarizing key details about a business, person, or entity. ',
        },
        {
            question: 'Why is a Knowledge Panel important for my business?   ',
            answer: `It provides a concise and authoritative snapshot of your brand, enhancing visibility and credibility online.`,
        },
        {
            question: 'How can ORM Techies improve my Knowledge Panel?   ',
            answer: 'We optimize and update your panel with accurate, comprehensive information, positive reviews, and high-quality visuals. ',
        },
        {
            question: 'How does a Knowledge Panel affect SEO?     ',
            answer: `It improves your brand's search visibility and ranking by providing relevant and structured information to search engines.`,
        },
        {
            question: 'What is structured data, and why is it important?     ',
            answer: `Structured data helps search engines understand your content, improving how your Knowledge Panel is displayed.  `,
        },
        {
            question: `What makes ORM Techies different from other ORM services?   `,
            answer: `Our personalized approach, continuous monitoring, and expertise in digital marketing set us apart.  `,
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
