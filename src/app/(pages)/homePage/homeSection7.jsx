import ImageInfoWrap from './../common/imageInfoWrap'
import React from 'react'
import banner from "../../../../public/images/homepage/Hero-Image.png";

const HomeSection7 = () => {
    return (
        <section className='sectionPadding bg_gray'>
            <ImageInfoWrap
                title={'What Sets ORM Techies Apart?'}
                subTitle={'At ORM Techies, we pride ourselves on offering complete Online Reputation Management services that go beyond mere monitoring.'}
                imageUrl={banner}
                showPrimeBtn={true}
                showBorderBtn={true}
                primeBtnName={"about us"}
                borderBtnName={"faq"}
                isReverse={true}
                darkButton="dark_btn"
                description={"<p>Our team of experts is dedicated to crafting personalized strategies that address the specific needs of each client. Whether you're an individual seeking to improve your personal brand or a business aiming to safeguard its reputation, ORM Techies has got you covered.</p><p>Our dedication to excellence has earned us recognition and awards within the industry. As leaders in the field of ORM, we continually strive to set new standards of excellence and innovation.</p>"}
            />
        </section>
    )
}

export default HomeSection7