import React from 'react'
import './About.css'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
         <div className='main'>
        <div className='main-text' data-aos="fade-down"
                 data-aos-easing="linear"
                  data-aos-duration="1500">
            <h1><span className='color'>Welcome</span> To My About Page.</h1>
        </div>
            <div className='main-text1' data-aos = "data-aos="fade-up
     data-aos-duration="3000">
            <h2>My first web using react.</h2>
            
                <div className='abc'>
                <h2>This is my About page.</h2>
                </div>
            </div>    
    
    </div>
    </>
  )
}

export default About