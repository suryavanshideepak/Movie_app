import React from 'react'
import '../App.css'


function Footer(){
  return (
    <div className='container-fluid footer'>
      <div className=' container py-5 '>
        <div className='row'>
         
          <div className='col-md-4 '>
            <h2 className="logo">GetFlix</h2>
          </div>
          <div className='col-md-4 icon d-flex justify-content-center align-items-center'>
            <i className="fa-brands fa-facebook-f text-danger"></i>
            <i className="fa-brands fa-instagram text-danger"></i>
            <i className="fa-brands fa-youtube text-danger"></i>
          </div>
          <div className='col-md-4 d-flex justify-content-center align-items-center'>
            <input type='search' placeholder="Drop Your mail..." className='border-0 border-rounded inp'/>
          </div>
        </div>
      </div>
      <h6 className='text-center text-white'>All Rights and Reserved &copy;  Copyright</h6>
    </div>
  )
}

export default Footer;