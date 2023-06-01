import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/navbar.jsx'
import Batch from './components/Batch/batch'
import Body from './components/Body/body'
import Service from './components/Services/service'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Body/>
    <Service/>
    <Batch/>
  </React.StrictMode>,
)
