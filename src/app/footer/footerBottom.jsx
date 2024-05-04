
import React from 'react'
import Link from 'next/link';




const FooterBottom = () => {
  return (
    <div className="footer_copyright">
      <div class="container">
        <div class="content-info">
          <div class="links">
            <a class="privacy-policy-link" href="https://removify.com/terms-of-business/" previewlistener="true">Terms of Business</a>
            <a href="https://removify.com/privacy-policy/" previewlistener="true">Privacy Policy</a>
          </div>
          <span class="copyright">Copyright © 2024 ORM Techies. All rights reserved.</span>
        </div>
        <div class="mt-3 row">
          <div class="col-12 offset-lg-4 col-lg-8">
            <p class="text-12 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisl risus, aliquam ut porta sit amet, luctus ut sem. Sed mi ipsum, dapibus at lacus a, bibendum vulputate ipsum. Sed porta tempus purus aliquet malesuada. Ut eu dictum nisi. Maecenas tincidunt urna eu est venenatis fermentum. Nullam pretium, erat quis elementum semper, lectus lorem laoreet odio, id euismod est lectus ut massa. Nunc varius leo ac nulla blandit tempus. Quisque ullamcorper lobortis magna, a mollis dolor vehicula et.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom