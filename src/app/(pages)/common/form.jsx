"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import HubspotForm from "react-hubspot-form";

const CommonForm = ({ textArea, formBg, policy }) => {

    
    return (
        <div>
            <HubspotForm
          portalId="46372694"
          formId="8aa75828-2572-4499-be85-08fbf0af9587"
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
        </div>
    )
}

export default CommonForm