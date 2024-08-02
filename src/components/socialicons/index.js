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
import { IoIosMail } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <IoIosMail />
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
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Sosyal Medya</p>
    </div>
  );
};
