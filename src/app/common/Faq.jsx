'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

function FAQSection({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqWrapper">
            {faqs.map((faq, index) => (
                <div className='faqWrap' key={index}>
                    <h4 onClick={() => handleToggle(index)} className={`title title-sm fw-semibold mb-0 ${openIndex === index && 'active'}`}>
                        {faq.question}
                        <div className="faqIcon">{openIndex === index ? <FaMinus /> : <FaPlus />}</div>
                    </h4>
                    {openIndex === index &&
                        <div className='description'>{faq.answer}</div>
                    }
                </div>
            ))}
        </div>
    );
}

export default FAQSection;
