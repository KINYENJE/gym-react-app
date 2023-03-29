import React from 'react'
import '../../styles/pricing.css'

const Pricing = () => {
  return (
    <section id='Prices'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title"> Gym
                <span className="highlights"> Pricing</span> Plan
                </h2>
                <p>
                For a more tailored experience , become a member of the Njenga Community. <br />
                Try us you won't regret.
                </p>
            </div>

            {/** ======== pricing wrapper ===== */}

            <div className="pricing_wrapper" data-aos = 'fade-up'
              data-aos-delay = '500' data-aos-duration = '2000'>
                <div className="pricing_item">
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Regular Member</h2>
                        <h2 className="pricing section_title">$50 
                        <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Customer support</li>
                            <li><span><i class="ri-close-circle-line"></i></span>
                            No Personal trainer</li>
                            <li><span><i class="ri-close-circle-line"></i></span>
                            No Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            1 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>


                <div className="pricing_item pricing_item-03">
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Standard Member</h2>
                        <h2 className="pricing section_title">$70 
                        <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Customer support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Personal trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            3 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>
                

                <div className="pricing_item pricing_item-02">
                    <div className="pricing_card-top">
                        <h2 className='section_title'>Premium Member</h2>
                        <h2 className="pricing section_title">$100 
                        <span>/month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Unlimited access to the gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Free Cardio Checkup</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Personal trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            Premium options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>
                            5 classes per week</li>
                        </ul>

                        <button className='register_btn'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing