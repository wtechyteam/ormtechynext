import React from "react";
import InnerTopBanner from "../common/innerTopBanner";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm/page";
import { MdLocationPin, MdLocalPhone, MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <InnerTopBanner
        title="There’s No Harm In Asking – And No Fees For Trying"
        info="If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals."
      />
      <section className="sectionPadding bg_gray">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
                       <Col lg={12} >
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default ContactPage;
