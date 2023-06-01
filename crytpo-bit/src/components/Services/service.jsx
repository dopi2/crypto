/* eslint-disable no-unused-vars */
import React from 'react'
import './services.css'
import img1 from '../images/home_card_inner-990x1200.jpg'
import img2 from '../images/post_09-990x1200.jpg'
const service = () => {
  return (
    <div id='tip'>
      <div className="container text-center">
  <div className="row">
    <div className="col">
   <h5>Our Services</h5>
   <h1>We Excel In <span>IT Consulting</span></h1>
   <p>At Exelon we offer a wide range of tech consultation services designed to address your specific technological challenges and goals. Our team of experienced consultants will work closely with you to understand your unique requirements and provide tailored solutions that drive your business forward. Explore our comprehensive service offerings below</p>
   <button type="button" className="btn" id='cards'><a>
 View More &rarr;
          </a></button>
    </div>
    <div className="col" id='second'>
   <img src={img1} width={250}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src={img2} width={250}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default service
