import React from 'react'
import './Home.css'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <div className='main'>
        <div className='main-text' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1><span className='color'>Welcome</span> To My Home Web.</h1>
        </div>
            <div className='main-text1' data-aos = "data-aos="fade-up
     data-aos-duration="3000">
            <h2>My first web using react.</h2>
            
                <div className='abc'>
                <h2>This is my home page.</h2>
                </div>
            </div>    
    
    <div className='button'>
                    <ul className='button-1'>
                        <Link to='/about'>
                            <div className='col' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                            <h2> .____________Get Started____.</h2>
                            </div>
                        </Link>
                    </ul>
    </div>
    </div>
    </>
  )
}

export default Home