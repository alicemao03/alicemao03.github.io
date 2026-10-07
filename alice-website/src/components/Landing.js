import '../css/landing.css';
import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoIosMail } from "react-icons/io";
// import { TbFileCvFilled } from "react-icons/tb";
import { TbFileCv } from "react-icons/tb";

function Landing() {
    return (
        <div class='landing-page'>
            <div class="name-section">
                <div class="name">Alice Mao</div>
                <div class="subtext">PhD Student in Informatics @ University of California, Irvine</div>

                <div class="section-body">
                    <p>
                        Hi! I'm a PhD student in Informatics at the University of California, Irvine, advised by <a href="https://depstein.net/" className='highlight'> Dr. Daniel Epstein</a> in the <a href="https://depstein.net/pielab" className='highlight'>PIE Lab</a>. My research interests lie at the intersection of human-computer interaction, data visualization, and personal informatics.
                    </p>
                    <p>
                        Before joining UCI, I earned my B.S. and M.S. in Computer Science at Washington University in St. Louis (WashU). During my master's, I worked with <a href="https://engineering.washu.edu/faculty/Alvitta-Ottley.html" className='highlight'>Dr. Alvitta Ottley</a> to investigate how data visualization design choices influence responses to public service announcements. As an undergraduate, I worked on haptic wearables for sports applications in the <a href='https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab' className='highlight'>SAIL Lab</a>, led by <a href='https://samfoxschool.washu.edu/people/faculty/42-jonathan-hanahan' className='highlight'>Jonathan Hanahan</a>.
                    </p>
                </div>

                {/* <div class="resume">
                    <a class="button" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Download my resume</a>
                </div> */}
                <div class="connection-buttons">
                    <a class="link-box" href={process.env.PUBLIC_URL + "/images/alice_mao_cv.pdf"}>
                        <div class="icon-links"><TbFileCv /></div>
                        <span className='highlight'>CV</span>
                    </a>
                    <a class="link-box" href="mailto:ahmao@uci.edu">
                        <div class="icon-links"><IoIosMail /></div>
                        <span className='highlight'>ahmao@uci.edu</span>
                    </a>
                    <a class="link-box" href="https://linkedin.com/in/alicehmao">
                        <div class="icon-links"><IoLogoLinkedin /></div>
                        <span className='highlight'>LinkedIn</span>
                    </a>
                    {/* <a href="mailto:ahmao@uci.edu" class="icon-links"><IoIosMail /> <span className='highlight normal'>ahmao@uci.edu</span></a> */}
                    {/* <a href="https://linkedin.com/in/alicehmao" class="icon-links"><IoLogoLinkedin /> <span className='highlight'>https://linkedin.com/in/alicehmao</span></a>
                    <a href="https://github.com/alicemao03/projects/" class="icon-links"><IoLogoGithub /> </a> */}
                </div>
            </div>
            <div class="my-image-section">
                <img class="my-image" src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="pic of me"></img>
            </div>
        </div>
    );
}

export default Landing;
