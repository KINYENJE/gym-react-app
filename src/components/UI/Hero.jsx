import React from 'react'
import mzungu from '../../assets/img/gym-02.png'
import dumbleIcon from '../../assets/img/dumble.png'

import '../../styles/hero.css'


const Hero = () => {
  return (
    <section id='Home'>
        <div className="container">
            <div className="hero_wrapper">

                {/** ======hero content ======== */}
                <div className="hero_content">
                    <h2 className='section_title' 
                    /** ===== the data aos animation ========= */ 
                        data-aos= 'fade-up' 
                        data-aos-duration = '1500' >
                        Exercise is the key to a <br />
                        <span className="highlights"> Healthy</span> lifestyle</h2>

                    <p  data-aos= 'fade-left'
                        data-aos-delay = '200' 
                        data-aos-duration = '1200'>
                        At Njenga Gym we are committed at ensuring that all our clients live a healthy happy lifestyle. <br />
                        We firmly believe that, <span className="highlights">Better Sore Than Sorry</span>.
                    </p>

                    <div className="hero_btns"  
                        data-aos= 'fade-right'
                        data-aos-delay = '1000' 
                        data-aos-duration = '800'>
                       <a href="https://www.youtube.com/watch?v=f4ploouAfWI&list=PLyP8pbBMxcsgLVKBNr5cjXyazQ_Rc6vTV">
                       <button className="register_btn">Get Started</button>
                       </a>
                       <a href="https://www.youtube.com/watch?v=UqFzWx8X5AM">
                       <button className="watch_btn">
                            <span><i class="ri-play-fill"></i></span>
                            Watch Video
                        </button>
                       </a>
                    </div>

                </div>
                {/** =hero img ========= */}
                <div className="hero_img">
                    <div className="hero_img-wrapper">

                        <div className="box-01" data-aos= 'flip-up' data-aos-duration = '1500'>

                            <div className="box-02" data-aos= 'flip-up' 
                                data-aos-delay = '800' data-aos-duration = '1500'>

                                <div className="box-03" data-aos= 'flip-up'
                                    data-aos-delay = '1200' data-aos-duration = '1500'>
                                    <div className="box_img"  data-aos= 'zoom-in'
                                    data-aos-delay = '1600' data-aos-duration = '1500'>
                                        <img src={mzungu} alt=""  />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart_rate" 
                            data-aos="zoom-in-right" data-aos-duration = '1500'>
                            <h5>Heart Rate</h5>
                            <span><i class="ri-heart-pulse-fill"></i></span>
                            <h6>2567 BPM</h6>
                        </div>

                        <div className="gym_location" data-aos="zoom-in-left" data-aos-duration = '1500'>
                            <span><i class="ri-map-pin-2-fill"></i></span>
                            <h5>Find a new <br/> gym near you</h5>
                        </div>

                        <div className="dumble_icon" data-aos="fade-down-right" data-aos-duration = '1500'>
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