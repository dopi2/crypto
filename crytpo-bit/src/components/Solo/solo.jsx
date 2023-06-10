/* eslint-disable no-unused-vars */
import React from 'react'
import pyt from '../images/python-5326385.png'
import pro from '../images/programming-script-tag-3d-symbol-blue-background_582637-286.jpg'
import pot from '../images/portfolio_05-1280x1280.jpg'
import contact from '../images/phone-call.png'
import './solo.css'
const solo = () => {
  return (
    <div>
      <div className="container text-center" id='nag'>
  <div className="row">
    <div className="col" id='white'>
      <h4>Comprehensive IT Consultation Services for Your Business</h4>
      <p>At Exelon, we offer a wide range of IT consultation services designed to help businesses harness the power of technology for growth and success. Our team of experienced consultants combines deep industry knowledge with technical expertise to provide strategic guidance, customized solutions, and reliable support. Explore our comprehensive service offerings below
</p>
<button type="button" className="btn"><a>
        <img src={contact} width={20}/>&nbsp;&nbsp;Contact Us Now
          </a></button>
    </div>
    <div className="col" id='black'>
      <img src={pot} width={450}/>
    </div>
  </div>

</div>
    </div>
  )
}

export default solo
