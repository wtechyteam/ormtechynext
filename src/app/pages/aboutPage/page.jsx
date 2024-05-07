import React from "react"
import ImageInfoWrap from "../common/imageInfoWrap"
import Image from "next/image"
import PrimeBtn from "../common/primeBtn"
import Marquees from "../marquee"
import { marqueeCardData } from "@/app/data/marqueeData"
import { Col, Container, Row } from "react-bootstrap"

const AboutPage = () => {
    return (
        <div>
            {/* -------------------------------------------------------about-image-banner--------------------------------------------- */}
            <div className="about_banner">
                <div className="blur_bg about_row">
                    <div className="about_col item_center" lg={6}>
                        <div className="hero_heading about_banner_padding">
                            <h2 className='title-xl fw-bold text-white'>
                                An Expert Team
                                Fighting For Fairness
                            </h2>
                            <p className='text-16 text-white'>
                                We believe in freedom of speech. What we don’t believe in is the disproportionate and often unfair damage that can be done to a reputation by someone hiding behind a screen and a keyboard.
                                <br /><br />
                                We’re here to level the playing field – to fight back against the trolls and haters, the unreasonable customers, the fake reviews and unscrupulous competitors.
                            </p>
                            <PrimeBtn btnName={"get a quote"} />
                        </div>
                    </div>
                    <div className="about_banner about_col hide_1000"></div>
                </div>
            </div>
            {/* -----------------------------------------------------image-content-section---------------------------------------------- */}
            <section className='sectionPadding bg_gray'>
                <ImageInfoWrap
                    title={'We Exist To Fight Trolls'}
                    imageUrl={"/images/orm-about.webp"}
                    showPrimeBtn={true}
                    primeBtnName={"get a free quote"}
                    borderBtnName={"faq"}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney the word in classical literature, discovered the undoubtable source. </p>"}
                />
            </section>

            {/* -----------------------------------------------------marquee-card section------------------------------------------------- */}
            <section className=' bg_dark position-relative'>
                <div className=' image_bg'>
                    <div className='content_bg sectionPadding2'>

                        <div className='item_center mb-5 container'>
                            <Row>
                                <Col md={6} className="item_center flex-wrap mb-md-0 mb-2">
                                    <Image width={40} height={40} src={'/images/Google-logo.png'} alt='img' title='rating logo' />
                                    <h2 className='text-white mx-3 mb-0 text-24 fw-bold'>5.0</h2>
                                    <div className='d-flex gap-2'>
                                        <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                                        <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                                        <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                                        <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                                        <Image width={22} height={22} src={"/images/star-rating.svg"} alt='star' title='start rating' />
                                    </div>
                                </Col>
                                <Col md={6} className="item_center position-relative">
                                    <div className='divider'></div>
                                    <h2 className='text-white mb-0 text-24 no_wrap ms-0 ms-md-2'>Based on 240+ reviews</h2>
                                </Col>
                            </Row>

                        </div>
                        <Marquees mSpeed={60} pauseOnHover={true} mapData={marqueeCardData} dataType="card" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage