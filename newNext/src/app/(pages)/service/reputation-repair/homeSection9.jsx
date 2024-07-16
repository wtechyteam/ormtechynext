import BorderBtn from './../../common/borderBtn'
import PrimeBtn from  './../../common/primeBtn'
import React from 'react'
import { Container } from 'react-bootstrap'


const HomeSection9 = () => {
    return (
        <section className='sectionPadding bg_dark_1'>
            <Container className=''>
                <div className="title_section">
               
                    <h2 className='title-xl text-white text-center fw-bold mb-4'>We remove damaging online content. If we don’t succeed, you don’t pay.  </h2>
                    <div className='d-flex justify-content-center gap-3 mb-5'>
                        <PrimeBtn btnName={"get a free quote"} />
                        <BorderBtn btnName={"request a call"} />
                    </div>
                </div>
            </Container>
         
        </section>
    )
}

export default HomeSection9