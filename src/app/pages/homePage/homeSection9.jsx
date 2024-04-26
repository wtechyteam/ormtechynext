import BorderBtn from '@/app/pages/common/borderBtn'
import PrimeBtn from '@/app/pages/common/primeBtn'
import React from 'react'
import { Container } from 'react-bootstrap'
import BgCard from './bgCard'

const HomeSection9 = () => {
    return (
        <section className='sectionPadding bg_dark_1'>
            <Container className='item_center flex-column'>
                <h1 className='title-xl white_font text-center font_700 mb-4'>Join ORM Techies your online reputation management services today to achieve your digital reputation goals. Contact Now</h1>
                <div className='d-flex gap-3 mb-5'>
                    <PrimeBtn btnName={"get a free quote"} />
                    <BorderBtn btnName={"request a call"} />
                </div>
                <BgCard />
            </Container>

        </section>
    )
}

export default HomeSection9