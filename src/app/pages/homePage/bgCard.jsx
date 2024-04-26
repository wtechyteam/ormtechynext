import { Card, CardContent, CardCover, Typography } from '@mui/joy'
import React from 'react'
import { Image } from 'react-bootstrap'
import { FaArrowUp } from "react-icons/fa6";

const BgCard = () => {
    return (
        <div>
            <Card className="bgCard-card position-relative" sx={{ minHeight: '340px', width: 310 }}>
                <CardCover>
                    <Image
                        src="/images/bg-card-1.jpg"
                        loading="lazy"
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
                        <div className='bgCard-rating_up '><FaArrowUp />0.7</div>
                    </div>
                    <Typography className="bgCard-title" level="title-md" textColor="#fff">
                        <Image className='bgCard-profile_img me-2' width={100} height={100} src={"/images/card-profile.jpg"} alt='profile' />
                        Yosemite National Park
                    </Typography>
                    <div className="bgCard-content">

                        <p
                            className='bgCard-info'
                        >
                            {" Lorem Ipsum is that it has a more-or-less normal distribution of letters', making it look like readable English. Many desktop publishing packages and web page editors now use."}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default BgCard