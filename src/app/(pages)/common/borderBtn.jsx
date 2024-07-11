'use client'
import React from 'react'

const BorderBtn = ({btnName, darkBtn}) => {
  return (
    <button className={`border_btn text-18 ${darkBtn}`}>{btnName}</button>
  )
}

export default BorderBtn