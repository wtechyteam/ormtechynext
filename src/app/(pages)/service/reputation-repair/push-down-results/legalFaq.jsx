'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const LegalFaqs = [
        {
            question: ' What are Push Down Results?  ',
            answer: 'Push Down Results is a strategy used in online reputation management to demote negative search engine results by promoting positive, relevant content.  ',
        },
        {
            question: 'How long does it take to see results?  ',
            answer: `The timeline for seeing results can vary depending on the extent of the negative content and the effectiveness of the strategies employed. Generally, clients start seeing improvements within a few months. `,
        },
        {
            question: 'Is Push Down Results a permanent solution?   ',
            answer: 'While Push Down Results can provide long-term benefits, it requires ongoing effort to maintain a positive online presence and mitigate future negative content.  ',
        },
        {
            question: 'Do you use black-hat SEO techniques?     ',
            answer: 'No, we strictly adhere to ethical, white-hat SEO techniques to ensure long-term success without risking your online reputation. ',
        },
        {
            question: 'How do you measure the success of your Push Down Results strategy?  ',
            answer: `We use advanced analytics tools to monitor search engine rankings and measure the impact of our strategies. Regular reports are provided to keep clients informed of progress.  `,
        },
        {
            question: ` Why should I choose ORM Techies for Push Down Results?     `,
            answer: `ORM Techies offers a team of experienced professionals, customized solutions, proven results, and a commitment to ethical practices and client satisfaction.   `,
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
