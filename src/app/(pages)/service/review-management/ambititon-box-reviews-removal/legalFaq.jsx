'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const AmbitionFaqs = [
        {
            question: ' What is Ambition Box review removal?  ',
            answer: 'Ambition Box review removal refers to the process of identifying and removing unjust or harmful reviews from the platform to maintain a positive company image. ',
        },
        {
            question: 'Why is it important to manage Ambition Box reviews?   ',
            answer: `Ambition Box reviews can significantly impact a company's reputation and ability to attract talent. Managing these reviews ensures a positive online presence. `,
        },
        {
            question: 'How quickly can ORMTechies remove negative reviews from Ambition Box?     ',
            answer: 'The timeframe for removing negative reviews from Ambition Box varies depending on the situation and platform policies. ORMTechies works efficiently to resolve issues as quickly as possible.  ',
        },
        {
            question: ` Can ORMTechies help improve our company's overall rating on Ambition Box?  `,
            answer: 'Yes, ORMTechies offers strategies to improve overall ratings on Ambition Box by encouraging positive reviews and addressing negative feedback effectively. ',
        },
        {
            question: 'Is it possible to remove all negative reviews from Ambition Box?     ',
            answer: `While it's not always possible to remove all negative reviews, ORMTechies works to minimize the impact of negative feedback and promote a positive online reputation.  `,
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
                <FAQSection faqs={AmbitionFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
