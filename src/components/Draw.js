import React from 'react';
import "./Heading.css";

export default function Draw({draw}) {
    let container ={
        width: "8rem",
        height: "10rem",
        backgroundColor: "white",
        borderRadius: "10px"
    }
    let desc = {
      position: "relative",
      bottom: "-2rem"
    }
  return (
    <div className='container' style={container}>
      <p className='text-center mt-3 mb-0 text-danger fw-bold fs-3'>{draw.tag}</p>
      {draw.tag === "" ? <p className='text-center mt-5'>{draw.desc}</p>:<p className='text-center'>{draw.desc}</p>}
    </div>
  )
}
