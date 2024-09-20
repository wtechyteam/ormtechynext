'use client'
import FAQSection from './../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CorporateFaqs = [
        {
            question: ' Why is online reputation management important for businesses in New Zealand? ',
            answer: 'ORM is crucial because consumers in New Zealand heavily rely on online reviews and social media to make purchasing decisions. A positive online reputation builds trust, attracts customers, and gives businesses a competitive edge. ',
        },
        {
            question: 'How does ORMTechies help businesses manage their online reputation in New Zealand? ',
            answer: `ORMTechies provides comprehensive ORM services, including monitoring online mentions, managing reviews, creating positive content, handling negative feedback, and optimizing search engine results to enhance your online presence. `,
        },
        {
            question: 'Can ORMTechies help improve my search engine rankings? ',
            answer: 'Yes, our ORM strategies include creating and optimizing high-quality content to improve your search engine rankings. Positive reviews and mentions enhance your visibility in search results, attracting more organic traffic. ',
        },
        {
            question: ' Can ORMTechies help with personal reputation management in New Zealand?  ',
            answer: ' Yes, ORMTechies offers personal reputation management services to help individuals maintain a positive online image, including monitoring online mentions, managing reviews, and creating positive content.  ',
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
