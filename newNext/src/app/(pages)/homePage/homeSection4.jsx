import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'

const HomeSection4 = () => {
    return (
        <section className='sectionPadding2 bg_dark'>
            <Container className='container_1000'>
                <div className='contentWrap d-md-flex align-items-center gap-4'>
                    <Image className='rotate_item' width={'210'} height={"210"} src={"/images/guarantee.webp"} alt='img' title='Advanced technology' />
                    <div className='flex-fill'>
                        <h1 className='title-xl fw-bold text-white mb-4 text_center_560' >Trust in ORM Techies: Advanced technology, an expert team, and real results are guaranteed.</h1>
                        <p className='title-sm text-white text_center_560'>Pay only for successful removals.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeSection4