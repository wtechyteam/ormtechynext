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
                portalId='47335383'
                formId='5d75cf09-1c90-48ef-b913-288c14d1791d'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
            
            
        </div>
    )
}

export default QuoteForm