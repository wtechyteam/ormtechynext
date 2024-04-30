import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const HomeSection4 = () => {
    return (
        <section className='sectionPadding2 bg_dark'>
            <Container className='container_1000'>
                <div className='hero_heading d-flex align-items-center gap-4'>
                    <Image className='rotate_item' width={'210'} height={"210"} src={"/images/guarantee.webp"} alt='img' title='Advanced technology' />
                    <div>
                        <h1 className='title-xl fw-bold white_font mb-4' >Trust in ORM Techies: Advanced technology, an expert team, and real results are guaranteed.</h1>
                        <p className='title-sm white_font '>Pay only for successful removals.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeSection4