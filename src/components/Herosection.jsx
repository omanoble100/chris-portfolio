import React from 'react'
import './Herosection.css'

const Herosection = () => {
  return (
    <>
        <div className='hero-section'>
            <img src="./img/hero-img.png" alt="" />
        </div>
        <div className="text">
            <p>Graphic Designer/Illustrator</p>
        </div>
        <div className="icons">
            <img src="./img/instagram-logo-48.png" alt="" />
            <img src="./img/behance-logo-48.png" alt="" />
            <img src="./img/twitter-logo-48.png" alt="" />
        </div>
    </>
  )
}

export default Herosection