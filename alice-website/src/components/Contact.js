import '../css/contact.css';
import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from 'react-icons/io';
import { FaFilePdf } from "react-icons/fa";

const ContactFooter = () => {
    return (
        <footer class="contact">
            <div class="contact-info">
                <a href="mailto:alice.mao818@gmail.com" class="contact-links" aria-label="Email">
                    <IoIosMail size={24} /> alice.mao818@gmail.com
                </a>
                <a href="https://linkedin.com/in/alicehmao" rel="noopener noreferrer" class="contact-links" aria-label="LinkedIn">
                    <IoLogoLinkedin size={24} /> LinkedIn
                </a>
                <a href="https://github.com/alicemao03" rel="noopener noreferrer" class="contact-links" aria-label="GitHub">
                    <IoLogoGithub size={24} /> GitHub
                </a>
                <a href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} class="contact-links" aria-label="Resume">
                    <FaFilePdf size={20} /> Resume
                </a>
            </div>

            <p class="copyright">This website was made by me, Alice Mao!</p>
        </footer>
    );
};



export default ContactFooter;
