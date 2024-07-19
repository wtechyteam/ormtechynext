'use client'
import FAQSection from '../../../common/Faq';
import React from 'react';

function GlassdoorFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GlassdoorFaqs = [
        {
            question: 'Why is maintaining a good reputation on Facebook important?  ',
            answer: ' Facebook is a major platform for customer interaction and brand awareness. ORM Techies helps ensure your Facebook presence is positive, enhancing customer trust and engagement.',
        },
        {
            question: 'How can negative comments on Facebook impact my business? ',
            answer: 'Negative comments can harm your brand image and deter potential customers. ORM Techies monitors and manages these comments, providing appropriate responses and promoting positive content.  ',
        },
        {
            question: 'How does ORM Techies improve customer engagement on Facebook?    ',
            answer: 'ORM Techies creates and manages engaging content, responds to customer inquiries, and fosters positive interactions, improving overall customer engagement on your Facebook page. ',
        },
        {
            question: 'What strategies does ORM Techies use to enhance my Facebook profile?  ',
            answer: 'ORM Techies employs strategies like content creation, reputation monitoring, targeted advertising, and active community management to enhance your Facebook profile and attract more followers.  ',
        },
        {
            question: 'How does ORM Techies handle fake accounts or impersonations on Facebook?   ',
            answer: `ORM Techies identifies and reports fake accounts or impersonations to Facebook, ensuring swift action is taken to protect your brand’s integrity and authenticity.  `,
        },
        {
            question: ' What type of content does ORM Techies create for Facebook?     ',
            answer: `ORM Techies creates a variety of content, including posts, images, videos, and stories that are engaging, relevant, and tailored to your brand’s voice and audience preferences. `,
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
