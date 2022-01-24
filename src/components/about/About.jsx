import React from 'react'
import "./about.css"
import Award from "../../img/award.png"

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
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            a-sub
        </p>
        <p className="a-desc">
            DESCRIPTION GOES HERE
            I have a passion for problem-solving and Software Engineering. 
            Nothing is more rewarding to me than working tirelessly on a project to see the final product. 
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Award Title</h4>
                <p className="a-award-desc">
                        Award description goes here! It will be about this big.
                        Keep in mind the sizing will change based on text amount.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
