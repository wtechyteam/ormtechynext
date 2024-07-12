'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const ConstructionFaqs = [
        {
            question: ' Why are online reviews important for construction companies? ',
            answer: `Online reviews are crucial for construction companies because they influence potential clients' decisions. Positive reviews can attract new business, while negative reviews can deter potential clients. Managing these reviews effectively is essential for maintaining a good reputation. `,
        },
        {
            question: 'How does ORMTechies help with Construction Reputation Management?   ',
            answer: `ORMTechies uses advanced strategies to enhance your online reputation. We offer services like review management, social media management, and content development to ensure your construction company maintains a positive online presence. `,
        },
        {
            question: 'How can ORMTechies assist with Builder Review Management?    ',
            answer: 'ORMTechies helps by monitoring reviews, responding promptly to feedback, and encouraging satisfied clients to leave positive reviews. This proactive approach helps manage and improve your online reputation. ',
        },
        {
            question: 'How can we measure the success of our Construction Reputation Management efforts?   ',
            answer: 'Success can be measured by monitoring changes in your online reviews, tracking engagement on social media, and analyzing website traffic. ORMTechies uses advanced analytics tools to provide detailed reports on these metrics. ',
        },
        {
            question: 'What should we do if we receive a negative review? ',
            answer: `Respond to negative reviews promptly and professionally. Acknowledge the client's concerns, offer a solution if possible, and take the conversation offline to resolve the issue. This shows potential clients that you are committed to customer satisfaction.  `,
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
                <FAQSection faqs={ConstructionFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
