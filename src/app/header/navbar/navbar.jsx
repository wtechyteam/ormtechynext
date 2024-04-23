'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname} from 'next/navigation';

const HeaderInner = () => {

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 

  return (
    <div className="navWrap" >
      <nav className={isMenuOpen && 'xxxxxxxxxxxxxxx'}>
        <ul className="navList">
          <li className={pathname == "/" ? "active" : ""} >
            <Link className="navLink" href="/" replace scroll={true}>Home </Link>
          </li>
          <li className={pathname == "/about" ? "active" : ""} >
            <Link className="navLink" href="/about" replace> About</Link>
          </li>
          <li className={pathname == "/services" ? "active" : ""}>
            <Link className="navLink" href="/services">Services</Link>
          </li>
          <li className={pathname == "/contact" ? "active" : ""}>
            <Link className="navLink" href="/contact">Contact</Link>
          </li>
          <li className={pathname == "/contact" ? "active" : ""}>
            <Link className="navButton" href="/contact">Get a Quote</Link>
          </li>
        </ul>
      </nav>
      <button className="d-md-none navbarToggle" onClick={toggleMenu}>
        Menu <span>{isMenuOpen ? 'true' : 'false'}</span>
      </button>
    </div>
  );
};

export default HeaderInner;
