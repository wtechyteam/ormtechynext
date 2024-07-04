'use client'
import FAQSection from './../../../common/Faq';
import React from 'react';

function PersonalBrandingFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const ReputationRepairFaqs = [
        {
            question: 'How long does it take to see results from personal branding efforts?',
            answer: 'Results vary depending on various factors such as your industry, target audience, and the strategies employed. However, with consistent effort and strategic planning, you can start seeing noticeable results within a few months.',
        },
        {
            question: 'Can branding for oneself benefit businesses as well?',
            answer: 'Absolutely! A personal brand is not limited to individuals; companies may also benefit from it by increasing their exposure and reputation. A strong personal brand can humanize your company and make it more relatable to your target audience.',
        },
        {
            question: 'Do I need to be active on all social media platforms for effective individual branding?',
            answer: 'Not necessarily. It\'s more important to focus on the platforms where your target audience is most active. We can help you identify the right platforms and develop strategies to maximize your presence on them.',
        },
        {
            question: 'How much do personal branding services cost?',
            answer: 'The cost of branding services varies depending on the scope of work and the level of customization required. We offer flexible pricing options to suit your budget and needs.',
        },
        {
            question: 'Is individual branding a one-time effort, or does it require ongoing maintenance?',
            answer: 'It is an ongoing process that requires continuous effort and adaptation. We offer ongoing support and maintenance services to ensure that your personal brand remains relevant and impactful over time.',
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
