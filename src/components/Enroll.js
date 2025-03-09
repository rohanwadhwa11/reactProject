import React from 'react'
import Button from './Button';
import "./Heading.css";

export default function Enroll() {
    let divStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };
      let listStyle = {
        listStyle: "none",
        margin: "0 3rem",
        borderRadius: "15px",
        border: "1px solid #3A4DC3",
        width: "90%",
        position: "relative",
        left: "-2rem",
        fontSize: "0.8rem"
      };
      let box = {
        background: " linear-gradient(to right, #f9560099, #f6670199 ,#f9691199,#f900c399 20%,#e60eba99 50%, #3b74e699 80%, #3A4DC399  90%)",
        fontSize: "0.8rem"
      }
  return (
    <div style={divStyle}>
    <h3 className='mb-3'>Enroll Now for &#8377;7,999</h3>
    <ul>
        <li style={listStyle} className='text-center my-2 py-1 list'>Secure Your Spot for Just &#8377;79</li>
        <li style={listStyle} className='text-center my-2 py-1 list'>Bonus Offer: Apply a coupon code within 15 minutes to unlock</li>
        <li style={listStyle} className='text-center my-2 py-1 list'>Exclusive Brush & Texture Pack</li>
        <li style={listStyle} className='text-center my-2 py-1 list'>Extra Live Q & A Session with mentors</li>
    </ul>
    <p className='mx-4'>We Offer Everything you need at &#8377;7,999 - but wait... <i class="fa-solid fa-clock-rotate-left"></i></p>
    <div style={box} className='px-3 py-3 rounded-2 fw-semibold mb-3 mx-3'>Use aSpecial code & Game - Changing Discount to avail same course in a discounted price!</div>
    <Button title="Book Now for &#8377;79"/>
    </div>
  )
}
