import React from 'react';
import './Introduction.css';
const Introduction = () => {
  return (
    <div> 
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="name-intro">Hello, My name is</h2>
                    <h1 className="name">Ozan Eski</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">React</div>
                            <div className="title-item">React-Native</div>
                            <div className="title-item">JavaScript</div>
                            <div className="title-item">Django</div>
                            <div className="title-item">Python</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-right">Right</div>
        </div>

    </div>
  )
}

export default Introduction