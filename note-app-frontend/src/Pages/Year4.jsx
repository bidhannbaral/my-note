import React from 'react'
import { Link } from 'react-router-dom'

const Year4 = () => {

  const classList = [
    {
      title: "Design & Analysis of Algorithms",
      name: "CMSC-441",
      description: "This course studies fundamental algorithms, strategies for designing algorithms, and mathematical tools for analyzing algorithms."
    },
    {
      title: "447 Software Engineering I",
      name: "CMSC-447",
      description: "This course introduces the basic concepts of software engineering, including software life cycle, requirements analysis and software design methods."
    },
    {
      title: "Introduction to Network Security",
      name: "CMSC-487",
      description: "    The objective of this course is to teach the fundamental concepts, architectures, and protocols related to network security."
    },
    {
      title: "Malware Analysis",
      name: "CMSC-449",
      description: "This course will provide a foundation for understanding emerging trends in malware designs, including efforts to deter analysis."
    },
    {
      title: "Database Management Systems",
      name: "CMSC-461",
      description: "This course covers database management and the different data models used to structure the logical view of databases."
    },
    {
      title: "Artificial Intelligence",
      name: "CMSC-471",
      description: "    This course provides a broad introduction to artificial intelligence, its sub-fields and their applications."
    },
    {
      title: "Introduction to Data Science",
      name: "CMSC-462",
      description: "This course provides a foundational understanding of the field, covering core concepts, techniques, and tools used to analyze and extract insights from data."
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

export default Year4