import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const HomeSection4 = () => {
    return (
        <section className='sectionPadding2 bg_dark'>
            <Container className='container_1000'>
                <div className='hero_heading d-flex align-items-center gap-4'>
                    <Image className='rotate_item' width={'210'} height={"210"} src={"/images/guarantee.webp"} alt='img' />
                    <div>
                        <h1 className='title-xl fw-bold white_font' >Trust in our unmatched experience and award-winning technology</h1>
                        <p>You will only pay for what we successfully remove</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeSection4