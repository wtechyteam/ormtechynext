'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const HealthFaqs = [
        {
            question: ' How can positive online reviews benefit my healthcare practice?  ',
            answer: `Positive online reviews can enhance your practice's credibility, attract new patients, and build trust within the community. ORMTechies helps manage and highlight these positive reviews.  `,
        },
        {
            question: 'How does ORMTechies help with Healthcare Online Reputation Management?   ',
            answer: `ORMTechies helps with Healthcare Online Reputation Management by monitoring online reviews, responding to feedback, managing social media profiles, and ensuring accurate business listings. We use advanced strategies to improve and maintain your online image. `,
        },
        {
            question: 'What should I do about negative reviews?  ',
            answer: 'Negative reviews should be addressed promptly and professionally. ORMTechies helps you respond to negative reviews, offering solutions and showing patients that their concerns are taken seriously.  ',
        },
        {
            question: 'How does ORMTechies monitor my healthcare reputation?     ',
            answer: 'ORMTechies uses advanced tools to monitor online mentions, reviews, and social media activity related to your healthcare practice. This helps us quickly identify and address any issues that may arise. ',
        },
        {
            question: 'How does Reputation Management for Healthcare affect patient trust?  ',
            answer: `Healthcare Reputation directly affects patient trust by ensuring that potential patients see positive reviews and accurate information about your practice. This builds confidence in your services. `,
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
                <FAQSection faqs={HealthFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
