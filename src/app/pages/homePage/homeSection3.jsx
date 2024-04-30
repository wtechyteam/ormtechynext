import { brandBoxData } from '@/app/data/brandBox'
import BorderBtn from '@/app/pages/common/borderBtn'
import PrimeBtn from '@/app/pages/common/primeBtn'
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
                            <h1>Driven by top-tier expertise and innovative technology</h1>
                            <p>Our team of professionals quickly works to remove unfavorable posts from respe­cted websites:</p>
                        </div>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <div className='item_center'>
                            <div className='d-flex flex-wrap brand_box_container justify-content-center'>
                                {brandBoxData && brandBoxData?.map((item, index) => {
                                    return (
                                        <div key={index} className="brand_box">
                                            <Image className=' brand_logo' width={60} height={60} src={item.logo} alt={item.name} title={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <p className='mt-4'>Upgrade your online reputation today! </p>
                        <div className='d-flex flex-wrap gap-3 mt-5 justify-content-center'>
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