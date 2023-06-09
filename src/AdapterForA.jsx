
import React, { useState, useEffect, TouchEvent} from 'react';
import axios from 'axios';
import "./style.css"
import * as RB from "react-bootstrap"

function App() {
  let btnLeft, btnRight,tabMenu
  let activeDrag = false;
  useEffect(()=> {
    btnLeft = document.querySelector(".left-btn")
    btnRight = document.querySelector(".right-btn")
    tabMenu = document.querySelector(".tab-menu")
  },[])

  const IconVisibility = () => {
    let scrollLeftValue = tabMenu.scrollLeft
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none"
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none"
  }

  const handleRightClick = () => {
    tabMenu.scrollLeft += 150;
    setTimeout(()=>IconVisibility(),50)
  }

  const handleLeftClick = () => {
    tabMenu.scrollLeft -= 150;
    setTimeout(()=>IconVisibility(),50)
  }

  const handleMouseMove = (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
  }

  document.addEventListener("mouseup",()=>{
    activeDrag = false
  })

  const handleMouseDown = () => {
    activeDrag = true
  }

  window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= this.window.innerWidth ? "block" : "none"
    btnLeft.style.display = tabMenu.scrollWidth >= this.window.innerWidth ? "" : "none"
  }

  window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= this.window.innerWidth ? "block" : "none"
    btnLeft.style.display = tabMenu.scrollWidth >= this.window.innerWidth ? "" : "none"

    let scrollLeftValue = Math.round(tabMenu.scrollLeft)

    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none"
  }

  return (
    <section className="main-container">
      <div className="tab-nav-bar">
        <div className="tab-navigation">
        <i onClick={()=>handleLeftClick()} className="bi bi-chevron-left left-btn"></i>
        <i onClick={()=>handleRightClick()} className="bi bi-chevron-right right-btn"></i>
          <ul onMouseMove={(drag)=>handleMouseMove(drag)} onMouseDown={()=>handleMouseDown()} className="tab-menu" >
            <li className="tab-btn active">Tokio</li>
            <li className="tab-btn">Cario</li>
            <li className="tab-btn">Rome</li>
            <li className="tab-btn">Paris</li>
            <li className="tab-btn">Mexico</li>
            <li className="tab-btn">Florence</li>
            <li className="tab-btn">New York</li>
            <li className="tab-btn">Moscow</li>
            <li className="tab-btn">Sydney</li>
            <li className="tab-btn">San Francisco</li>
            <li className="tab-btn">Amsterdam</li>
          </ul>
        </div>
      </div>
    </section>


  );
}

export default App;