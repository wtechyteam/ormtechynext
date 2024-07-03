'use client'
import FAQSection from '@/app/common/Faq';
import React from 'react';

function HomeFaq() {
    const generalFaqs = [
        {
            question: 'How long does it take to see results from your reputation management services?',
            answer: 'Our timeline for delivering results varies depending on the nature of your online reputation issues. However, we strive to implement effective strategies promptly to ensure noticeable improvements within a reasonable timeframe.',
        },
        {
            question: 'Can you remove negative content from search engine results completely?',
            answer: 'While we cannot guarantee the complete removal of negative content, we employ various strategies, such as suppression and mitigation, to minimize its visibility and impact on your online reputation.',
        },
        {
            question: 'How do you handle online reviews on different platforms?',
            answer: 'We have specialized teams dedicated to monitoring and managing online reviews across various platforms. We respond promptly to feedback, address concerns, and work towards resolving any issues to maintain a positive online reputation.',
        },
        {
            question: 'Is ORM only for businesses, or can individuals benefit from it as well?',
            answer: "Both businesses and individuals can benefit from ORM services. Whether you're a professional seeking to enhance your personal brand or a business aiming to protect its online image, our services are tailored to meet your specific needs.",
        },
        {
            question: "How much do ORM Techies' services cost?",
            answer: 'The cost of our services depends on various factors, including the scope of work, the complexity of your online reputation issues, and the duration of the engagement. Contact us today for a personalized quote based on your requirements.',
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
                <FAQSection faqs={generalFaqs} />
            </div>
        </section>
    );
}

export default HomeFaq;
