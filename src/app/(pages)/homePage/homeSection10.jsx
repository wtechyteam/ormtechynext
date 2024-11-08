import * as React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedComponent from '../common/animatedComponent';

const HomeSection10 = () => {
    const whoServeList = [
        {
            icon: "feature1.png",
            title: "Legal",
            info: "Protecting the reputation of law firms and legal professionals.",
            href: "/service/personal-branding/legal-reputation-management"
        },
        {
            icon: "architect.png",
            title: "Construction",
            info: "Ensuring positive online perception for construction companies.",
            href: "/service/personal-branding/construction-reputation-management"
        },
        {
            icon: "storefront.png",
            title: "Retail",
            info: "Enhancing the online presence of retail brands to attract more customers.",
            href: "/service/personal-branding/retail-reputation-management"
        },
        {
            icon: "retail-store.png",
            title: "Automotive",
            info: "Safeguarding the reputation of automotive businesses in the competitive market.",
            href: "/service/personal-branding/automotive-reputation-management"
        },
        {
            icon: "vip.png",
            title: "VIPs",
            info: "Providing discreet and effective reputation management services for high-profile individuals.",
            href: "/service/personal-branding/vip-reputation-management"
        },
        {
            icon: "healthcare.png",
            title: "Healthcare",
            info: "Building trust and credibility for healthcare providers and organizations.",
            href: "/service/personal-branding/healthcare-reputation-management"
        },
        {
            icon: "bitcoin.png",
            title: "Cryptocurrency",
            info: "Managing the online reputation of cryptocurrency projects and entities in the digital realm.",
            href: "/service/personal-branding/cryptocurrency-reputation-management"
        }
    ];

    return (
   
        <section className='sectionPadding bg_gray'>
            <Container>
                <div className="title_section text-center">
                    <h2 className="title-xl fw-bold ">Who We Serve?</h2>
                    <p>At ORM Techies, we cater to a diverse clientele across various industries, including:</p>
                </div>
                <ul className='iconCardList mt-5'>
                    {whoServeList.map((item, index) => (
                        <li className="cardWrapper" key={index}>
                            <Link className='card text-center' href={item.href}>
                                
                                    <Image className='mx-auto' src={`/images/header/${item.icon}`} width={80} height={80} alt={item.title} />
                                    <h2 className='mt-3 text-black title-md fw-bold'>{item.title}</h2>
                                    <p className='mb-0'>{item.info}</p>
                                
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
       
    );
}

export default HomeSection10;
