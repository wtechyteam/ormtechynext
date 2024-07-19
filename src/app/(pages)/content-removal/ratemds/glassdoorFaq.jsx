'use client'
import FAQSection from '../../../common/Faq';
import React from 'react';

function GlassdoorFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GlassdoorFaqs = [
        {
            question: ' What is RateMDs?   ',
            answer: 'RateMDs is a popular online platform where patients can rate and review healthcare providers. ORM Techies helps medical professionals manage their profiles, ensuring accurate and positive representations. ',
        },
        {
            question: 'Why is my RateMDs profile important?   ',
            answer: 'Your RateMDs profile significantly influences potential patients’ decisions. ORM Techies enhances your profile by promoting positive reviews and addressing negative feedback effectively. ',
        },
        {
            question: 'Can ORM Techies help in responding to reviews on RateMDs?  ',
            answer: 'Yes, ORM Techies provides guidance and templates for professionally responding to both positive and negative reviews, helping you maintain a positive and professional online presence. ',
        },
        {
            question: 'How does ORM Techies handle privacy concerns with online reviews?    ',
            answer: `ORM Techies ensures that all patient interactions and reviews adhere to privacy laws and guidelines, protecting both your practice’s and your patients' privacy while managing your online reputation. `,
        },
        {
            question: 'How does ORM Techies improve my rating on RateMDs?   ',
            answer: `ORM Techies employs strategies like patient engagement, feedback solicitation, and content optimization to improve your overall rating on RateMDs, presenting a more favorable image to potential patients. `,
        },
        {
            question: 'What sets ORM Techies apart in managing RateMDs profiles?   ',
            answer: `ORM Techies offers a personalized approach, leveraging advanced tools and extensive industry experience to provide comprehensive and effective reputation management tailored to each healthcare provider’s needs. `,
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
