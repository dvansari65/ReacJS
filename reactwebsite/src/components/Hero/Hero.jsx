import React from 'react'
import "./Hero.css"
import arrow from "../../assets/arrow.jpg"

function Hero() {
  return (
    <div className="hero container ">
        <div className="text">
            <h1>We Ensure better Education for better world</h1>
            <p>Our cutting edge curriculum is designed to empower students with the knowledge,skills and experiences 
            <div className='div'>needed to excel in the dynamic field of education!!</div>
            </p>
            <button className='btn '>explore more <img className="arrow"src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero