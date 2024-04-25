import * as React from 'react';
import  brandBoxData from '../data/brandBox';
import Image from "next/image";


const Dashboard = () => {
    return (
        <div>
            <div class="flip_card">
                <div class="flip_card_inner">
                    <div class="flip_card_front">
                        <h3>Hover, please!</h3>
                    </div>
                    <div class="flip_card_back">
                        <h3>Whoaaa!!!</h3>
                    </div>
                </div>
            </div>

            <div className='item_center flip_card'>
                            <div className='d-flex flex-wrap  flip_card_inner'>
                                {brandBoxData && brandBoxData?.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className=" flip_card_front">
                                                <Image className=' brand_logo' width={60} height={60} src={item.logo} alt="png" />
                                                <p>{item.name}</p>
                                            </div>
                                            <div className=" flip_card_back">
                                                <p>Go for Details</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
        </div>
    )
}

export default Dashboard