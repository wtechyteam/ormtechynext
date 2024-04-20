import React from 'react'
import HeaderInner from './navbar/navbar'
import "./headerStyle.scss";

const HeaderNavbar = ({activeTab, setActiveTab}) => {
  return (
    <div className='header_bg'>
      <HeaderInner activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default HeaderNavbar