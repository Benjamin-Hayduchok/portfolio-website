import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img
                src="https://images.pexels.com/photos/8566320/pexels-photo-8566320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                className="a-img"
            />
        </div>
      </div>
      <div className="a-right">
        <p className="a-sub">
            a-sub
        </p>
        <p className="a-desc">
            DESCRIPTION GOES HERE
            I have a passion for problem-solving and Software Engineering. 
            Nothing is more rewarding to me than working tirelessly on a project to see the final product. 
        </p>
      </div>
    </div>
  )
}

export default About
