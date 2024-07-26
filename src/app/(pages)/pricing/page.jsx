import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import { Container, Col, Row } from "react-bootstrap";
import QuoteForm from "./quoteForm/page";

const PricingPage = () => {
  return (
    <>
     <head>
         <title>ORMTechies Pricing: Online Reputation Management</title>
         <meta title="ORMTechies Pricing: Online Reputation Management"/>
         <meta name="description" content="Get Pricing plans for online reputation management services. We offers cost-effective solutions to boost your online image and protect your brand reputation. "/>
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
