'use client'
import FAQSection from '../../../../common/Faq';
import React from 'react';

function LegalFaq() {
    // Define your FAQ data as an array of objects with 'question' and 'answer' properties
    const CryptoFaqs = [
        {
            question: ' How does blockchain impact cryptocurrency reputation management? ',
            answer: 'Blockchain ensures transparency and accuracy, which are critical for maintaining a trustworthy reputation in the cryptocurrency space. It allows for the verification of transactions and information, which builds confidence among users and investors. ',
        },
        {
            question: 'What are ICO Marketing Services in the context of cryptocurrency reputation management?  ',
            answer: `ICO Marketing Services involve promoting and managing the initial coin offering (ICO) to build a positive perception and attract investors. ORMTechies uses social media marketing, PPC ads, influencer marketing, and community engagement to create awareness and credibility for the ICO. `,
        },
        {
            question: 'How does ORMTechies handle negative comments about cryptocurrencies?   ',
            answer: 'ORMTechies quickly identifies negative comments and responds strategically. They address concerns, correct misinformation, and engage with users to resolve issues promptly. This proactive approach helps to maintain a positive reputation. ',
        },
        {
            question: 'How does ORMTechies ensure the security of cryptocurrency reputations?      ',
            answer: `ORMTechies uses secure systems and protocols to safeguard cryptocurrencies' online reputations from cyber threats. They implement encryption, secure access controls, and regular security audits to protect sensitive information.`,
        },
        {
            question: 'How does ORMTechies use ICO Marketing Services to promote a new cryptocurrency?    ',
            answer: `ORMTechies utilizes social media marketing, PPC ads (Google & Facebook Ads), influencer marketing, and community engagement to promote ICOs effectively. They create targeted campaigns to reach potential investors and build credibility for the new cryptocurrency.  `,
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
                <FAQSection faqs={CryptoFaqs} />
            </div>
        </section>
    );
}

export default LegalFaq;
