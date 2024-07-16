import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import PrimeBtn from './../common/primeBtn';
import BorderBtn from './../common/borderBtn';
import { brandBoxData } from './../../data/brandBox';

const HomeSection3 = () => {
    return (
        <section className='sectionPadding bg_white'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='title_section text-center'>
                            <h2 className='title-xl fw-bold'>Powered by the finest skills and advanced tech, to yield desired results</h2>
                            <p>Our team of professionals quickly works to remove unfavorable posts from respected websites:</p>
                        </div>
                    </Col>
                    <Col lg={12} className='text-center'>
                        <div className='d-flex flex-wrap brand_box_container justify-content-center mx-auto'>
                            {brandBoxData && brandBoxData.map((item, index) => (
                                <Link href={item.link} key={item.id} className="brand_box">
                                    
                                        <Image className='brand_logo' width={60} height={60} src={item.logo} alt={item.name} title={item.name} />
                                        <p>
                                            <Link href={item.link}>
                                                <p>{item.name}</p>
                                            </Link>
                                        </p>
                                
                                </Link>
                            ))}
                        </div>
                        <p className='text-22 mt-4 fw-bold'>Upgrade your online reputation today! </p>
                        <div className='d-flex flex-wrap gap-3 mt-5 justify-content-center'>
                            <Link href="/getAQuote"><PrimeBtn btnName="Get a Quote" /></Link>
                            <BorderBtn darkBtn="dark_btn" btnName={"Talk to us"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HomeSection3;
