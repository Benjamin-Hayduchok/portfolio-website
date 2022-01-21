import React from 'react'
import "./intro.css"
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Benjamin Hayduchok</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Full-Stack Developer</div>
                        <div className="i-title-item">Problem Solver</div>
                        <div className="i-title-item">People Person</div>
                        <div className="i-title-item">Mentor</div>
                    </div>
                </div>
                <div className="i-desc">
                    DESCRIPTION GOES HERE
                    I have a passion for problem-solving and Software Engineering. 
                    Nothing is more rewarding to me than working tirelessly on a project to see the final product. 
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div> 
    </div>
  )
}

export default Intro
