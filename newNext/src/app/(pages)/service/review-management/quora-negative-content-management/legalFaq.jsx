'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const QuoraFaqs = [
        {
            question: ' Can ORMTechies remove negative comments completely from Quora?  ',
            answer: `We strive to remove negative comments from Quora, although complete removal is subject to Quora's policies and guidelines. `,
        },
        {
            question: 'Why is Quora negative content management important? ',
            answer: `It's important because negative content on Quora can harm your online reputation and influence how others perceive you or your brand. `,
        },
        {
            question: 'How does ORMTechies manage negative content on Quora?  ',
            answer: 'ORMTechies monitors Quora profiles, removes negative comments using advanced techniques, and repairs any damage to your online reputation.  ',
        },
        {
            question: 'What types of negative content does ORMTechies handle on Quora?  ',
            answer: 'ORMTechies handles negative comments, reviews, and posts on Quora that may affect your online reputation. ',
        },
        {
            question: 'How does ORMTechies handle false or misleading negative content on Quora?    ',
            answer: `ORMTechies works to identify false or misleading negative content and takes appropriate actions to address it.   `,
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
                <FAQSection faqs={QuoraFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
