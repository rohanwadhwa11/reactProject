import React from 'react';
import "./Heading.css"

export default function FAQ({question}) {
    let divStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      };
  return (
    <div style={divStyle} >
        <div className='w-50 faq'>
            <h5 >Q: {question.ques} &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='border border-0 bg-white' ><i class="fa-solid fa-angle-down"></i></button>
            </h5>
            <p  className={question.sno} >{question.ans}</p>
            <hr></hr>
      </div>
    </div>
  )
}
