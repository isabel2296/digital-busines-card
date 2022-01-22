import React from "react"

function BodyIntroButtons(){
    return(
        <div className="main-body-buttons">
            
             <a href="mailto: isabel_silva@csu.fullerton.edu? subject= Feedback&body = Message">
             <button type="button"  className="main-body-intro-email-button">
             </button></a>
             <a href="https://www.linkedin.com/in/isabel-silva-5915541aa/" >
             <button type="button" className="main-body-intro-linkedln-button" >
                </button>
             </a>
           
        </div>
    )
}
function BodyIntro(){
    return(
        <div className="main-body-intro">
            <h4>Isabel Silva</h4>
            <h5>Software Engineer Student</h5>
            <a href="https://isabel2296.github.io/">isabel2296.github.io</a>
        </div>
    )
}
function AboutSkillsInfo(){
    return(
    <div className="main-about-skills">
        <h4>About</h4>
        <p>I am a software engineering Master's student with a particular 
            interest in web-design (back-end, front-end). I try to keep up with the latest
            programming languages and best practices, and I am always looking for new things to learn.
        </p>
        <h4>Skills</h4>
        <ul>
            <li>Python, C++, Javascript</li>
            <li>React JS (HTML, CSS)</li>
            <li>SQL Databases</li>
        </ul>
    </div>)
}


export default function Main(){
    return(
        <main className="main-body">
           <BodyIntro/>
           <BodyIntroButtons/>
           <AboutSkillsInfo/>
        </main>
    )
}