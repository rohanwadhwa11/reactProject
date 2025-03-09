import React from 'react'

export default function Button({title}) {
    let btnStyle ={
        background: " linear-gradient(to right, #3A4DC3 0%, #7528D4 30%, #A511DA 70%,#E100D6)"
    };
    return (
    <div>
        <form class="d-flex justify-content-center my-5">
        <button class="btn btn-sm me-4 px-5 rounded-3  py-2 fw-bold  text-white" type="submit" style={btnStyle}>{title}</button>
        </form>
    </div>
  )
}
