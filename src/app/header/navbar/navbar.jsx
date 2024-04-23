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
        <ul >
          <li className={pathname == "/" ? "active" : ""} >
            <Link href="/" replace scroll={true}>Home </Link>
          </li>
          <li className={pathname == "/about" ? "active" : ""} >
            <Link href="/about" replace> About</Link>
          </li>
          <li>
            <Link href="/services">Services
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact
            </Link>
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
