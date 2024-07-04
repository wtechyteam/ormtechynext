import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StatisticsSection = () => {
  return (
    <section className="statisticsSection">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="statValue">95%</h2>
            <p className="statDescription">Of shoppers read online reviews<br />before making a purchase</p>
          </Col>
          <Col>
            <h2 className="statValue">5M</h2>
            <p className="statDescription">Australian visitors to ProductReview<br />each month</p>
          </Col>
          <Col>
            <h2 className="statValue">94%</h2>
            <p className="statDescription">Of searchers will avoid businesses<br />with negative reviews</p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .statisticsSection {
          background-color: #053247; /* Dark blue color */
          padding: 40px 0;
          color: #ffffff; /* White text color */
          min-height: 400px; /* Increase the height as needed */
          display: flex;
          align-items: center;
          text-align: center;
        }

        .statValue {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .statDescription {
          font-family: "DM Sans", "Noto Sans", helvetica, arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
};

export default StatisticsSection;
