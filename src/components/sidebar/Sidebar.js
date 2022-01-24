import React from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
// import { FiExternalLink } from "react-icons/fi";
import logo from "../images/SK.jpg";
import { BrowserRouter } from "react-router-dom";
// import { IconName } from "react-icons/fa";
// import { FaBeer } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Sidebar() {
  return (
    <BrowserRouter>
      <div>
        <div className="sidebar">
          <img src={logo} alt="no img" />
          <h1>
            <Link smooth to="/#start" className="h1_links">
              Satheeshkumar{" "}
            </Link>
          </h1>
          <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
            {" "}
            satheeshkumara@hotmail.com{" "}
          </p>
          <ul className="sidebar-nav">
            <li className="sidebar-nav-items">
              <Link smooth to="/#about" className="links">
                About
              </Link>
            </li>
            <li className="sidebar-nav-items">
              <Link smooth to="/#skills" className="links">
                Skills
              </Link>
            </li>
            <li className="sidebar-nav-items">
              <Link smooth to="/#projects" className="links">
                Projects
              </Link>
            </li>
            <li className="sidebar-nav-items">
              <Link smooth to="/#journey" className="links">
                Journey
              </Link>
            </li>

            {/* <li className="sidebar-nav-items">
            <a
              href="http://www.bloggingpeek.com"
              target="_blank"
              rel="opener noreferrer"
              className="links"
            >
              {" "}
              Blog
              <FiExternalLink />
            </a>
          </li> */}
          </ul>

          <div className="flip-card-back">
            <ul className="sidebar-nav">
              <li className="sidebar-nav-icons">
                <a
                  href="https://www.linkedin.com/in/a-satheesh-kumar-4b92a2b4/"
                  rel="opener noreferrer"
                  target="_blank"
                  class="fa fas fa-linkedin fa-lg"
                >
                  Linkedin
                  <FaLinkedin />
                </a>
              </li>
              <li className="sidebar-nav-icons">
                {" "}
                <a
                  href="https://github.com/satheeshkumar-a"
                  rel="opener noreferrer"
                  target="_blank"
                  class="fa fas fa-github fa-lg"
                >
                  GitHub
                  <FaGithub />
                </a>
              </li>
              <li className="sidebar-nav-icons">
                {" "}
                <a
                  href="mailto:satheeshkumara@hotmail.com"
                  rel="opener noreferrer"
                  target="_blank"
                  class="fa fas fa-envelope fa-lg"
                >
                  Email
                  <GrMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Sidebar;
