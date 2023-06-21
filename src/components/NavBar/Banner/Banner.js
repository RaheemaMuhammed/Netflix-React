import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
         <div className='content'>
<h1 className='title'>Movie Name</h1>
<div className='banner-buttons'>
    <button className='button'>Play</button>
    <button className='button'>My List</button>
</div>
<h1 className='description'>There are many variations of passages of
 Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</h1>
         </div>
         <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner