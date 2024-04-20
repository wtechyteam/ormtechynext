import React from 'react'

const HeaderInner = () => {
  return (
    <div className='header container d-flex align-items-center justify-content-between'>
        <div className='orm_logo'>
            ORM
            <span>Techies</span></div>
        <div className='header_tabs'>
            <ul>
                <li>home</li>
                <li>service</li>
                <li>about</li>
                <li>career</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderInner