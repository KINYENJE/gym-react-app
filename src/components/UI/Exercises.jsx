import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises = () => {
  return (
    <section id='Exercises'>
        <div className="container exercise_container">
            <div className="exercise_top">
                <h2 className="section_title">
                    Benefis of <span className='highlights'>Exercise</span>
                </h2>
                <p>
                    Reducing blood pressure, Burn excess body fat. 
                    Prevent lifestyle disorder diseases. Example: <br />
                     diabetes,obesity,heart diseases,stroke and many more.
                </p>

            </div>

            {/** ====== exercise list ======== */}
            <div className="exercise_wrapper">
                <div className="exercise_item" data-aos = 'zoom-in'>
                    <span className="exercise_icon">
                        <img src={lunges} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>
                            Involves eating healthy food  <br />
                            and doing alot of exercise.
                        </p>
                    </div>
                </div>
                <div className="exercise_item" data-aos = 'zoom-in'>
                    <span className="exercise_icon">
                        <img src={yoga} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Increased Flexibility</h4>
                        <p>
                            Relieves the tension in the muscles and joints hence. <br />
                            enabling you to feel as young and flexible as you are 😉. 
                        </p>
                    </div>
                </div>
                <div className="exercise_item" data-aos = 'zoom-in'>
                    <span className="exercise_icon">
                        <img src={extended} alt="" />
                    </span>

                    <div className="exercise_content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>
                            Burning that excess relieves unnecessary stress from the heart to pump blood. <br />
                            This ensures your blood pressure is at a normal rate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercises