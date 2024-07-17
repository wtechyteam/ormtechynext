'use client'
import FAQSection from './../../../common/Faq';
import React from 'react';

function ReviewManagementFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const ReviewManagementFaqs = [
        {
            question: 'Why is online reputation management important? ',
            answer: `Online reputation is crucial because it directly impacts how others perceive your brand. A positive online reputation builds trust and credibility, leading to increased customer satisfaction and loyalty. Conversely, negative or inaccurate information can damage your brand's reputation and deter potential customers. `,
        },
        {
            question: 'How can reputation management benefit my business? ',
            answer: 'Effective reputation can benefit your business in several ways:Enhanced Brand Image Improving and maintaining a positive perception of your brand. Increased Trust: Building trust among potential customers and partners.Higher Customer Satisfaction: Responding to feedback promptly and resolving issues.Competitive Advantage: Standing out in a crowded market with a strong online presence. ',
        },
        {
            question: 'How do I measure the success of reputation management efforts? ',
            answer: 'Success in reputation management can be measured through various metrics:Positive Sentiment: Increase in positive mentions and reviews. Online Visibility: Improved search engine rankings and increased brand visibility. Customer Engagement: Higher engagement rates and positive interactions with customers. Brand Trust: Improved perception of your brand and increased trust among your audience. ',
        },
        {
            question: 'How does online reputation management benefit businesses?   ',
            answer: 'Online reputation management is essential for businesses as it directly impacts customer perception and trust. A positive online reputation can lead to increased customer satisfaction, improved brand loyalty, and better business opportunities. ',
        },
        {
            question: 'How does ORM Techies approach reputation management differently?  ',
            answer: `ORMTechies takes a proactive and strategic approach to reputation management. We use advanced tools and analytics to monitor your brand's online presence in real-time, allowing us to promptly respond to both positive and negative feedback. Our strategies are customized to align with your business goals, ensuring that we enhance your brand's reputation effectively. `,
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
