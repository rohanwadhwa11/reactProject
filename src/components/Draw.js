import React from 'react';
import "./Heading.css";

export default function Draw({draw}) {
    let container ={
        width: "8rem",
        height: "9rem",
        backgroundColor: "white",
        borderRadius: "10px"
    }
  return (
    <div className='container' style={container}>
      <p className='mt-5 text-center'>{draw}</p>
    </div>
  )
}
