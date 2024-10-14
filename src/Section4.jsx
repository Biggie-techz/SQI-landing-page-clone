import React from 'react'
import './Section4.css'

const Section4 = () => {
  return (
    <div className="section-4-wrapper">
        <div className="section-4-container">
            <article>
                <p className="section4-heading">Our Top Courses</p>
                <p className="section-4-sub-heading">Take a look come of our popular courses</p>
                <a href="#">View all courses</a>
            </article>
            <article>
                <img src="https://edu.sqi.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp" alt="" />
                <p className="heading">Software Engineering</p>
                <p className="sub-heading-1">Software Engineering is one of the most in-demand jobs across the globe today.</p>
                <p className="sub-heading-2">Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                <a href="#">Learn More</a>
            </article>
            <article>
                <img src="https://edu.sqi.ng/wp-content/uploads/2023/01/DATA-SQI.jpg" alt="" />
                <p className="heading">Data Science & Analysis</p>
                <p className="sub-heading-1">The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                <p className="sub-heading-2">Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                <a href="#">Learn More</a>
            </article>
            <article>
                <img src="https://edu.sqi.ng/wp-content/uploads/2023/03/product.jpg" alt="" />
                <p className="heading">UI/UX - Product Design</p>
                <p className="sub-heading-1">More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
                <p className="sub-heading-2">Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
                <a href="#">Learn More</a>
            </article>
            <article>
                <img src="https://edu.sqi.ng/wp-content/uploads/2023/03/digital-literacy.jpg" alt="" />
                <p className="heading">Digital Literacy</p>
                <p className="sub-heading-1">This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
                <p className="sub-heading-2">Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
                <a href="#">Learn More</a>
            </article>
        </div>
    </div>
  )
}

export default Section4