import * as React from 'react';
import InnerTopBanner from '../common/innerTopBanner';
import ImageInfoWrap from '../common/imageInfoWrap';

const ServicePage = () => {
    return (
        <>
            <InnerTopBanner
                title="Service Page"
                info="If you have any questions about content removal, online reputation management or any services we provide, please feel free to get in touch. Removal services are risk-free, as we only charge for successful removals."
            />
            <section className='sectionPadding bg_gray'>
                <ImageInfoWrap
                    title={'We Make Individuals & Businesses Look Great On Google'}
                    imageUrl={"/images/orm-about.webp"}
                    primeBtnName={"get a free quote"}
                    isReverse={true}
                    borderBtnName={"faq"}
                    form={true}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"}
                />
            </section>
            <section className='sectionPadding bg_white'>
                <ImageInfoWrap
                    title={'Online Reputation Management'}
                    imageUrl={"/images/online-reputation.webp"}
                    showPrimeBtn={true}
                    
                    primeBtnName={"get a free quote"}
                    borderBtnName={"faq"}
                    darkButton="dark_btn"
                    description={"<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>"}
                />
            </section>
        </>
    )
}

export default ServicePage