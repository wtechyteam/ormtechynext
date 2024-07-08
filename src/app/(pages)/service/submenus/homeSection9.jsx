import BorderBtn from '../../common/borderBtn'
import PrimeBtn from  '../../common/primeBtn'
import React from 'react'
import { Container } from 'react-bootstrap'


const HomeSection9 = () => {
    return (
        <section className='sectionPadding bg_dark_1'>
            <Container className=''>
                <div className="title_section">
               
                    <h2 className='title-xl text-white text-center fw-bold mb-4'>Attracting the ratings your business deserves.
                    </h2>
                    <div className='d-flex justify-content-center gap-3 mb-5'>
                        <PrimeBtn btnName={"Get started for free"} />
                        <BorderBtn btnName={"request a call"} />
                    </div>
                </div>
            </Container>
         
        </section>
    )
}

export default HomeSection9