import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <IoMailOutline />
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <SiInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <TbBrandLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Sosyal Medya</p>
    </div>
  );
};
