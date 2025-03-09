import React from 'react'

export default function Describe() {
    let btnStyle = {
            background: " linear-gradient(to right, #3A4DC3 0%, #7528D4 30%, #A511DA 70%,#E100D6)"
    }
  return (
    <div>
      <p className='mt-4 fw-semibold text-center w-auto px-2'>Learn to create stunning digital network with step-by-step guidance from industry experts.<br></br>
        No prior experience required.Just your creativity!<br></br>
        Enroll now for &#8377;7,999 
      </p>
      <div className='row d-flex justify-content-center '>
            <button className="btn btn-sm me-4 rounded-5 py-2 fw-bold text-white w-50 head-btn" type="submit" style={btnStyle}>
            Secure Your Spot for Just &#8377;79
            </button>
        </div>
        <p className='mt-2 text-center px-2'>Use a coupon code within 15 minutes to unlock a special bonus pack!</p>
    </div>
  )
}
