'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const MouthshutFaqs = [
        {
            question: 'How do negative reviews on Mouthshut affect my business? ',
            answer: 'Negative reviews can hurt your brand image and deter customers. Studies show 91% of consumers trust online reviews as much as personal recommendations. ',
        },
        {
            question: 'How can I manage Mouthshut reviews effectively?  ',
            answer: `Respond promptly and professionally to both positive and negative reviews. Encourage satisfied customers to leave positive reviews. Consider partnering with a Mouthshut review management company for expert help. `,
        },
        {
            question: 'What are the benefits of positive Mouthshut reviews?   ',
            answer: 'Positive reviews increase brand visibility on Mouthshut, build trust and credibility, and can lead to higher conversion rates. ',
        },
        {
            question: 'Is Mouthshut review management important?    ',
            answer: 'Yes! Mouthshut is a major platform in India, and actively managing reviews shows you care about customer feedback and online reputation. ',
        },
        {
            question: 'What is the difference between reputation management and Mouthshut review management?    ',
            answer: `Reputation management encompasses a broader strategy for managing your online image, including Mouthshut reviews. Mouthshut review management specifically focuses on monitoring and responding to reviews on that platform.  `,
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
                <FAQSection faqs={MouthshutFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
