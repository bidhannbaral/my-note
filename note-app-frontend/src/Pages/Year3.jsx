import React from 'react'
import { Link } from 'react-router-dom'

const Year3 = () => {

  const classList = [
    {
      title: "Social & Ethical Issues in IT",
      name: "CMSC-304",
      description: "This is a course that reviews social issues and the ethical impact of information technology throughout the world."
    },
    {
      title: "Computer Architecture",
      name: "CMSC-411",
      description: "This course covers the design of complex computer systems making heavy use of the components and techniques discussed in CMSC 313."
    },
    {
      title: "Principles of Operating Systems",
      name: "CMSC-421",
      description: "This course is an introduction to the fundamentals of operating systems."
    },
    {
      title: "Intro. to Probability & Statistics",
      name: "STAT-355",
      description: "This course is an introduction to probability, statistics and statistical computation for students who have knowledge of univariate calculus."
    },
    {
      title: "Principles of Computer Security",
      name: "CMSC-426",
      description: "This course will provide an introduction to computer security, with specific focus on the computing aspects."
    },
    {
      title: "Cryptology",
      name: "CMSC-443",
      description: "Currently there are no classes for this course."
    },
    {
      title: "Computer Networks",
      name: "CMSC-481",
      description: "This course introduces the fundamentals of data communication and computer networking."
    },
  ]
  return (
    <div className="year-wrapper">
      <div>
        <h2>Classes: </h2>
      </div>
      <div className="year-classes-wrapper">
          {classList.map((item, index) => (
            <div key={index} className="year-classes-container">
              <div>
                <div className="classes-title">
                  <h2>{item.title}</h2>
                </div>
                <div className="classes-description">
                  <p>{item.description}</p>
                </div>
                <div className="classes-name">
                  <p>{item.name}</p>
                </div>
                <Link to={`/notes/${encodeURIComponent(item.name)}`}>
                  <button className="classes-button">
                    View Notes
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Year3