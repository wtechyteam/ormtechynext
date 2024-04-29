import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import PrimeBtn from '@/app/pages/common/primeBtn';
import BorderBtn from '@/app/pages/common/borderBtn';
import { Tooltip } from '@mui/joy';
import { Box } from '@mui/material';

const HomeSection5 = () => {
    return (
        <section className='sectionPadding bg_white'>
            <Container>
                <Row>
                    <Col md={12} className='center_content'>
                        <h2>What We Do?</h2>
                        <p>
                            At ORM Techies, we specialize in providing exceptional online <i>reputation management services</i>. Whether {"you're'"} an individual seeking to raise <span>your personal brand or a business aiming to safeguard its online image, <br /> {"we've"} got you covered.</span>
                        </p>
                    </Col>
                </Row>
                <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                    className='side_custom_tabs'
                >
                    <Row>
                        <Col lg={6} md={12}>
                            <TabList className="tab_list">
                                <Tab className="tab_btns">
                                    <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                                    <div className='ms-2'>
                                        <h2>Personal Branding</h2>
                                        <Tooltip
                                            placement="top-end"
                                            variant="outlined"
                                            arrow
                                            title={
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        maxWidth: 320,
                                                        justifyContent: 'center',
                                                        p: 1,
                                                    }}
                                                >
                                                    Building a strong personal brand is essential in {"today's"} competitive landscape. Our experts will work closely with you to develop a personalized personal branding strategy that showcases your strengths and values, positioning you as a reputable figure in your field.
                                                </Box>
                                            }
                                        >
                                            <p>Building a strong personal brand is essential in {"today's"} competitive landscape. Our experts will work closely with you to develop a personalized personal branding strategy that showcases </p>
                                        </Tooltip>

                                    </div>
                                </Tab>
                                <Tab className="tab_btns">
                                    <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                                    <div className='ms-2'>
                                        <h2>Reputation Repair</h2>
                                        <Tooltip
                                            placement="top-end"
                                            variant="outlined"
                                            arrow
                                            title={
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        maxWidth: 320,
                                                        justifyContent: 'center',
                                                        p: 1,
                                                    }}
                                                >
                                                    Have negative content tarnished your online reputation? Our reputation repair services are designed to mitigate the damage caused by negative reviews, articles, or social media posts. {"We'll"} devise effective strategies to address and resolve any issues, restoring your online credibility.
                                                </Box>
                                            }
                                        >
                                            <p>Have negative content tarnished your online reputation? Our reputation repair services are designed to mitigate the damage caused by negative reviews, articles, or social media posts.</p>
                                        </Tooltip>
                                    </div>
                                </Tab>
                                <Tab className="tab_btns">
                                    <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                                    <div className='ms-2'>
                                        <h2>Reputation Management</h2>
                                        <Tooltip
                                            placement="top-end"
                                            variant="outlined"
                                            arrow
                                            title={
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        maxWidth: 320,
                                                        justifyContent: 'center',
                                                        p: 1,
                                                    }}
                                                >
                                                    Maintaining a positive online reputation requires ongoing effort and vigilance. Our reputation management services involve monitoring your digital footprint, proactively addressing any emerging threats, and implementing strategies to bolster your online image continually.
                                                </Box>
                                            }
                                        >
                                            <p>Maintaining a positive online reputation requires ongoing effort and vigilance. Our reputation management services involve monitoring your digital footprint, proactively </p>
                                        </Tooltip>
                                    </div>
                                </Tab>
                            </TabList>
                        </Col>
                        <Col lg={6} md={12} className='margin_top_992'>
                            <TabPanel className='px-0' value={0}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' />
                                    <PrimeBtn btnName={"remove content"} />
                                </div>
                            </TabPanel>
                            <TabPanel className='px-0' value={1}>
                                <div className='text-center'>
                                    <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image2.webp"} alt='icon' />
                                    <BorderBtn darkBtn={"dark_btn"} btnName={"about amplify"} />
                                </div>
                            </TabPanel>
                            <TabPanel className='px-0' value={2}>
                                <div className='text-center'>
                                <Image style={{ width: "auto", height: "auto" }} className='responsive_img' width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' />
                                <PrimeBtn btnName={"learn more"} />
                                </div>
                            </TabPanel>
                        </Col>
                    </Row>
                </Tabs>
            </Container>
        </section>
    )
}

export default HomeSection5