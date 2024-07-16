'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' Why are online reviews important?  ',
            answer: 'Online reviews influence customer decisions, impact SEO rankings, and reflect your brand’s quality and reliability. ',
        },
        {
            question: ' How do you improve online reviews?   ',
            answer: `We use a combination of content creation, review monitoring, proactive engagement, and strategic responses to improve online reviews. `,
        },
        {
            question: 'Can negative reviews be removed?  ',
            answer: 'While we cannot remove genuine negative reviews, we can manage them effectively by responding professionally and addressing the concerns raised. ',
        },
        {
            question: 'How long does it take to see the results?   ',
            answer: 'The timeframe varies based on the current state of your online presence, but clients often see improvements within a few months. ',
        },
        {
            question: 'How much do your services cost?  ',
            answer: `Our pricing is customized based on the specific needs and scope of the project. Contact us for a detailed quote. `,
        },
       
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
