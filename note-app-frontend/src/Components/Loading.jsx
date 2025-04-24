import React from 'react'
import spinner from '../assets/spinner.svg';

const Loading = () => {
  return (
    <div className="loading-spinner">
        <div>
            <img src={spinner} alt="Loading..." />
        </div>
    </div>
  )
}

export default Loading