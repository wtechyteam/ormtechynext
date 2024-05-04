'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './navbar/navbar'
import "./headerStyle.scss";
import Link from 'next/link';
import siteLogo from "../../../public/images/ORMLogoNew.svg";
import Image from "next/image";


const HeaderNavbar = ({ activeTab, setActiveTab }) => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40); // Set isSticky to true if scrolled more than 50 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <header className={`siteHeader ${isSticky ? 'sticky' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
          <Link  className="siteLogo" href="/">
            <Image className='orm_logo' width={100} src={siteLogo} title="ORM Techies" alt="ORM Techies" />
          </Link>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

    </header>
  )
}

export default HeaderNavbar