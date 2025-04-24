import React from 'react'
import { Link } from 'react-router-dom'

const Year2 = () => {

  const classList = [
    {
      title: "Principles of Programming Language",
      name: "CMSC-331",
      description: "This course examines the theory, design and implementation of programming languages that will likely be new to students."
    },
    {
      title: "Data Structures",
      name: "CMSC-341",
      description: "This course builds from CMSC 202 and examines a range of advanced data structures, with an emphasis on an object-oriented approach."
    },
    {
      title: "Computer Organization & Assembly",
      name: "CMSC-313",
      description: "This course introduces the student to the low-level abstraction of a computer system from a programmer's point of view, with an emphasis on low-level programming."
    },
    {
      title: "Introduction to Linear Algebra",
      name: "MATH-221",
      description: "This course introduces students to the mathematical study of vectors, matrices, vector spaces, and their properties."
    },
    {
      title: "Physics I",
      name: "PHYS-121",
      description: "This is the first-semester introductory calculus-based physics course that will focus on mechanics."
    },
    {
      title: "Physics II",
      name: "PHYS-122",
      description: "This is the second-semester introductory calculus-based physics course that will focus on electricity and magnetism."
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
                <Link to={`/notes/${item.name}`}>
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

export default Year2