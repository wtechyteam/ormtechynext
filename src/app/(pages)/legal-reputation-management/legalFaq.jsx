'use client'
import FAQSection from './../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' Why is law firm reputation management important? ',
            answer: 'Law reputation management is crucial for attracting clients, maintaining credibility, and staying competitive in the legal industry. ',
        },
        {
            question: 'How can ORMTechies help with law firm reputation management?  ',
            answer: `ORMTechies specializes in legal reputation management, offering customized solutions to monitor, manage, and improve your firm's online presence.`,
        },
        {
            question: 'What are the benefits of law firm reputation management?   ',
            answer: 'Benefits include enhanced client trust, improved search engine rankings, effective crisis management, and a competitive advantage. ',
        },
        {
            question: 'How does ORMTechies monitor online reviews for law firms?     ',
            answer: 'ORMTechies monitors online reviews across platforms like Google, Yelp, and legal directories, responding promptly to maintain a positive reputation.',
        },
        {
            question: 'What should I do if my law firm faces a reputation crisis?    ',
            answer: `ORMTechies provides crisis management strategies to minimize damage and restore your firm's reputation quickly and effectively.  `,
        },
        {
            question: `How does ORMTechies ensure my law firm's online reputation remains positive?      `,
            answer: `ORMTechies uses advanced tools and strategies to proactively manage your firm's online presence, responding to feedback and optimizing content.  `,
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
