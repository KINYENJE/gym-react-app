import React from 'react'
import mzungu from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'

import '../../styles/hero.css'


const Hero = () => {
  return (
    <section>
        <div className="container">
            <div className="hero_wrapper">

                {/** ======hero content ======== */}
                <div className="hero_content">
                    <h2 className='section_title'>Exercise is the key to a <br />
                        <span className="highlights"> Healthy</span> lifestyle</h2>

                    <p>
                        Lorem ipsum dollar sit amet consectetur, adipisicing elit. <br />
                        Laboriosm repellendus odit fugit eos! Id, labore.
                    </p>

                    <div className="hero_btns">
                        <button className="register_btn">Get Started</button>
                        <button className="watch_btn">
                            <span><i class="ri-play-fill"></i></span>
                            Watch Video
                        </button>
                    </div>

                </div>
                {/** =hero img ========= */}
                <div className="hero_img">
                    <div className="hero_img-wrapper">

                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box_img">
                                        <img src={mzungu} alt=""  />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart_rate">
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h6>2567 BPM</h6>
                        </div>

                        <div className="gym_location">
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>Find a new <br/> gym near you</h5>
                        </div>

                        <div className="dumble_icon">
                            <img src={dumbleIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero