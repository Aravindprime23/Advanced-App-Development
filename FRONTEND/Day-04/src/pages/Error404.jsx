import React from 'react'
import errorImage from "../assets/images/mittenerror.png"
import '../assets/styles/Error404.css'

function Error404() {
  return (
    <div>
      <h1>Error !!! Page Not Found</h1>
      <img className='error-image' src={errorImage} alt="404 Error" style={{ maxWidth: '100%', height: '600px' }} />
    </div>
  )
}

export default Error404
