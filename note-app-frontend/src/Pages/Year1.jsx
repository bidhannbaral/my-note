import React from 'react'
import { Link } from 'react-router-dom'

const Year1 = () => {

  const classList = [
    {
      title: "Computer Science I",
      name: "CMSC-201",
      description: "This course introduces the fundamentels of Computer Science by teaching students how to program with Python."
    },
    {
      title: "Computer Science II",
      name: "CMSC-202",
      description: "This course introduces the fundamentals of object-oriented programming by teaching students how to program with C++."
    },
    {
      title: "Discrete Structures",
      name: "CMSC-203",
      description: "This course introduces the fundamentel concepts of discrete mathematics used in computer science."
    },
    {
      title: "Calculus & Analytic Geometry I",
      name: "MATH-151",
      description: "This course introduces fundamental concepts like limits, continuity, and derivatives of functions, with applications in various fields."
    },
    {
      title: "Calculus & Analytic Geometry II",
      name: "MATH-152",
      description: "This course builds from MATH 151 and delves deeper into integral calculus, focusing on advanced integration techniques and their applications."
    },
    {
      title: "Composition",
      name: "ENGL-100",
      description: "This is a course in critical thinking, reading, and composing, with an emphasis on integrating academic research and documentation."
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

export default Year1