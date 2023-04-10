import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import {Component} from 'react'

import './index.css'

const Header = () => {
  let icon =  <GiHamburgerMenu />
  return (
    <div className="header-container">
      <img
        className="web-logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
             {icon}
            </button>
            {icon = <IoMdClose/>}
          }
        >
          <>
            <div>
              <p>React is a popular and widely used programming language</p>
            </div>
          </>
        </Popup>
      </div>
    </div>
  )
}

export default Header
