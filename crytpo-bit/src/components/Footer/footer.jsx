/* eslint-disable no-unused-vars */
import React from 'react'
import './footer.css'
import bg1 from '../images/html-3640299.png'
import bg2 from '../images/css3-3640300.png'
import bg3 from '../images/java-4781237.png'
import bg4 from '../images/java-script-4695690.png'
const footer = () => {
  return (
    <div id='idan'>
      <div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div className="col"><img src={bg1} width={190}/></div>
    <div className="col"><img src={bg2} width={190}/></div>
    <div className="col"><img src={bg3} width={190}/></div>
    <div className="col"><img src={bg4} width={190}/></div>
  </div>
</div>
    </div>
  )
}

export default footer
