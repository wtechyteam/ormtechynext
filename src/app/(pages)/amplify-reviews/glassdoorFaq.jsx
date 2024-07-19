'use client'
import FAQSection from './../../common/Faq';
import React from 'react';

function GlassdoorFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GlassdoorFaqs = [
        {
            question: 'What does it mean to amplify reviews?  ',
            answer: `Amplifying reviews involves promoting positive customer reviews to enhance your brand's reputation. ORM Techies uses various strategies to highlight these reviews across different platforms, increasing their visibility. `,
        },
        {
            question: 'How can ORM Techies help in amplifying my positive reviews?  ',
            answer: 'ORM Techies promotes positive reviews through SEO, social media, and other digital marketing strategies, ensuring they reach a wider audience and contribute to a positive online reputation. ',
        },
        {
            question: 'How do ORM techies ensure the authenticity of amplified reviews? ',
            answer: 'ORM Techies encourages genuine customer feedback and strictly adheres to ethical practices, ensuring that all amplified reviews are authentic and reflect true customer experiences.  ',
        },
        {
            question: 'How do ORM Techies handle negative reviews during the amplification process?    ',
            answer: 'ORM Techies addresses negative reviews promptly and professionally, working to resolve issues and encourage positive follow-up reviews, which are then amplified to improve overall perception.  ',
        },
        {
            question: 'Can ORM Techies help generate more positive reviews?',
            answer: `Yes, ORM Techies implements strategies such as follow-up emails, feedback forms, and in-service reminders to encourage satisfied customers to leave positive reviews. `,
        },
        {
            question: 'How does amplifying reviews affect my SEO?  ',
            answer: `Amplifying positive reviews can enhance your SEO by increasing user-generated content and engagement, which search engines favor. ORM Techies uses these reviews to boost your search rankings.  `,
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
