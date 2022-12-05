import React from 'react'
import './WhatsGood.css'

const WhatsGood = () => {
  return (
    <div className='section-2'>
        <div className="img-area">
            <img src="./img/whatsgood.jpg" alt="" />
        </div>
        <div className="text-area">
            <h1>What's Good!!</h1>
            <p>I'm Chris, a designer, dancer, creator and entrepreneur based in Nigeria. I started as a freelance graphic designer then I moved to drawing/painting but my skills have evolved to doing the mix of everything from creating graphic design content to making digital art. You can view my graphic design content on my <span>Behance</span> portfolio.</p>
            <p>Welcome to the Graphics Universe...</p>

            <div className="icons-2">
                <img src="./img/instagram-logo-24.png" alt="" />
                <img src="./img/behance-logo-24.png" alt="" />
                <img src="./img/twitter-logo-24.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhatsGood