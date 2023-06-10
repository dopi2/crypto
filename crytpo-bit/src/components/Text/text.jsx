/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import background from "../images/inner_about_us.jpg";
import './text.css'
import Bounce from 'react-reveal/Bounce';
import service from '../images/customer-service.png'
class App extends Component {
render() {
	const myStyle={
		backgroundImage: `url(${background})`,
		height:'90vh',
		marginTop:'1px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
	<div style={myStyle} id='lim'>
		<Bounce left>
	<h6>WHAT WE DO</h6>
        <h1>About Us</h1>
        <h3>At Exelon, we bring a wealth of expertise and <br/>
        specialization in various areas of IT consultation</h3>
        <p>Welcome to Exelon, a leading provider of IT consultation services. We are passionate about <br/>
        helping businesses leverage technology to drive growth, enhance efficiency, and <br/>
        achieve their strategic objectives. With a team of experienced consultants and a deep<br/> understanding of the IT landscape, we offer comprehensive solutions tailored to meet your unique needs.</p>
        <button type="button" className="btn" id='hap'><a>
        <img src={service} width={20}/>&nbsp;&nbsp;Our Services
          </a></button>
		  </Bounce>
    </div>
		
	);
}
}

export default App;
