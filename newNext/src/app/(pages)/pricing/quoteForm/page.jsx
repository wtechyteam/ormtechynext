"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import HubspotForm from 'react-hubspot-form';

const QuoteForm = () => {

    
    return (
        <div>
            
                    <h3 className='title-lg dark_font text-center fw-bold margin_bottom_40'>Fill Up Details To get a Quote</h3>
                    <HubspotForm 
                portalId='46372694'
                formId='5057504d-4b19-41c8-88ce-a34caae4ffd0'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
            
            
        </div>
    )
}

export default QuoteForm