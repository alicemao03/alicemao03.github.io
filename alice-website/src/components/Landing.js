import '../css/landing.css';
import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail} from "react-icons/io";


function Landing() {
    return (
        <div class='landing-page'>
            <div class="name-section">
                <div class="name">Alice Mao</div>
                <div class="subtext">Front-end Developer / UI Designer</div>
                <div class="resume">
                    <a class="button" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Download my resume</a>
                </div>
                <div class="connection-buttons">
                    <a href="mailto:alice.mao818@gamil.com" class="icon-links"><IoIosMail /></a>
                    <a href="https://linkedin.com/in/alicehmao" class="icon-links"><IoLogoLinkedin /></a>
                    <a href="https://github.com/alicemao03/projects/" class="icon-links"><IoLogoGithub /></a>
                </div>
            </div>
            <div class="my-image-section">
                <img class="my-image" src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="pic of me"></img>
            </div>
        </div>
    );
}

export default Landing;
