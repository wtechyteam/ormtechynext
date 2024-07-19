'use client'
import FAQSection from '../../../common/Faq';
import React from 'react';

function GlassdoorFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GlassdoorFaqs = [
        {
            question: 'Why is maintaining a good reputation on TripAdvisor important? ',
            answer: 'TripAdvisor is a key platform for travelers making decisions. A good reputation can attract more visitors. ORM Techies ensures your profile showcases positive reviews and high ratings to enhance your credibility.  ',
        },
        {
            question: 'Can ORM Techies remove negative reviews from TripAdvisor?  ',
            answer: 'Direct removal is often not possible, but ORM Techies can manage the impact by reporting fake reviews, responding professionally to negative feedback, and encouraging satisfied customers to leave positive reviews.  ',
        },
        {
            question: 'How does ORM Techies improve my TripAdvisor rating?   ',
            answer: ' ORM Techies employs strategies such as soliciting reviews from happy customers, optimizing profile content, and responding to reviews effectively to improve your overall rating on TripAdvisor.  ',
        },
        {
            question: 'How does ORM Techies handle negative feedback on TripAdvisor?   ',
            answer: 'ORM Techies responds to negative feedback professionally and constructively, addressing concerns and demonstrating a commitment to customer satisfaction, which can help mitigate the impact of negative reviews. ',
        },
        {
            question: 'How quickly can ORM Techies improve my TripAdvisor profile?   ',
            answer: `The timeframe varies, but ORM Techies typically starts seeing improvements within a few weeks through consistent reputation management efforts and strategic content promotion.  `,
        },
        {
            question: 'What kind of content does ORM Techies create for TripAdvisor profiles?    ',
            answer: `ORM Techies creates engaging and informative content, including detailed business descriptions, high-quality photos, and engaging responses to reviews, to enhance your TripAdvisor profile. `,
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
