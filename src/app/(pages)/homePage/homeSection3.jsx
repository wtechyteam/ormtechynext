import { brandBoxData } from './../../data/brandBox'
import BorderBtn from './../common/borderBtn'
import PrimeBtn from './../common/primeBtn'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const HomeSection3 = () => {
    return (
        <section className='sectionPadding bg_white'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='title_section text-center'>
                            <h2 className='title-xl fw-bold '>Powered by the finest skills and advanced tech, to yield desired results</h2>
                            <p>Our team of professionals quickly works to remove unfavorable posts from respe­cted websites:</p>
                        </div>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <div className='d-flex flex-wrap brand_box_container justify-content-center mx-auto'>
                            {brandBoxData && brandBoxData?.map((item, index) => {
                                return (
                                    <div key={index} className="brand_box">
                                        <Image className=' brand_logo' width={60} height={60} src={item.logo} alt={item.name} title={item.name} />
                                        <p>{item.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <p className='text-22 mt-4 fw-bold'>Upgrade your online reputation today! </p>
                        <div className='d-flex flex-wrap gap-3 mt-5 justify-content-center'>
                            <PrimeBtn btnName="Get a Quote" />
                            <BorderBtn darkBtn="dark_btn" btnName={"Talk to us"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeSection3