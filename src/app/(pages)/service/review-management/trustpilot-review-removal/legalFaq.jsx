'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const TrustFaqs = [
        {
            question: ' Why should I consider removing Trustpilot reviews?  ',
            answer: `Removing negative reviews can improve your overall rating and enhance your business's reputation, making it more attractive to potential customers. `,
        },
        {
            question: 'Can you remove all types of reviews from Trustpilot?  ',
            answer: `We can help with the removal of reviews that violate Trustpilot's guidelines, such as fake reviews or those containing inappropriate content. `,
        },
        {
            question: 'Is it legal to remove Trustpilot reviews? ',
            answer: `Yes, it is legal to remove reviews that violate Trustpilot's terms and conditions, such as fake reviews or those that are defamatory.   `,
        },
        {
            question: 'What are the benefits of removing Trustpilot reviews?      ',
            answer: `Removing negative or false reviews can improve your business's online reputation, increase customer trust, and potentially boost revenue.`,
        },
        {
            question: 'How does ORMTechies help with review removal?   ',
            answer: `ORMTechies offers professional services to manage and remove negative Trustpilot reviews, ensuring your online reputation remains positive.  `,
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
                <FAQSection faqs={TrustFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
