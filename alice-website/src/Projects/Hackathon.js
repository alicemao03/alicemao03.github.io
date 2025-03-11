import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaGithub } from "react-icons/fa";

function Hackathon() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Hack WashU 2023</h1></div>
                <img class="project_media" src={process.env.PUBLIC_URL + "/images/campus_heat_map.png"} width="800" height="auto" alt="campus_heat_map"></img>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2023</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">Python, D3.js, Figma</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://github.com/j-g-sivamohan/Hackathon_fl_23" class="github_button"><FaGithub /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            As WashU students, my group wanted to explore how students move through the university's campus. To explore this, we gathered data on all WashU classes, including their locations and enrollment numbers. We also factored in buildings with dining halls and study areas, as those spaces naturally attract more students throughout the day. My role focused on visualizing this data. I began by designing an SVG map of the WashU Danforth Campus in Figma. Using D3.js, I transformed that map into an interactive heat map, which became the project's main interface. Users can select a specific time and day of the week, and the heat map dynamically displays an estimated student presence in each building.
                            <br></br><br></br>
                            <i class="project_note">This project came third in the Masters divisions and won the Fidelity Category for best UI!</i>
                            <br></br>
                            <i class="project_note">Shout out <b class="shoutout">Jeevan Sivamohan</b> and <b class="shoutout">Zach Bertino</b> for enduring the terrible, but rewarding, experience with me.</i>
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Hackathon;
