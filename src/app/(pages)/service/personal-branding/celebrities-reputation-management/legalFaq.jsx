'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' What is Celebrity Reputation Management?  ',
            answer: 'Celebrity Reputation Management involves monitoring, influencing, and maintaining a positive online image for public figures. ORM Techies employs advanced tools and strategies to ensure celebrities are presented favorably across digital platforms.  ',
        },
        {
            question: 'Why do celebrities need Reputation Management?   ',
            answer: `Celebrities are constantly under public scrutiny, and a single negative incident can tarnish their image. ORM Techies help mitigate negative publicity and promote positive content to safeguard their reputation. `,
        },
        {
            question: 'Can ORM Techies remove negative content about a celebrity?    ',
            answer: 'Yes, ORM Techies can often remove or suppress negative content through legal requests, negotiations with webmasters, and strategic SEO techniques, ensuring a cleaner online presence for the celebrity.  ',
        },
        {
            question: 'What kind of positive content does ORM Techies create for celebrities?      ',
            answer: 'ORM Techies creates press releases, blog posts, social media content, and news articles highlighting the celebrity’s achievements, philanthropic efforts, and positive public appearances to build a favorable image. ',
        },
        {
            question: 'Can ORM Techies manage a celebrity’s social media accounts?    ',
            answer: `Yes, ORM Techies offers comprehensive social media management, including content creation, audience engagement, and crisis management to ensure the celebrity’s social media presence is positive and engaging.   `,
        },
        {
            question: ` How do ORM Techies handle online trolls and negative comments?     `,
            answer: `ORM Techies actively monitors social media and other platforms for negative comments and trolls, responding appropriately and using strategies to minimize their impact while promoting positive interactions.  `,
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
                <FAQSection faqs={LegalFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
