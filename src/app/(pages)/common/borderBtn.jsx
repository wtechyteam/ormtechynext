// components/BorderBtn.js

import React from 'react';
import Link from 'next/link';

const BorderBtn = ({ btnName, darkBtn, href = '/getAQuote' }) => {
  return (
    <Link href={href}>
      <div className={`border_btn text-18 ${darkBtn}`}>
        {btnName}
      </div>
    </Link>
  );
};

export default BorderBtn;
