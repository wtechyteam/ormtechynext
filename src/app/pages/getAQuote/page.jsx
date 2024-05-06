import React from 'react'
import InnerTopBanner from '../common/innerTopBanner'
import QuoteForm from './quoteForm/page'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import siteLogo from "../../../../public/images/ORMLogoNew.svg";

const GetAQuote = () => {
  return (
    <>
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
                <Image className='card_profile_img' width={100} height={100} src="/images/card-profile.jpg" alt="profile" title="profile" />
                <p className='w-75 text-center'>
                  {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default GetAQuote