
import React from 'react'
import Link from 'next/link';




const FooterBottom = () => {
  return (
    <div className="footer_copyright">
      <div className="container">
        <div className="content-info">
          <div className="links">
            <a className="privacy-policy-link" href="https://removify.com/terms-of-business/" previewlistener="true">Terms of Business</a>
            <a href="https://removify.com/privacy-policy/" previewlistener="true">Privacy Policy</a>
          </div>
          <span className="copyright">Copyright © 2024 ORM Techies. All rights reserved.</span>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom