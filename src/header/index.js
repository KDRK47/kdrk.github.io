import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils, logoimage_url } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
	
  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
    <Link  className="navbar-brand nav_ac" to="/">
               <img src="https://raw.githubusercontent.com/KDRK47/kdrk47.github.io/master/src/assets/images/kdrklogo.png" /> { logotext }
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac1" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Anasayfa</Link>
                  </li>
	          <li className="menu_item">
                  <Link onClick={handleToggle} to="/galeri" className="my-3"> Galeri</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/iletisim" className="my-3"> İletişim</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">E-Posta</a>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
            <p className="copyright m-0">© Copyright 2024 {logotext} - Tüm hakları saklıdır.</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
