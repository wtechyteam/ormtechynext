'use client'
import FAQSection from './../../../../common/Faq';
import React from 'react';

function GoogleReviewsFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GoogleReviewsFaqs = [
        {
            question: 'Can I remove a Google review ? ',
            answer: 'Unfortunately, you cannot directly remove a Google review from your business profile. However, you can flag it for review by Google if it violates their content guidelines. ',
        },
        {
            question: 'What happens after I flag a Google review? ',
            answer: 'Google will review your report and decide whether to remove the review. You may receive an update notification from Google.',
        },
        {
            question: 'Is it guaranteed that an ORM service can remove a negative Google review? ',
            answer: 'No, there is no guarantee that an ORM service can remove a negative review. Google has the final say on whether a review violates their policies.  ',
        },
        {
            question: 'What if a negative Google review is fake or fabricated? ',
            answer: 'If you believe a review is fake, you can flag it for removal as mentioned earlier. Additionally, you can respond to the review, clarifying that the information is incorrect. ',
        },
        {
            question: 'Can I pay someone to write positive Google reviews for my business? ',
            answer: `No, Google strictly prohibits fake reviews. Paying for positive reviews can violate Google's policies and harm your business's reputation in the long run. `,
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
                <FAQSection faqs={GoogleReviewsFaqs} />
            </div>
        </section>
    );
}

export default GoogleReviewsFaq;
