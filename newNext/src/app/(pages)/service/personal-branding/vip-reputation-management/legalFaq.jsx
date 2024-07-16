'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const VipFaqs = [
        {
            question: ' Why is VIP Reputation important?    ',
            answer: 'High-profile individuals are more susceptible to public scrutiny. VIP Reputation Management helps safeguard their image, manage public perception, and address any negative content promptly.   ',
        },
        {
            question: 'What services are included in VIP Reputation?  ',
            answer: `ORMTechies offers comprehensive VIP Reputation services including online monitoring, crisis management, content creation, social media management, and SEO optimization.  `,
        },
        {
            question: 'How often does ORMTechies provide reports on a VIP’s reputation?     ',
            answer: 'We provide regular reports and real-time alerts to keep you informed about your online presence and any potential issues that arise.  ',
        },
        {
            question: 'How does ORMTechies handle negative reviews or comments for VIPs?    ',
            answer: 'We respond promptly and professionally to negative reviews or comments, addressing concerns and providing solutions to mitigate any potential damage to your reputation.  ',
        },
        {
            question: 'Can ORMTechies help build a VIP’s personal brand?    ',
            answer: `Absolutely. We develop a cohesive brand strategy, including visual identity, messaging, and content that reflects your values and enhances your public image.   `,
        },
        {
            question: `Why should a VIP choose ORMTechies for reputation management?    `,
            answer: `VIPs should choose ORMTechies because of our expertise, personalized approach, and commitment to protecting and enhancing your reputation in the digital age.   `,
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
                <FAQSection faqs={VipFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
