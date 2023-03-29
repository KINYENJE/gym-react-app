import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
    <section id='Classes'>
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img" data-aos = 'fade-left' data-aos-duration = '1500'>
                    <img src={trainerImg} alt="" />
                </div>

                <div className="start_content" data-aos = 'fade-right'
                data-aos-duration = '1500'>
                    <h2 className="section_title">

                    'Feel the Burn, Fill the <span className="highlights">BAM!</span>'
                    </h2>
                    <p>
                        Our focus is geared to ensuring that more women exercise in an environment where the feel comfortable to do so. <br />
                        <br />
                        A daily reminder, Sweat. Smile. Repeat.
                    </p>

                    <a href="https://www.youtube.com/@getfitbyivana"><button className="register_btn">Get Started</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start