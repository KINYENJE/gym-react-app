import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return (
    <section>
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainerImg} alt="" />
                </div>

                <div className="start_content">
                    <h2 className="section_title">

                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>
                        Lorem ipsum dollar sit amet consectetur, adipisicing elit.
                        Laboriosm repellendus odit fugit eos! Id, labore.
                    </p>

                    <button className="register_btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start