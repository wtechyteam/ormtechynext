'use client'
import FAQSection from './../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CorporateFaqs = [
        {
            question: '  Why is online reputation management important for businesses in Los Angeles? ',
            answer: 'In Los Angeles, a competitive market, online reputation management is crucial as customers heavily rely on reviews and ratings to make purchasing decisions. ',
        },
        {
            question: 'How does ORMTechies handle negative feedback for businesses in Los Angeles? ',
            answer: `ORMTechies promptly addresses negative reviews and comments by responding professionally and empathetically, aiming to resolve issues and turn negative experiences into positive ones.  `,
        },
        {
            question: ' What are the benefits of amplifying positive feedback in Los Angeles?',
            answer: ' Amplifying positive feedback in Los Angeles can attract new customers, improve local SEO rankings, and build trust and credibility in your brand within the local market. ',
        },
        {
            question: 'How does ORMTechies help businesses in Los Angeles build brand loyalty through reputation management? ',
            answer: 'ORMTechies helps businesses in Los Angeles by maintaining a positive online reputation, responding to customer feedback, and fostering positive customer experiences to enhance brand loyalty. ',
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
