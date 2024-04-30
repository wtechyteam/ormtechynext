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
                    <Card key={card.id} className="bgCard-card position-relative" sx={{ minHeight: '340px', width: 310 }}>
                        <CardCover>
                            <Image
                                src={card?.cardImage}
                                alt={card?.title}
                                title={card?.title}
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
                                    <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' title='star-rating' />
                                    <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' title='star-rating' />
                                    <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' title='star-rating' />
                                    <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' title='star-rating' />
                                    <Image width={15} height={15} src={"/images/star-rating.svg"} alt='star' title='star-rating' />
                                </div>
                                <div className='bgCard-rating_up '><FaArrowUp />{card?.growNo}</div>
                            </div>

                            <div className="bgCard-content">
                                <div className='position-relative'>
                                    <Typography className="bgCard-title" level="title-md" textColor="#fff">
                                        <Image className='bgCard-profile_img me-2' width={100} height={100} src={card.titleLogo} alt={card?.title} title={card?.title} />
                                        {card?.title}
                                    </Typography>
                                    <p className='bgCard-info'>
                                        {card?.textContent}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default BgCard;