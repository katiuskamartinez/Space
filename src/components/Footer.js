import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://github.com/katiuskamartinez"
        target="blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="github" />
      </a>
      <a href="https://www.lanasa.net/" target="blank" rel="noopener">
        <FontAwesomeIcon icon={faRocket} size="2x" className="rocket" />
      </a>
    </div>
  );
};

export default Footer;
