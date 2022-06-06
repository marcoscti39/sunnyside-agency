import './Header.css';
import logo from '../assets/imgs/icons/logo.svg'

import arrowDown from "../assets/imgs/icons/icon-arrow-down.svg"

const showMenu = (e) =>{
  const menuMobile = document.querySelector(".header-top-wrapper")
  const body = document.querySelector("body")
  menuMobile.classList.toggle("show")
  body.classList.toggle("body-no-scroll")
  
}

function Header() {
  return (
    <header className="sunnyside-header">
      <div className="header-wrapper">
       
        <img className="header-logo" src={logo} alt="" />

        <div className="menu-btn"> 
          <i onClick={showMenu} className="fa-solid fa-bars"></i>
        </div>

        <div className="header-top-wrapper">
          <nav className="sunnyside-navigation">
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">services</a>
              </li>
              <li>
                <a href="#">projects</a>
              </li>
              <li>
                <a href="#" className="contact-btn" >contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="header-apresentation">
          <h1 className="title">we are creatives</h1>
          <img className="header-arrow" src={arrowDown} alt="arrow down" />
        </section>

      </div>
    </header>
  
  );
}

export default Header;
