import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import BorderBtn from './../common/borderBtn';
import PrimeBtn from './../common/primeBtn';
import Link from 'next/link';
import { Box } from '@mui/material';

const HomeSection5 = () => {
    return (
        <section className='sectionPadding bg_white'>
            <Container>
                <div className="title_section text-center">
                    <h2 className='title-xl fw-bold '>What We Do?</h2>
                    <p>At ORM Techies, we specialize in providing exceptional online reputation management services. Whether you&apos;re an individual seeking to raise your personal brand or a business aiming to safeguard its online image, we&apos;ve got you covered. </p>
                </div>
                <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                    className='side_custom_tabs'
                >
                    <Row>
                        <Col lg={6} md={12}>
                            <TabList className="tab_list">
                                <Tab className="tab_btn">
                                    <div className="tabImage">
                                        <Image width={60} height={60} src={"/images/header/personalBranding.png"} alt='icon' title='Personal Branding' />
                                    </div>
                                    <h2 className="tabTitle">Personal Branding</h2>
                                    <p className='tabInfo'>Building a strong personal brand is essential in today&apos;s competitive landscape. Our experts will work closely with you to develop a personalized personal branding strategy that showcases your strengths and values, positioning you as a reputable figure in your field.</p>
                                </Tab>
                                <Tab className="tab_btn">
                                    <div className="tabImage">
                                        <Image width={60} height={60} src={"/images/header/reputationRepair.png"} alt='icon' title='Reputation Repair' />
                                    </div>
                                    <h2 className="tabTitle">Reputation Repair</h2>
                                    <p className='tabInfo'>Have negative content tarnished your online reputation? Our reputation repair services are designed to mitigate the damage caused by negative reviews, articles, or social media posts.</p>
                                </Tab>
                                <Tab className="tab_btn">
                                    <div className="tabImage">
                                        <Image width={60} height={60} src={"/images/header/reputation-management.png"} alt='icon' title='Reputation Management' />
                                    </div>
                                    <h2 className="tabTitle">Reputation Management</h2>
                                    <p className='tabInfo'>Maintaining a positive online reputation requires ongoing effort and vigilance. Our reputation management services involve monitoring your digital footprint, proactively.</p>
                                </Tab>
                                <Tab className="tab_btn">
                                    <div className="tabImage">
                                        <Image width={60} height={60} src={"/images/header/reviewManagement.png"} alt='icon' title='Review Management' />
                                    </div>
                                    <h2 className="tabTitle">Review Management</h2>
                                    <p className='tabInfo'>Online reviews can significantly impact your reputation. Our review management services cover a wide range of platforms like Glassdoor, Google My Business, Quora, and more.</p>
                                </Tab>
                            </TabList>
                        </Col>
                        <Col lg={6} md={12} className='margin_top_992'>
                            <TabPanel className='px-0' value={0}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' title='Personal Branding' />
                                    <div className="tabDetails">
                                        <Link href="/about-us"><PrimeBtn btnName="Learn More" /></Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className='px-0' value={1}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image2.webp"} alt='icon' title='Reputation Repair' />
                                    <div className="tabDetails">
                                        <Link href="/about-us"><PrimeBtn btnName="Learn More" /></Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className='px-0' value={2}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' title='Reputation Management' />
                                    <div className="tabDetails">
                                        <Link href="/about-us"><PrimeBtn btnName="Learn More" /></Link>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className='px-0' value={3}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' title='Review Management' />
                                    <div className="tabDetails">
                                        <Link href="/about-us"><PrimeBtn btnName="Learn More" /></Link>
                                    </div>
                                </div>
                            </TabPanel>
                        </Col>
                    </Row>
                </Tabs>
            </Container>
        </section>
    )
}

export default HomeSection5;
