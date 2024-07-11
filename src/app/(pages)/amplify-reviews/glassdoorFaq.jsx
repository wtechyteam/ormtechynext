'use client'
import FAQSection from './../../common/Faq';
import React from 'react';

function GlassdoorFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GlassdoorFaqs = [
        {
            question: 'What steps can I take to remove Glassdoor reviews? ',
            answer: 'To remove Glassdoor reviews, identify the reviews violating Glassdoor’s guidelines, gather evidence, and file a detailed report with Glassdoor. We can assist with this process to ensure success.  ',
        },
        {
            question: 'How long does it take to remove a Glassdoor review? ',
            answer: 'The time it takes to remove a Glassdoor review varies. Once a report is filed, Glassdoor reviews the evidence and decides, which can take several days to weeks. ',
        },
        {
            question: 'Can Glassdoor reviews be removed if they contain personal attacks?  ',
            answer: 'Yes, reviews containing personal attacks or defamatory content can be reported and potentially removed if they violate Glassdoor’s guidelines. ',
        },
        {
            question: 'How can ORMTechies help with removing Glassdoor reviews?   ',
            answer: 'ORMTechies offers expert services to monitor, assess, and report reviews that violate guidelines, ensuring a higher chance of successful removal. ',
        },
        {
            question: 'Can I remove a review from Glassdoor if it affects my business reputation?  ',
            answer: `Reviews impacting your business reputation can be removed if they violate Glassdoor’s policies. ORMTechies can assist in identifying and reporting such reviews. `,
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
                <FAQSection faqs={GlassdoorFaqs} />
            </div>
        </section>
    );
}

export default GlassdoorFaq;
