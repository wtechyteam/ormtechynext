import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import PrimeBtn from '@/common/primeBtn';
import BorderBtn from '@/common/borderBtn';

const HomeSection5 = () => {
    return (
        <section className='sectionPadding bg_white'>
            <Container>
                <Row>
                    <Col md={12} className='center_content'>
                        <h2>Optimise Your Ratings & Reviews</h2>
                        <p>
                            Removify has built the {"world's"} first and only <i>Review Optimisation Platform</i><sup>TM</sup> - uniquely empowering you to maximise online ratings by 
                             <span> removing negative reviews and building new 5 star reviews.</span>
                        </p>
                    </Col>
                </Row>
                <Tabs
                    aria-label="Vertical tabs"
                    orientation="vertical"
                >
                    <TabList className="tab_list">
                        <Tab className="tab_btns">
                            <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                            <div className='ms-2'>
                                <h2>Optimise Your Ratings & Reviews1</h2>
                                <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                            </div>
                        </Tab>
                        <Tab className="tab_btns">
                            <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                            <div className='ms-2'>
                                <h2>Optimise Your Ratings & Reviews2</h2>
                                <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                            </div>
                        </Tab>
                        <Tab className="tab_btns">
                            <Image width={40} height={40} src={"/images/hp.png"} alt='icon' />
                            <div className='ms-2'>
                                <h2>Optimise Your Ratings & Reviews3</h2>
                                <p>If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. </p>
                            </div>
                        </Tab>
                    </TabList>
                    <TabPanel value={0}>
                        <div className='text-center'>
                            <Image width={610} height={400} src={"/images/tab-image1.webp"} alt='icon' />
                            <PrimeBtn btnName={"remove content"} />
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className='text-center'>
                            <Image width={610} height={400} src={"/images/tab-image2.webp"} alt='icon' />
                            <BorderBtn darkBtn={"dark_btn"} btnName={"about amplify"} />
                        </div>
                    </TabPanel>
                    <TabPanel value={2}>
                        <Image width={610} height={400} src={"/images/dell.png"} alt='icon' />
                        <PrimeBtn btnName={"learn more"} />
                    </TabPanel>
                </Tabs>

            </Container>
        </section>
    )
}

export default HomeSection5