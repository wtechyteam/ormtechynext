'use client'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const PrimeBtn = ({btnName}) => {
  return (
    <button className='prime_btn text-18'>
      {btnName}<FaArrowRight className='ms-2' />
    </button>
  )
}

export default PrimeBtn