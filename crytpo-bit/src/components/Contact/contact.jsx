/* eslint-disable no-unused-vars */
import React from 'react'
import con from '../images/13.png'
import './contact.css'
const contact = () => {
  return (
    <div id='flati'>
      <div className="container text-center">
  <div className="row">
    <div className="col" id="lad">
     <h6>Contact Us</h6>
     <h1>Get In Touch and Stay Connected</h1>
     <p> Our dedicated team of experts is ready to provide prompt and comprehensive support</p>
     <button type="button" className="btn"><a>
         Contact Us &rarr;
          </a></button>
    </div>
    <div className="col" id="hap">
      <img src={con} width={390}/>
    </div>
  </div>
  </div>
    </div>
  )
}

export default contact
