"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import HubspotForm from 'react-hubspot-form';

const QuoteForm = () => {

    
    return (
        <div>
            
                    <h3 className='title-lg dark_font text-center fw-bold margin_bottom_40'>How Can We Help?</h3>
                    <HubspotForm 
                portalId='47335383'
                formId='4681e82f-f22f-4042-b218-32ffc2eb6884'
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
            />
            
            
        </div>
    )
}

export default QuoteForm