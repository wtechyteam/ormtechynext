import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { marqueeImages } from '../data/marqueeData'

const Marquees = ({ mapData, dataType, cardData, title, pauseOnHover }) => {
    return (
        <div className='marquee d-flex'>
            {title === true && <p className='d-flex align-items-center justify-content-center'>Featured In</p>}
            <Marquee speed={30} pauseOnHover={pauseOnHover === true ? true : false}>
                {mapData && mapData?.map((item, index) => {
                    return (
                        <div className='img_row' key={index}>
                            {dataType === "image" && <Image className='marquee_img' width={"100"} height={"100"} src={item.img} alt='img' />}
                            {dataType === "card" &&
                                <div className='marquee_card'>
                                    <h5>{item.title}</h5>
                                    <div className='mb-1'>
                                        <Image width={12} height={12} src={item.rating} alt='star'/>
                                        <Image width={12} height={12} src={item.rating} alt='star'/>
                                        <Image width={12} height={12} src={item.rating} alt='star'/>
                                        <Image width={12} height={12} src={item.rating} alt='star'/>
                                        <Image width={12} height={12} src={item.rating} alt='star'/>
                                    </div>
                                    <span>{item.textContent}</span>
                                </div>
                            }
                        </div>
                    )
                })}

            </Marquee>
        </div>
    )
}

export default Marquees