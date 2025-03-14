import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaGithub } from "react-icons/fa";

function LapCounter() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Swimming Lap Counter</h1></div>
                <video class="project_media" controls="controls" width="800" height="auto" name="lap_counter">
                    <source src={process.env.PUBLIC_URL + "/images/lap_counter.mov"} />
                </video>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2024</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">Python</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://github.com/amao03/lap-counter" class="github_button"><FaGithub /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            Wearable devices excel at tracking steps and running distances but fall short when it comes to counting swimming laps. This issue was highlighted by Dante Cannarozzi, an adjunct instructor at WashU. To address this, my partner, Isabel Boufarah, and I developed a prototype using the OpenCV Python library to track swimmers and detect when they completed a lap, using a colored cap for identification. We began by processing recorded videos and eventually advanced to tracking swimmers in live-stream footage. To enhance accessibility, we built a user-friendly GUI for easier interaction.
                            <br></br><br></br>
                            <i class="project_note">This project was course work for CSE 454A: Software Engineering for External Client.</i>
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default LapCounter;
