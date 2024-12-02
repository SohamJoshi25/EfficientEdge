import React from 'react'
import "../styles/LoadingScreen.css";
const Loading = () => {
  return (
    <div className='loading-div'>
        <div className="loading-screen">
        <div className="spinner"></div>
            <h1>Starting the server...</h1>
            <p>Please wait while the server is booting up.</p>
        </div>
    </div>
  )
}

export default Loading