"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const CommonForm = ({ textArea, formBg, policy }) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_8tiqz08', 'template_ojpyfvk', form.current, {
                publicKey: 'R3qMEbTFpNoo0gXc8',
            })
            .then(
                () => {
                    setShow(true)
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form className={formBg ? "form_bg" : "commonForm"} ref={form} onSubmit={sendEmail}>
                <Row>
                    <Col xl={6} lg={12} sm={6} className='inputWrap'>
                        <input placeholder='Full Name*' className='form_input' type="text" name="from_name" required />
                    </Col>
                    <Col xl={6} lg={12} sm={6} className='inputWrap'>
                        <input placeholder='Phone*' className='form_input' type="number" name="phone" required />
                    </Col>
                    <Col lg={12} className='inputWrap'>
                        <input className='form_input' placeholder='Email*' type="email" name="from_email" required />
                    </Col>
                    {textArea &&
                        <>
                            <Col lg={12} className='inputWrap'>
                                <input className='form_input' type="text" name="subject" placeholder="Subject*" required />
                            </Col>
                            <Col lg={12} className='inputWrap'>
                                <textarea className='form_input text_area' placeholder='Message...' name="message" />
                            </Col>
                        </>
                    }
                    <Col lg={12} className="">
                        {policy &&
                            <p className='policy_text text-end text-white'>
                                Your details are safe & confidential. <br />
                                View our <span className='text-white'>Privacy Policy</span>.
                            </p>
                        }
                        <button className='w-100 py-2 formButton fw-bold' type="submit" >Get a free quote<FaArrowRight className='ms-2' /></button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default CommonForm