import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div>
        <div className="section-3">
            <div className="heading">
                <h1>My Works</h1>
            </div>
            <div className="carousel">
                
                        <div className="left-arrow">
                            <img src="./img/chevron-left-regular-48.png" alt="" />
                        </div>
                        <div className="img">
                            <img src="./img/JILTED-BRIDE.jpg" alt="" />
                        </div>
                        <div className="img">
                            <img src="./img/girlwithglassesart.jpg" alt="" />
                        </div>
                        <div className="img">
                            <img src="./img/valorantstyleart.jpg" alt="" />
                        </div>
                        <div className="img">
                            <img src="./img/cyber.jpg" alt="" />
                        </div>
                        <div className="right-arrow">
                            <img src="./img/chevron-right-regular-48.png" alt="" />
                        </div>
                
            </div>
            <div className="heading2">
                <p>View All Projects</p>
                <img src="./img/arrow-back-regular-48.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Work