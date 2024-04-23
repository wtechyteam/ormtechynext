'use client'
import React, { useState } from 'react'
import Navbar from './navbar/navbar'
import "./headerStyle.scss";
import Link from 'next/link';

const HeaderNavbar = ({ activeTab, setActiveTab }) => {

  const [isSticky, setIsSticky] = useState(false);

  // if(window.scroll > 100){
  //   setIsSticky(false)
  // }


  return (



    <header className={`siteHeader ${isSticky}`}>

      <div className="container d-flex justify-content-between align-items-center">
        <div className="siteLogo">
          <Link href="/">
            ORM <span>Techies</span>
          </Link>
        </div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

    </header>
  )
}

export default HeaderNavbar