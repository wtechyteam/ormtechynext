'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CorporateFaqs = [
        {
            question: ' How does reputation marketing differ from traditional marketing? ',
            answer: 'Traditional marketing focuses on promoting products or services, whereas reputation marketing focuses on managing and promoting the brand reputation through customer reviews, testimonials, and online credibility. ',
        },
        {
            question: 'What are the benefits of brand reputation marketing online? ',
            answer: `Brand reputation marketing online can help you stand out in search results, build trust with potential customers, and improve customer acquisition and retention. `,
        },
        {
            question: 'Why is reputation marketing important for businesses?',
            answer: 'Reputation marketing is crucial because it directly impacts consumer decisions. Positive online reviews and a strong online reputation can attract new customers, enhance brand credibility, and drive business growth. ',
        },
        {
            question: ' How does ORMTechies measure the success of reputation marketing campaigns?   ',
            answer: ' ORMTechies uses advanced analytics and reporting tools to measure the success of reputation marketing campaigns. Key metrics include review ratings, sentiment analysis, and customer engagement. ',
        },
        {
            question: 'Can reputation marketing help businesses recover from a reputation crisis?     ',
            answer: ` Yes, ORMTechies specializes in reputation crisis management and can help businesses recover from negative reviews or online crises by addressing issues promptly and promoting positive experiences.  `,
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
