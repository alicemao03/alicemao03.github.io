import React from 'react';
import './css/Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>Alice Mao</h1>
            </div>
            <div className="navbar-right">
                <Link to="/#project_main" class="nav_links">Projects</Link>
                <h3>|</h3>
                <a class="nav_links" href="https://linkedin.com/in/alicehmao">LinkedIn</a>
                <h3>|</h3>
                <a class="nav_links" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;