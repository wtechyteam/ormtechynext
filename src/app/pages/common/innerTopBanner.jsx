import React from 'react'
import { Image } from 'react-bootstrap'

const InnerTopBanner = ({title, info}) => {
  return (
    // <div className='fixed-background  '>
    //     <div className='fixed-content sectionPadding item_center title-xl white_font'>hello</div>
    // </div>
    <div className='banner-parent'>
      <div className='banner-img_box'></div>
      <div className='sectionPadding banner-content_max_width '>
        <h1 className='title-xl white_font font_700 mb-4 pt-4'>{title}</h1>
        <p className='text-20 white_font'>{info}</p>
      </div>
    </div>
  )
}

export default InnerTopBanner