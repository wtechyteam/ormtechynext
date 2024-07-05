import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const HomeSection10 = () => {

    const whoServeList = [
        {
            icon:"feature1.png",
            title: "Legal",
            info:"Protecting the reputation of law firms and legal professionals."
        },
        {
            icon:"architect.png",
            title: "Construction",
            info:"Ensuring positive online perception for construction companies."
        },
        {
            icon:"storefront.png",
            title: "Retail",
            info:"Enhancing the online presence of retail brands to attract more customers."
        },
        {
            icon:"retail-store.png",
            title: "Automotive",
            info:"Safeguarding the reputation of automotive businesses in the competitive market."
        },
        {
            icon:"vip.png",
            title: "VIPs",
            info:"Providing discreet and effective reputation management services for high-profile individuals."
        },
        {
            icon:"healthcare.png",
            title: "Healthcare",
            info:"Building trust and credibility for healthcare providers and organizations."
        },
        {
            icon:"bitcoin.png",
            title: "Cryptocurrency",
            info:"Managing the online reputation of cryptocurrency projects and entities in the digital realm."
        }
    ]
    return (
        <section className='sectionPadding bg_gray'>
            <Container>
            <div className="title_section text-center">
                <h2 className="title-xl fw-bold ">Who We Serve?</h2>
                <p>At ORM Techies, we cater to a diverse clientele across various industries, including:</p></div>
                <ul className='iconCardList mt-5'>
                    {whoServeList.map((item) => (
                        
                    <li className="cardWrapper" key={item.index}>
                        <div className='card text-center'>
                            <Image className='mx-auto' src={`./images/header/${item.icon}`} width={"80"} height={"80"} alt={item.title} ></Image>
                            <h2 className='mt-3 text-black title-md fw-bold'>{item.title}</h2>
                            <p className='mb-0'>{item.info}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </Container>
        </section >
    )
}

export default HomeSection10