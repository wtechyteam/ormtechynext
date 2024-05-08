import FAQSection from '@/app/common/Faq';
import React, { useState } from 'react';

function HomeFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const faqs = [
        {
            question: 'How long does it take to see results from your reputation management services?',
            answer: 'Our timeline for delivering results varies depending on the nature of your online reputation issues. However, we strive to implement effective strategies promptly to ensure noticeable improvements within a reasonable timeframe.',
        },
        {
            question: 'Why do we use it?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            question: 'Where does it come from?',
            answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        },
        // Add more FAQs as needed
    ];

    return (
        <section className='sectionPadding'>
            <div className="container">
                <div class="title_section text-center">
                    <h2 class="title-xl fw-bold mb-5">FAQs</h2>
                    {/* <p>At ORM Techies, we cater to a diverse clientele across various industries, including:</p> */}
                </div>
                <FAQSection />
            </div>
        </section>

    );
}

export default HomeFaq;
