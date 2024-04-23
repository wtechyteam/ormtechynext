import ImageInfoWrap from '@/common/imageInfoWrap'
import React from 'react'

const HomeSection7 = () => {
    return (
        <ImageInfoWrap
            customClass={'bg_gray'}
            title={'An Experienced Team'}
            subTitle={'Trust in our proven combination of the most experienced team and cutting-edge technology.'}
            imageUrl={"/images/side-img-2.webp"}
            showPrimeBtn={true}
            primeBtnName={"about us"}
            borderBtnName={"faq"}
            darkButton="dark_btn"
            description={'<p> If you’re suffering from unwanted online content and feeling powerless to fight back, you’re not alone. Everyone with a phone or laptop has been given the power to post damaging reviews, articles, images and videos to the internet unchecked.</p><p>The technology for sharing content has advanced so quickly that even a child can do it – whereas the ability to remove online content simply hasn’t developed at the same pace.</p><p>Equipped with the experience of removing thousands of pieces of content and empowered by our unique artificial intelligence platform, we can effectively remove unwanted online content with a simple but powerful promise: if we don’t succeed, you don’t pay.</p>'}
        />
    )
}

export default HomeSection7