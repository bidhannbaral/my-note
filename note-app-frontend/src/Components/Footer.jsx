import React from 'react'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <div className="page-wrapper">
          <div className="footer-wrapper">
        <div className="footer-content">
          <div className="links">
            <div>
              <h4>Connect:</h4>
            </div>
            <div>
              <a href="https://github.com/bidhannbaral" target="_blank"><img src={githubLogo} alt="github" /></a>
              <a href="https://www.linkedin.com/in/bidhannbaral/" target="_blank"><img src={linkedinLogo} alt="linkedin" /></a>
            </div>
          </div>
        </div>
    </div>
    </div>

  )
}

export default Footer