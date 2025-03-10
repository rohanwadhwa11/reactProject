import React from 'react';
import "./Heading.css";

export default function Reviews() {
    let container = {
        height: "30rem",
        width: "30rem",
        borderRadius: "20px",
        boxShadow: "1px 1px 5px #3A4DC3",
    };
    let iStyle = {
        fontSize : "3rem"
    };
    let reviewStyle = {
        height: "12rem",
        width: "12rem",
        boxShadow: "1px 1px 5px #A511DA",
        borderRadius: "10px",
        fontSize: "0.7rem",
        margin: "0 2rem"
    }
  return (
    <>
    <div className='d-flex justify-content-center my-5'>  
      <div style={container} className='d-flex justify-content-center align-items-center mx-4 video'>
      <i class="fa-solid fa-circle-play text-dark opacity-25" style={iStyle}></i>
      </div>
    </div>
    <div className='d-flex justify-content-center mb-5'>
        <div style={reviewStyle} className='text-center  pt-4 px-2 review'>
            <h6 className='fw-normal'>Aditi Verma</h6>
            <p>20<br></br>
            I always wanted to learn digital art, but tutorials were confusing.
                This course made everything so simple! <br></br>Now, I'm taking commissions online!
            </p>
        </div>
        <div style={reviewStyle} className='text-center pt-4 px-2 review'> 
            <h6 className='fw-normal'>Rajesh Khanna</h6>
            <p>30<br></br>
            Switching from traditional art to digital felt overwhelming, but this course change everything!
                The structured lessons helped me master <br></br>Procreate in weeks!
            </p>
        </div>
    </div>
    </>
  )
}
