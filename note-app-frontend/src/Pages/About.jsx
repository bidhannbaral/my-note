import React from 'react'
import aboutImage from '../assets/about.jpg'
import Loading from '../Components/Loading'

const About = () => {
  return (
    <div className="about-container">
        <div className="about-title">
          <h2>About MyNote</h2>
        </div>
        <div className="about-content">
          <div className="about-left">
            <img className="aboutus-img" src={aboutImage} alt={<Loading />} />
          </div>
          <div className="about-right">
            <div className="about-right-title">
              <h3>What is MyNote?</h3>
            </div>
            <div className="about-right-text">
              <p>MyNote is a web application where students can view and upload notes for the courses avaliable. We built this application to provide
                 students with resources, notes, and other materials to help them succeed in their academic journey. 
              </p>
            </div>
          </div>
        </div>
        <div className="about-footer">
          <h3>Work in progress...</h3>
        </div>
    </div>
  )
}

export default About