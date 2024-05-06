"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';

const QuoteForm = () => {

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
            <form className="customForm rounded-2" ref={form} onSubmit={sendEmail}>
                <Row className="mx-0">
                    <h3 className='title-lg dark_font text-center fw-bold margin_bottom_40'>How Can We Help?</h3>
                    <Col md={6} className='inputWrap'>
                        <input placeholder='Name*' className='form_input' type="text" name="from_name" required />
                    </Col>
                    <Col md={6} className='inputWrap'>
                        <input className='form_input' placeholder='Email*' type="email" name="from_email" required />
                    </Col>
                    <Col lg={12} className='inputWrap'>
                        <input placeholder='Number*' className='form_input' type="number" name="phone" required />
                    </Col>
                    <Col lg={12} className='inputWrap'>
                        <input className='form_input' type="text" name="subject" placeholder="Subject*" required />
                    </Col>
                    <Col lg={12} className='inputWrap'>
                        <textarea className='form_input text_area' placeholder='Message...' name="message" />
                    </Col>
                    <Col lg={12} className="">
                        <p className='policy_text text-end'>
                            Your details are safe & confidential. <br />
                            View our <span>Privacy Policy</span>.
                        </p>
                        <button className='w-100 py-2 formButton' type="submit" >Submit</button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default QuoteForm