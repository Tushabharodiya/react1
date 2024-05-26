import React from 'react'

let About = ({img,title}) => {
    return (
        <>
            <div className="about-data position-relative">
                <div className="about-img">
                    <img src={img} alt="jewelry image" />
                </div>
                <div className="about-info position-absolute">
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default About
