import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="heroWrapper">
        <div className="heroContainer">
        <div className="hero-text">
            <h1>Study to become a global talent</h1>
            <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
            <button>Start Now</button>
        </div>
        <div className="hero-image">
            <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Hero