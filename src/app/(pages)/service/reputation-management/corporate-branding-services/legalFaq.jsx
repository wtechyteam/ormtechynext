'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CorporateFaqs = [
        {
            question: ' Why is corporate reputation management important? ',
            answer: 'Corporate reputation management is crucial because a positive reputation builds customer trust, attracts investors, and enhances business success. They provide comprehensive services to protect and enhance your corporate image. ',
        },
        {
            question: 'How is corporate online reputation monitored?  ',
            answer: `Corporate online reputation is monitored by using tools which track online mentions, reviews, and social media activity, allowing for prompt and positive responses to any issues. `,
        },
        {
            question: 'How can a company’s online presence be improved?  ',
            answer: 'A company’s online presence can be improved by creating and managing content that reflects brand values, engaging with the audience, and ensuring positive visibility across all online platforms. ',
        },
        {
            question: 'What benefits can be expected from corporate reputation management services? ',
            answer: 'Benefits include improved customer trust, enhanced brand image, effective crisis management, and increased positive online visibility, all contributing to a stronger corporate reputation. ',
        },
        {
            question: 'What is the role of employee advocacy in reputation management?   ',
            answer: `Employee advocacy helps boost a company’s reputation as employees act as brand ambassadors. We provide training and strategies to empower your employees to positively represent your brand online.  `,
        },
        {
            question: `Can ORMTechies help with negative reviews?  `,
            answer: `Yes, ORMTechies specializes in online review management by responding to negative reviews professionally and resolving customer concerns, turning potential negatives into positives.   `,
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
                <FAQSection faqs={CorporateFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
