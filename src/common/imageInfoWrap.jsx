import React from 'react'
import PrimeBtn from './primeBtn'
import Image from 'next/image'
import BorderBtn from './borderBtn'
import { IoIosTimer } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const ImageInfoWrap = ({ title, description, imageUrl, isReverse, showPrimeBtn, primeBtnName, borderBtnName, subTitle, darkButton, iconData, reviewData }) => {
    return (
        <div className="container">
            <div className={`row align-items-center ${isReverse && 'flex-row-reverse'}`}>
                <div className="col-lg-6 mb-5 mb-md-5 text-center">
                    <Image
                        width={610} height={600}
                        className='responsive_img padding_img '
                        loading='lazy'
                        src={imageUrl}
                        alt='side-img'
                    />
                </div>
                <div className="col-lg-6 hero_heading">
                    <h2 className='title-xl fw-bold '>
                        {title}
                    </h2>
                    {subTitle && <p className='font_700 title-sm'>{subTitle}</p>}
                    <div className='text-16' dangerouslySetInnerHTML={{ __html: description }}></div>
                    {showPrimeBtn && (
                        <div className='d-flex flex-wrap gap-3 mt-4'>
                            <PrimeBtn btnName={primeBtnName} />
                            <BorderBtn darkBtn={darkButton} btnName={borderBtnName} />
                        </div>
                    )}
                    {iconData === true && (
                        <div className='mt-5 d-flex flex-wrap gap-3'>
                            <div className='d-flex '>
                                <IoIosTimer className='time_icon' />
                                <div>
                                    <h1 className='title-xl dark_font mb-1'>16 Days</h1>
                                    <p className='text-16 dark_font mb-0'>Content removed</p>
                                </div>
                            </div>
                            {reviewData === true && <>
                                <div className='v_line mx-3'></div>
                                <div className='d-flex '>
                                    <IoClose className='close_icon time_icon' />
                                    <div>
                                        <h1 className='title-xl dark_font mb-1'>32</h1>
                                        <p className='text-16 dark_font mb-0'>Reviews removed</p>
                                    </div>
                                </div>
                            </>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ImageInfoWrap