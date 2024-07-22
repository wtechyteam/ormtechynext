'use client'
import React from 'react';
import InnerTopBanner from '../common/innerTopBanner';
import QuoteForm from './quoteForm/page';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import siteLogo from "../../../../public/images/ORMLogoNew.svg";

const GetAQuote = () => {
  return (
    <>
    <head>
         <title>Content-Removal  </title>
         <meta name="description" content="Discover how we can help you transform Glassdoor reviews into actionable insights. Learn strategies to manage, respond, and remove negative reviews effectively. "/>
         <link rel="canonical" href="https://www.ormtechies.com/getAQuote" />
         <meta name="robots" content="index, follow" />
       </head>
      <section className='sectionPadding pt-0 bg_gray height_100'>

        {/* ----------------------------------------------------------header-link----------------------------------------------------- */}
        <div className='bg_dark p-3 margin_b_100'>
          <Container>
            <Link className="siteLogo" href="/">
              <Image className='orm_logo' width={100} src={siteLogo} title="ORM Techies" alt="ORM Techies" />
            </Link>
          </Container>
        </div>
        <Container>
          <Row>

            {/* -----------------------------------------------------------form---------------------------------------------------------- */}
            <Col lg={8}>
              <QuoteForm />
            </Col>

            {/* ----------------------------------------------------right-card-section----------------------------------------------------- */}
            <Col lg={4}>
              <div className='item_center flex-column mt-5 mt-lg-0'>
                <Image className='card_profile_img mb-4' width={100} height={100} src="/images/card-profile.jpg" alt="profile" title="profile" />
                <p className='w-75 text-center mb-4'>
                  {"We will connect with you as soon as possible "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        .item_center > * {
          margin-bottom: 1.5rem; /* Adjust the value as needed */
        }
      `}</style>
    </>
  );
}

export default GetAQuote;
