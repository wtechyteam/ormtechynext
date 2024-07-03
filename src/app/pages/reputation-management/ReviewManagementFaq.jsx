'use client'
import FAQSection from '@/app/common/Faq';
import React from 'react';

function ReviewManagementFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const ReviewManagementFaqs = [
        {
            question: 'How can a review management service benefit my business?',
            answer: 'A review management service can boost your online reputation, attract more customers, and improve search engine rankings. ORMTechies offers expert review management services to help you achieve these benefits.',
        },
        {
            question: 'What do review management companies do?',
            answer: 'Review management companies specialize in monitoring and improving your online reviews. ORMTechies collaborates with leading review management companies to offer you the best solutions.',
        },
        {
            question: 'How can a review management service benefit my business?',
            answer: 'A review management service can help you maintain a positive online reputation, manage customer feedback, and improve customer trust. So, we offer expert review management services tailored to your business needs.',
        },
        {
            question: 'Can ORMTechies help with negative reviews?  ',
            answer: 'Yes, ORMTechies can help you address and mitigate the impact of negative reviews by responding promptly and professionally, turning negative experiences into opportunities for improvement. ',
        },
        {
            question: 'Why choose ORMTechies for review management service? ',
            answer: 'We offer comprehensive, professional, and tailored review management services to enhance your online reputation and business success. ',
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
                <FAQSection faqs={ReviewManagementFaqs} />
            </div>
        </section>
    );
}

export default ReviewManagementFaq;
