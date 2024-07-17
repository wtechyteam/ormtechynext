'use client'
import FAQSection from './../../../common/Faq';
import React from 'react';

function PersonalBrandingFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const ReputationRepairFaqs = [
        {
            question: 'What is reputation repair?  ',
            answer: `Reputation repair involves strategies and actions aimed at restoring and improving an individual's or business's online image. This includes removing or suppressing negative content, promoting positive information, and ensuring a favorable online presence.`,
        },
        {
            question: 'How long does it take to repair a reputation?  ',
            answer: 'The timeframe for reputation repair varies depending on the severity of the damage and the specific strategies employed. While minor issues may be resolved within a few months, more significant damage can take six months to over a year to fully address. ',
        },
        {
            question: 'Can negative reviews be removed?  ',
            answer: 'Yes, negative reviews can often be removed or suppressed using a combination of legal, ethical, and strategic methods. This may include negotiating with review sites, addressing the concerns of the reviewers, and generating positive content to overshadow negative reviews. ',
        },
        {
            question: 'What sets ORM Techies apart from other reputation repair services?  ',
            answer: 'ORM Techies stands out due to our personalized approach, advanced strategies, and extensive industry experience. Our team of experts uses the latest tools and techniques to deliver customized solutions that effectively restore and enhance your online reputation. ',
        },
        {
            question: 'How does ORM Techies approach reputation repair?  ',
            answer: 'Our approach involves a comprehensive analysis of your current online presence, identification of negative content, and the development of a tailored strategy. We focus on content removal, positive content creation, SEO optimization, and continuous monitoring to ensure lasting results. ',
        },
        {
            question: 'What kind of results can I expect from ORM Techies? ',
            answer: 'While results vary depending on the severity of the situation, our clients typically see significant improvements in their online reputation. This includes increased positive visibility, suppressed negative content, and enhanced overall online presence.  ',
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
                <FAQSection faqs={ReputationRepairFaqs} />
            </div>
        </section>
    );
}

export default PersonalBrandingFaq;
