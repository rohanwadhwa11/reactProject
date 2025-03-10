import React from 'react';
import "./Heading.css";

export default function Course({detail}) {
    let container ={
        margin: "0 3rem",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #3A4DC3",
        width: "50%",
    }
  return (
    <div style={container} className='text-start px-2 my-2 py-2 details d-flex'>
      <span>{detail.tag}</span>&nbsp;&nbsp;  <span>{detail.desc}</span>
    </div>
  )
}
