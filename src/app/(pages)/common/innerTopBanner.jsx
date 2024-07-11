'use client'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const InnerTopBanner = ({ title, info }) => {
  return (

    <section className='banner-parent position-relative'>
      <div className='container'>
        <div className='banner-img_box'></div>
        <Row>
          <Col xl={3} lg={0}></Col>
          <Col xl={9} lg={12}>
            <div className='sectionPadding banner-z_index position-relative'>
              <h1 className='title-xl text-white fw-bold mb-4 pt-4'>{title}</h1>
              <p className='text-20 text-white'>{info}</p>
            </div>
          </Col>
        </Row>

      </div>
    </section>
  )
}

export default InnerTopBanner