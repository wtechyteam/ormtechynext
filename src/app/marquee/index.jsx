import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Marquees = ({ mapData, dataType, mSpeed, title, pauseOnHover }) => {
    return (
            <div className=' d-flex'>
            {title === true && <p className='d-flex align-items-center justify-content-center'>Featured In</p>}
            <Marquee speed={mSpeed} pauseOnHover={pauseOnHover === true ? true : false}>
                {mapData && mapData?.map((item, index) => {
                    return (
                        <div className='img_row ' key={index}>
                            {dataType === "image" && <Image className='marquee_img' width={"100"} height={"100"} src={item.img} alt='img' />}
                            {dataType === "card" &&
                                <div className='marquee_card'>
                                    <h5>
                                        <Image className='card_profile_img me-3' width={100} height={100} src={item?.profileImage} alt='profile' />
                                        {item.title}
                                    </h5>
                                    <div className='mb-2 d-flex gap-2'>
                                        <Image width={15} height={15} src={item.rating} alt='star' />
                                        <Image width={15} height={15} src={item.rating} alt='star' />
                                        <Image width={15} height={15} src={item.rating} alt='star' />
                                        <Image width={15} height={15} src={item.rating} alt='star' />
                                        <Image width={15} height={15} src={item.rating} alt='star' />
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