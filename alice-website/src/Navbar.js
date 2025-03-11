import React from 'react';
import './css/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/home" class="name"><h1>Alice Mao</h1></Link>
            </div>
            <div className="navbar-right">
                <Link to="/projects" class="nav_links">Projects</Link>
                <h3>|</h3>
                <a class="nav_links" href="https://linkedin.com/in/alicehmao">LinkedIn</a>
                <h3>|</h3>
                <a class="nav_links" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;