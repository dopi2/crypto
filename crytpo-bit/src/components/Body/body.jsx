/* eslint-disable no-unused-vars */
import React from 'react'
import bg from '../images/hero_image_01.png'
import './body.css'
import about from '../images/about.png'
import 'animate.css';
const body = () => {
  return (
    <div>
      <div className="container text-center">
  <div className="row">
    <div className="col" id='bg1'>
    <img src={bg} width={690}/>
    </div>
    <div className="col animate__animated animate__backInDown" id='text'>
      <h6>Exelon Consultation</h6>
  <h1>Empowering Businesses <span>through Expert</span> Tech Consultation</h1>
  <p>At Exelon, we understand that navigating the ever-evolving landscape of technology can be challenging. Thats why we are here to provide expert tech consultation services to empower businesses like yours. With our team of experienced consultants and comprehensive industry knowledge, we strive to deliver tailored solutions that drive success in the digital age.</p>
  <button type="button" className="btn"><a>
        <img src={about} width={20}/>&nbsp;&nbsp;More About Us
          </a></button>
    </div>
  </div>
  </div>
    </div>
  )
}

export default body
