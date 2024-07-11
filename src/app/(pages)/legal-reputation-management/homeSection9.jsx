import BorderBtn from './../common/borderBtn'
import PrimeBtn from './../common/primeBtn'
import React from 'react'
import { Container } from 'react-bootstrap'
import BgCard from './../homePage/bgCard'

const HomeSection9 = () => {
    return (
        <section className='sectionPadding bg_dark_1'>
            <Container className=''>
                <div className="title_section">
                    <h6 className='title-sm text-white text-center text-uppercase fw-semibold mb-2'>Join ORM Techies today.</h6>
                    <h2 className='title-xl text-white text-center fw-bold mb-4'>Reputation management can include negative removing <span>google reviews</span>, but ORM Techies goes beyond that.</h2>
                    <div className='d-flex justify-content-center gap-3 mb-5'>
                        <PrimeBtn btnName={"get a free quote"} />
                        <BorderBtn btnName={"request a call"} />
                    </div>
                </div>
            </Container>
             <BgCard /> 
        </section>
    )
}

export default HomeSection9