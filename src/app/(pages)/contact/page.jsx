import React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm/page";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <head>
        <title>Contact Us </title>
        <meta
          name="description"
          content="Discover how we can help you transform Glassdoor reviews into actionable insights. Learn strategies to manage, respond, and remove negative reviews effectively. "
        />
        <link rel="canonical" href="https://www.ormtechies.com/contact" />
        <meta name="robots" content="index, follow" />
      </head>
      <InnerTopBanner
        title="There’s No Harm In Asking – And No Fees For Trying"
        info="If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals."
        imageSrc="./images/contact.png"
      />
      <section className="sectionPadding bg_gray">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col lg={12}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
