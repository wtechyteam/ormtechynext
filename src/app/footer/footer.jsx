import React from 'react'
import "./footerStyle.scss"
import Image from "next/image";
import Link from 'next/link';
import footerAward1 from "../../../public/images/footer/Deloitte-global.webp";
import footerAward2 from "../../../public/images/footer/2021-BIA-Awards-2.webp";
import footerAward3 from "../../../public/images/footer/Pause-Awards-new.webp";
import footerAward4 from "../../../public/images/footer/2021-BIA-Awards.png";
import siteLogo from "../../../public/images/ORMLogoNew.svg";

import FooterBottom from './footerBottom';

import { FaFacebookF } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='siteFooter'>
      <div className="footer_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <Link className="siteLogo" href="/">
                <Image width={120} src={siteLogo} title="ORM Techies" alt="ORM Techies" />
              </Link>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="awardsList">
                <Image src={footerAward1} alt="Deloitte-global" />
                <Image src={footerAward2} alt="2021-BIA-Awards-2" />
                <Image src={footerAward3} alt="Pause-Awards" />
                <Image src={footerAward4} alt="2021-BIA-Awards" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <h4 className='footerTitle '>Follow us:</h4>
              <ul className="socialMediaList mb-5 mb-lg-4">
                <li><a title="Facebook" href="https://www.facebook.com/wtechy/" target="_blank"  ><FaFacebookF /></a></li>
                <li><a title="Linkedin" href="https://in.linkedin.com/company/wtechy" target="_blank"  ><FaLinkedinIn /></a></li>
                <li><a title="Upwork" href="https://www.upwork.com/agencies/wtechy/" target="_blank" ><SiUpwork /></a></li>
                <li><a title="Twitter" href="https://twitter.com/w_techy" target="_blank"  ><FaTwitter /></a></li>

              </ul>
              <ul className="contactInfo">
                
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@ormtechies.com" title="info@wtechy.com">info@ormtechies.com</a>
                </li>
                
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="columnList">
                <div className="ste">
                  <h4 className='footerTitle'>We remove from</h4>
                  <ul>
                    <li>
                      <Link href="/content-removal/google-reviews">Google Reviews</Link>
                    </li>
                    <li>
                      <Link href="/content-removal/glassdoor/">Glassdoor</Link>
                    </li>
                    <li>
                      <Link href="/content-removal/ratemds/">RateMDs</Link>
                    </li>
                    <li>
                      <Link href="/content-removal/tripadvisor/">TripAdvisor</Link>
                    </li>
                    <li>
                      <Link href="/social-media-removal/facebook/">Facebook</Link>
                    </li>
                    <li>
                      <Link href="/content-removal/google-search-results/">Google Search Results</Link>
                    </li>
                    <li>
                      <Link href="/content-removal/">And More</Link>
                    </li>
                  </ul>

                </div>
                <div className="ste">
                  <h4 className='footerTitle'>Our Services</h4>
                  <ul>
                    <li>
                      <Link href="/service/reputation-management/">Reputation Management</Link>
                    </li>
                    <li>
                      <Link href="/amplify-reviews">AMPLIFY Reviews</Link>
                    </li>
                    <li>
                      <Link href="/reputation-review-monitoring/">Reputation Monitoring</Link>
                    </li>
                    <li>
                      <Link href="/fake-reviews/">Fake Review Removal</Link>
                    </li>
                  </ul>
                </div>
                <div className="ste">
                  <h4 className='footerTitle'>About</h4>
                  <ul>
                    <li>
                      <Link href="/about-us/" >About Ormtechies</Link>
                    </li>
                    <li>
                      <Link href="/contact/" >Contact</Link>
                    </li>

                    <li>
                      <Link href="/ormtechies-in-the-media/" >In The Media</Link>
                    </li>
                    <li>
                      <Link href="/reviews/" >Ormtechies Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer