import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className="section-2-wrapper">
        <div className="section2-container">
            <p className="section2-heading">Start here. Change the world.</p>
            <section>
                <div>
                    <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/college.jpg" alt="" />
                    <p className="heading">National Innovative Diploma (NID)</p>
                    <p className='sub-heading'>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
                    <a href="#">Learn More</a>
                </div>
                <div>
                    <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/prof.jpg" alt="" />
                    <p className="heading">Professional Diploma Certificate</p>
                    <p className='sub-heading'>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
                    <a href="#">Learn More</a>
                </div>
                <div>
                    <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/certificate.jpg" alt="" />
                    <p className="heading">Certificate Program</p>
                    <p className='sub-heading'>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
                    <a href="#">Learn More</a>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Section2