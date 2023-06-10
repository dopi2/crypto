/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import background from "../images/background_02.jpg";
import Fade from 'react-reveal/Fade';
import img3 from '../images/image3.png'
import './batch.css'
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'70vh',
        // marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle} id='tap'>
 <Fade left>
 <div className="container text-center" id='tap1'>
  <div className="row">
    <div className="col">
     <img src={img3} width={390} id='loud'/>
    </div>
    <div className="col" id='mit'>
     <h6>Exelon Consultation</h6>
     <p>At Exelon, we are an esteemed IT consultation firm dedicated to empowering businesses with comprehensive technology solutions. With a deep understanding of the IT landscape and a team of seasoned professionals, we offer expert guidance and strategic advice to help organizations harness the power of technology and achieve their business objectives.</p>
     <a href='/about'><button type="button" className="btn"><a>
         About Us &rarr;
          </a></button></a>
    </div>
  </div>
  </div>
        </Fade>
      </div>
    );
  }
}
   
export default App;