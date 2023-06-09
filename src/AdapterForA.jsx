
import React, { useState, useEffect, TouchEvent, useRef } from 'react';
import axios from 'axios';
import "./style.css"
import * as RB from "react-bootstrap"

function App() {
  const array = [
    {
      city:"Tokio",
      activeStatus:true
    },
    {
      city:"Cario",
      activeStatus:true
    },
    {
      city:"Rome",
      activeStatus:true
    },
    {
      city:"Paris",
      activeStatus:true
    },
    {
      city:"Mexico",
      activeStatus:true
    },
    {
      city:"Florence",
      activeStatus:true
    },
    {
      city:"New York",
      activeStatus:true
    },
    {
      city:"Moscow",
      activeStatus:true
    },
    {
      city:"Sydney",
      activeStatus:true
    },
    {
      city:"San Francisco",
      activeStatus:true
    },
    {
      city:"Amsterdam",
      activeStatus:true
    }
  ]
  const tabMenu = useRef();
  const [activeDrag, setActiveDrag] = useState(false)

  const handleMouseMove = (drag) => {
    if (!activeDrag) return;
    tabMenu.current.scrollLeft -= drag.movementX;
    tabMenu.current.classList.add("dragging")
  }

  document.addEventListener("mouseup", () => {
    setActiveDrag(false)
    tabMenu.current.classList.remove("dragging")
  })

  const handleMouseDown = () => {
    setActiveDrag(true)
  }

  

  return (
    <section className="main-container">
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <ul ref={tabMenu} onMouseMove={(drag) => handleMouseMove(drag)} onMouseDown={() => handleMouseDown()} className="tab-menu" >
            {/* <li className="tab-btn active">Tokio</li>
            <li className="tab-btn">Cario</li>
            <li className="tab-btn">Rome</li>
            <li className="tab-btn">Paris</li>
            <li className="tab-btn">Mexico</li>
            <li className="tab-btn">Florence</li>
            <li className="tab-btn">New York</li>
            <li className="tab-btn">Moscow</li>
            <li className="tab-btn">Sydney</li>
            <li className="tab-btn">San Francisco</li>
            <li className="tab-btn">Amsterdam</li> */}
            {array.map((city)=>(
              <li >{city}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className='tab-content'>
        <div className="tab active">
          <div className="row">
            Tokio
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Cario
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Rome
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Paris
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Mexico
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Florence
          </div>
        </div>
        <div className="tab">
          <div className="row">
            New York
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Moscow
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Sydney
          </div>
        </div>
        <div className="tab">
          <div className="row">
            San Francisco
          </div>
        </div>
        <div className="tab">
          <div className="row">
            Amsterdam
          </div>
        </div>
      </div>
    </section>


  );
}

export default App;