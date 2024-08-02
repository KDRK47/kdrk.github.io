import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
document.onkeydown = function(ea) {
        if (ea.ctrlKey && 
            (ea.keyCode === 67 || 
             ea.keyCode === 86 || 
             ea.keyCode === 85 || 
             ea.keyCode === 117)) {
				 alert('Bu websitesi ve içeriği korunmaktadır.\nBu yüzden kaynak kodunu görüntüleyemezsiniz.');
            return false;
        } else {
            return true;
        }
};
	$(document).keypress("u",function(ea) {
	if(ea.ctrlKey)
	{
	return false;
	}
	else
	{
	return true;
	}
});

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
    <Link  className="navbar-brand nav_ac" to="/">
               <img src="https://i.hizliresim.com/7aadtaa.png" />
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
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
                  <Link onClick={handleToggle} to="/contact" className="my-3"> İletişim</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.instagram}>Instagram</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">Copyright 2024 {logotext} - Tüm hakları saklıdır.</p>
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
