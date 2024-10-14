import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className="navWrapper">
      <nav>
        <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" className="logo" />
        <ul>
            <li>About</li>
            <li>Programmes</li>
            <li>Admissions</li>
            <li>E-Portal</li>
            <li>SQI Scholarship</li>
            <li>News</li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav