import React from 'react'
import PrimeBtn from './primeBtn'
import Image from 'next/image'
import BorderBtn from './borderBtn'

const ImageInfoWrap = ({ title, description, imageUrl, isReverse, showPrimeBtn, customClass,primeBtnName,borderBtnName, subTitle, darkButton }) => {
    return (
        <section className={`sectionPadding ${customClass}`}>
            <div className="container">
                <div className={`row align-items-center ${isReverse && 'flex-row-reverse'}`}>
                    <div className="col-md-6 mb-5 mb-md-0 text-center">
                        <Image width={610} height={600} src={imageUrl} title={title} alt='side-img' />
                    </div>
                    <div className="col-md-6 info_wrap_content">
                        <h2 className={`title-xl fw-bold`}>{title}</h2>
                        {subTitle && <p className='font_700 text_20'>{subTitle}</p>}
                        <div dangerouslySetInnerHTML={{ __html: description }}></div>
                        {showPrimeBtn && (
                            <div>
                                <PrimeBtn btnName={primeBtnName} />
                                <BorderBtn darkBtn={darkButton} btnName={borderBtnName} />
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImageInfoWrap