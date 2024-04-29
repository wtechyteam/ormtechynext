import { bgCardData } from '@/app/data/bgCardData';
import { Card, CardContent, CardCover, Typography } from '@mui/joy'
import React from 'react'
import { Image } from 'react-bootstrap'
import { FaArrowUp } from "react-icons/fa6";

const BgCard = () => {
    return (
        <div className='d-flex gap-5'>
            {bgCardData && bgCardData.map((card) => {
                return (
                    <>
                        <Card key={card.id} className="bgCard-card position-relative" sx={{ minHeight: '340px', width: 310 }}>
                            <CardCover>
                                <Image
                                    src={card?.cardImage}
                                    alt="bg"
                                />
                            </CardCover>
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                }}
                            />
                            <CardContent className="" sx={{ justifyContent: 'flex-start' }}>
                                <div className='bgCard-rating_row'>
                                    <div className=' d-flex gap-2 bgCard-star'>
                                        <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' />
                                        <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' />
                                        <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' />
                                        <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' />
                                        <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' />
                                    </div>
                                    <div className='bgCard-rating_up '><FaArrowUp />{card?.growNo}</div>
                                </div>
                                <Typography className="bgCard-title" level="title-md" textColor="#fff">
                                    <Image className='bgCard-profile_img me-2' width={100} height={100} src={card.titleLogo} alt='profile' />
                                    {card?.title}
                                </Typography>
                                <div className="bgCard-content">
                                    <p className='bgCard-info'>
                                        {card?.textContent}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </>
                )
            })}
        </div>
    )
}

export default BgCard;