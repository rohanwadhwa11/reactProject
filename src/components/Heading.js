import React from 'react';
import "./Heading.css";
import Describe from './Describe';

export default function Heading() {
    let headStyle = {
        background: "linear-gradient(to right, #3A4DC3,#7528D4,#851FD8,#9516DD, #A511DA ,#E605CD,#E100D6 90%",
        color: "transparent",
        backgroundClip: "text",
    };
    let imgStyle ={
        width: "25rem",
        height: "20rem",
        objectFit: "cover",
        backgroundPosition: "cover"
    }
  return (
    <div>
      <h1 className='text-center  pb-2' style={headStyle}>Master the Art of Digital Illustration</h1>
      <p className='text-center fs-5 fw-medium'>A 4-Week Course Designed for Beginners & Enthusiasts!</p>
      <img src='https://media.istockphoto.com/id/1251629816/photo/the-perfect-setting-to-complete-work.jpg?s=612x612&w=0&k=20&c=gH1kQhV4MdvrFnzto7YGEk-6Q1RDZ01w9-0NVTiGmT0='
       style={imgStyle} className='offset-2 mt-2 head-img'></img>
      <img src='https://img.freepik.com/free-photo/contemporary-room-workplace-office-supplies-concept_53876-147673.jpg?semt=ais_hybrid' 
      style={imgStyle} className='mt-2 head-img'></img>
      <Describe/>
    </div>
  )
}
