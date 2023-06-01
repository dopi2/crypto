/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import background from "../images/background_02.jpg";
  
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
      <div style={myStyle}>
        
      </div>
    );
  }
}
   
export default App;