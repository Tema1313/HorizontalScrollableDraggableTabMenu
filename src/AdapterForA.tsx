
import React, { useState, useEffect, TouchEvent, useRef, MutableRefObject } from 'react';
import axios from 'axios';
import "./style.css"
import * as RB from "react-bootstrap"

function App() {
  let array = [
    {
      city: "Tokio",
    },
    {
      city: "Cario",
    },
    {
      city: "Rome",
    },
    {
      city: "Paris",
    },
    {
      city: "Mexico",
    },
    {
      city: "Florence",
    },
    {
      city: "New York",
    },
    {
      city: "Moscow",
    },
    {
      city: "Sydney",
    },
    {
      city: "San Francisco",
    },
    {
      city: "Amsterdam"
    }
  ]
  const tabMenu = useRef(null);
  const [activeDrag, setActiveDrag] = useState(false)
  const [active, setActive] = useState(0);

  const handleMouseMove = (drag: any) => {
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

  const openTab = (e: React.MouseEvent<HTMLElement>) => setActive(+e.currentTarget.dataset.index);

  return (
    <section className="main-container">
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <ul ref={tabMenu} onMouseMove={(drag) => handleMouseMove(drag)} onMouseDown={() => handleMouseDown()} className="tab-menu" >
            {array.map((city, key) => (
              <li data-index={key} onClick={(e: React.MouseEvent<HTMLElement>) => openTab(e)} key={key} className={`${key === active ? "active tab-btn" : "tab-btn"}`}>{city.city}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='tab-content'>
        {array.map((city, key) => (
          <div key={key} className={`${key === active ? "tab active" : "tab"}`}>
            <div className='row'>
              {city.city}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;