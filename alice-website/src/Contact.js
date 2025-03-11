import './css/contact.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


function Contact() {
    return (
        <div id="contact_bigbox">
            <div id="contact_main">
                <div class="box">
                    <h1 class="Contact_title">Contact</h1>
                </div>
                <div class="box">
                    <div class="contact">
                        <h3 class="contact_type">Email</h3>
                        <p class="contact_info"><MdOutlineEmail /> <a href="mailto:alice.mao818@gamil.com">alice.mao818@gamil.com</a></p>
                    </div>
                    <div class="contact">
                        <h3 class="contact_type">LinkedIn</h3>
                        <p class="contact_info"><FaLinkedin /> <a href="https://linkedin.com/in/alicehmao">Connect with me</a></p>
                    </div>
                    <div class="contact">
                        <h3 class="contact_type">Github</h3>
                        <p class="contact_info" id="last_contact"><FaGithub /> <a href="https://github.com/alicemao03/projects/">My projects</a></p>
                    </div>
                </div>

            </div>
            <p class="copyright">This website was made by me, Alice Mao!</p>
        </div>
    );
}

export default Contact;
