import React from 'react'
import Course from './Course';
import Button from './Button';

export default function Courses() {
    let headStyle = {
        background: "linear-gradient(to right, #3A4DC3,#7528D4,#851FD8,#9516DD, #A511DA ,#E605CD,#E100D6 90%)",
        color: "transparent",
        backgroundClip: "text",
    };
    let details = [
      {
      tag: <i class="fa-solid fa-globe"></i>,
      desc: "Hands-on Lessons - Learn digital painting, shading & compostion."
      },
      {
        tag: <i class="fa-solid fa-rotate-right"></i>,
        desc: "Tool Mastery - Master Procreate, Photoshop, & Illustrator."
      },
      {
        tag: <i class="fa-solid fa-coins"></i>,
        desc:"Exclusive Resource Pack - Brushes, templates & textures."
      },
      {
        tag: <i class="fa-solid fa-newspaper"></i>,
        desc: "Live mentorship - Weekly Q & A seesions with industry pros."
      },
      {
        tag: <i class="fa-solid fa-location-dot"></i>,
        desc:"Project-Based Learning - Building a stunning portfolio."
      },
      {
        tag: <i class="fa-solid fa-at"></i>,
        desc: "Certificate of Completion - Boost your creative career."
      },
      {
        tag: <i class="fa-solid fa-book"></i>,
        desc: "Community Access - Network with fellow artists"
      }
    ];
    let divStyle = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    };
  return (
    <>
    <div className='my-4' style={divStyle}>
      <h5 className='text-center'  style={headStyle}>With This Course, You Get:</h5>
      {details.map((detail)=>{
        return <Course detail={detail} />
      })}
    </div>
    <Button title="Book Now at &#8377;49"/>
    </>
  )
}
