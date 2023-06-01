/* eslint-disable no-unused-vars */
import React from 'react'
import './navbar.css'
import logo from '../images/logo-1.png'
import home from '../images/home.png'
import about from '../images/about.png'
import service from '../images/customer-service.png'
import contact from '../images/phone-call.png'
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" id='top1'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" id='top'><img src={logo} width={160}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"><img src={home} width={20} id='img1'/>&nbsp;&nbsp;Home</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-link" href="#"><img src={about} width={20}/>&nbsp;&nbsp;About</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="nav-link" href="#"><img src={service} width={20}/>&nbsp;&nbsp;Services</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div id='btn'>
        <button type="button" className="btn"><a>
        <img src={contact} width={20}/>&nbsp;&nbsp;Contact Us
          </a></button>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
