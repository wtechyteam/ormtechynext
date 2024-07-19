'use client'
import FAQSection from './../../../common/Faq';
import React from 'react';

function GoogleReviewsFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const GoogleReviewsFaqs = [
        {
            question: 'How can negative content in Google search results impact my business? ',
            answer: 'Negative content can damage your reputation, reduce customer trust, and affect sales. ORM Techies mitigate this by using SEO strategies to push negative content down in search results and highlighting positive content.',
        },
        {
            question: 'Can ORM Techies remove negative content from Google search results?   ',
            answer: 'Direct removal is challenging, but ORM Techies can define content through legal means and SEO techniques, making it less visible and reducing its impact on your reputation. ',
        },
        {
            question: 'How does ORM Techies improve my Google search results?  ',
            answer: 'ORM Techies employs strategies such as creating high-quality content, optimizing SEO, and managing backlinks to enhance your online presence and ensure positive content ranks higher in search results. ',
        },
        {
            question: ' How long does it take ORM Techies to improve my Google search results?  ',
            answer: 'The timeframe varies based on the complexity of the issue, but ORM Techies typically begins to see improvements within a few weeks through consistent and strategic reputation management efforts.  ',
        },
        {
            question: 'Can ORM Techies help with local SEO to improve my search results? ',
            answer: `Yes, ORM Techies offers local SEO services, optimizing your business for local searches by improving your Google My Business profile, managing local citations, and generating positive local reviews. `,
        },
        {
            question: 'How does ORM Techies handle negative media articles in search results? ',
            answer: `ORM Techies can reach out to publishers for corrections or retractions and use SEO techniques to push negative articles down in search results while promoting positive content to improve your online image.  `,
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
