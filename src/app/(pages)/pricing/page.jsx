import * as React from "react";
import InnerTopBanner from "./../common/innerTopBanner";
import { Container, Col, Row } from "react-bootstrap";
import QuoteForm from "./quoteForm/page";

const PricingPage = () => {
  return (
    <>
      <InnerTopBanner
        title="Pricing"
        info="Are you looking to boost your online presence and reputation? At ORMTechies, we specialize in advanced online review management that can significantly enhance your business's image."
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
