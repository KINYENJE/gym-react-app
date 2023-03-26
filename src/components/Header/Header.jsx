import React from 'react'
import "../../styles/Header.css"
import logo from '../../assets/img/dumble.png'


const nav_links = [
  {
    path: '#',
    display: 'Home'
  },
  {
    path: '#',
    display: 'Schedule'
  },
  {
    path: '#',
    display: 'Classes'
  },
  {
    path: '#',
    display: 'Pricing'
  },
]

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="nav_wrapper">
          {/* =======LOGO========= */}
          <div className="logo">
            <div className="logo_img">
              <img src= {logo} alt="" />
            </div>
            <h2>FitBody</h2>
          </div>

          {/** ==========navigation menu ============= */}

            <div className="navigation">
              <ul className="menu">
                  {
                    nav_links.map(item => 
                      <li className="nav_item"><a href={item.path}>
                        {item.display}</a></li>
                    )
                  }
              </ul>
            </div>

            {/** ========nav right =============== */}
            <div className="nav_right">
              <button className='register_btn'>Register</button>
              <span className="mobile_menu">
              <i class="ri-menu-line"></i>
              </span>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header