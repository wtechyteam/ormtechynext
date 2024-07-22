import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import { Container, Col, Row } from "react-bootstrap";
import QuoteForm from "./quoteForm/page";

const PricingPage = () => {
  return (
    <>
     <head>
         <title>Pricing  </title>
         <meta name="description" content="Discover how we can help you transform Glassdoor reviews into actionable insights. Learn strategies to manage, respond, and remove negative reviews effectively. "/>
         <link rel="canonical" href="https://www.ormtechies.com/pricing" />
         <meta name="robots" content="index, follow" />
       </head>
      <InnerTopBanner
        title="Pricing"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
        imageSrc="./images/pricing.png"
      />
      <section className="sectionPadding pt-0 bg_gray height_100">
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Row className="w-100 justify-content-center">
            <Col lg={8} className="mt-5">
              <QuoteForm />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PricingPage;
