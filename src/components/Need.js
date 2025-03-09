import React from 'react';
import image from '../logo.png'

export default function Need() {
    let headStyle = {
        background: "linear-gradient(to right, #3A4DC3,#7528D4,#851FD8,#9516DD, #A511DA ,#E605CD,#E100D6 90%)",
        color: "transparent",
        backgroundClip: "text",
    };
    let imgStyle ={
        height: "25rem",
        width: "30rem",
    }
  return (
    <div >
      <h5 className='text-center'  style={headStyle}>Is This Right for You?</h5>
      <p className='text-center'>EveryBody is fond of Digital Art! You need it too</p>
      <div className='d-flex justify-content-center'>
      <img src={image} style={imgStyle} alt='image' className='need-img'></img>
      </div>
    </div>
  )
}
