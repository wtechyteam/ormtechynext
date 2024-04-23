import BorderBtn from '@/common/borderBtn'
import PrimeBtn from '@/common/primeBtn'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { brandBoxData } from '../data/brandBox'

const HomeSection3 = () => {
    return (
        <section className='sectionPadding bg_gray'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='title_section text-center'>
                            <h1>Powered by industry-leading experience and technology</h1>
                            <p>We quickly and effectively remove negative content from the following publishers</p>
                        </div>
                    </Col>
                    <Col md={12} className='text-center'>
                        <div className='item_center'>
                            <div className='d-flex flex-wrap brand_box_container'>
                                {brandBoxData && brandBoxData?.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="brand_box">
                                                <Image className=' brand_logo' width={60} height={60} src={item.logo} alt="png" />
                                                <p>{item.name}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <p className='mt-4'>Don’t see the online service you need content removed from?</p>
                        <div>
                            <PrimeBtn btnName="get a quate" />
                            <BorderBtn darkBtn="dark_btn" btnName={"Talk to us"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeSection3