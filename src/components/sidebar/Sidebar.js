import React from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';
import logo from '../images/SK.jpg';
import { BrowserRouter } from 'react-router-dom';
import { IconName } from "react-icons/fa";


function Sidebar() {
    return (
    <BrowserRouter>
        <div className="sidebar">
                <img src={logo} alt="no img"/>
                <h1><Link smooth to="/#start" className="h1_links">Satheeshkumar </Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> satheeshkumara@hotmail.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    {/* <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in//" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com//" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:satheeshkumara@hotmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                    </ul> */}
                </div>
              
            </div>
    </BrowserRouter>
    )
}

export default Sidebar