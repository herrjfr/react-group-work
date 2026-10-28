import React from 'react'
import './Vahid2.css'
import { LuCoffee, LuGlassWater, LuCakeSlice } from 'react-icons/lu'
import { BiBowlRice } from 'react-icons/bi'

function Vahid2() {
  return (
    <section className="vahid2">
      <div className="vahid2-container">
        <h2 className="vahid2-title">Browse Our Menu</h2>

        <div className="vahid2-cards">
          <div className="vahid2-card">
            <div className="vahid2-icon">
              <LuCoffee />
            </div>
            <h3>Breakfast</h3>
            <p>
              In the new era of technology we look in the future with certainty and pride for our life.
            </p>
            <a href="#menu">Explore Menu</a>
          </div>

          <div className="vahid2-card">
            <div className="vahid2-icon">
              <BiBowlRice />
            </div>
            <h3>Main Dishes</h3>
            <p>
              In the new era of technology we look in the future with certainty and pride for our life.
            </p>
            <a href="#menu">Explore Menu</a>
          </div>

          <div className="vahid2-card">
            <div className="vahid2-icon">
              <LuGlassWater />
            </div>
            <h3>Drinks</h3>
            <p>
              In the new era of technology we look in the future with certainty and pride for our life.
            </p>
            <a href="#menu">Explore Menu</a>
          </div>

          <div className="vahid2-card">
            <div className="vahid2-icon">
              <LuCakeSlice />
            </div>
            <h3>Desserts</h3>
            <p>
              In the new era of technology we look in the future with certainty and pride for our life.
            </p>
            <a href="#menu">Explore Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vahid2
