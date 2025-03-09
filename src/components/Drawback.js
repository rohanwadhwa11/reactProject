import React from 'react';
import Draw from './Draw';

export default function Drawback(props) {
    let contain = {
        display: "flex",
        justifyContent: "Space-around",
        alignItems: "center",
        height: "11rem"
      }
  return (
    <div>
      <h5 className='text-center bg-info-subtle mb-0 pb-2 pt-3 fw-normal'>Without Proper Training, You Might:</h5>
      <div style={contain} className='bg-info-subtle bg-opacity-50 mb-3 '>
        {props.drawback.map((draw)=>{
            return <Draw draw={draw}/>   
            })}
         </div>
    </div>
  )
}
