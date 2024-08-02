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
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook} target="_blank" rel="noopener noreferrer">
              <CiMail />
            </a>
          </li>
        )}
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
              <CiInstagram />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Sosyal Medya</p>
    </div>
  );
};
