import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav class="navbar">
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <RxHamburgerMenu />
            </button>

            <div class="navbar-left">
                <Link class="nav_links" to={{ pathname: "/", hash: "" }}>Alice Mao</Link>
            </div>

            <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
                <button
                    className="close-button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    x
                </button>

                <Link class="nav_links" to={{ pathname: "/", hash: "#about-main" }}>About</Link>
                <Link class="nav_links" to={{ pathname: "/", hash: "#portfolio-section" }}>Works</Link>
                <a class="nav_links" href="https://linkedin.com/in/alicehmao">LinkedIn</a>
                <a class="nav_links" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;