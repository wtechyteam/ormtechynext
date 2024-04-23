import React from 'react'

const BorderBtn = ({btnName, darkBtn}) => {
  return (
    <button className={`border_btn ${darkBtn}`}>{btnName}</button>
  )
}

export default BorderBtn