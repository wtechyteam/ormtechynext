import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedNumber from './../../common/numanimation';

const StatisticsSection = () => {
  return (
    <section className="statisticsSection">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="statValue"><AnimatedNumber initialValue={0} finalValue={88}/>%</h2>
            <p className="statDescription">Of online shoppers use reviews to guide their<br /> purchase decisions</p>
          </Col>
          <Col>
            <h2 className="statValue"><AnimatedNumber initialValue={0} finalValue={63}/>%</h2>
            <p className="statDescription">Of consumers will specifically check Google <br/>reviews before visiting a business</p>
          </Col>
          <Col>
            <h2 className="statValue"><AnimatedNumber initialValue={0} finalValue={94}/>%</h2>
            <p className="statDescription">Of searchers will avoid businesses with <br/>negative reviews</p>
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
