import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <h2>Welcome</h2>
        <div>
          <Link to="/about">
            <button>Start</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home