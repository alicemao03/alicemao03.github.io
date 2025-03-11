import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaLink } from "react-icons/fa6";

function SAIL() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>SAIL</h1></div>
                <video loop autoPlay muted class="project_media" controls="controls" width="600" height="auto" name="sail_demo">
                    <source src={process.env.PUBLIC_URL + "/images/sail_demo.mov"} />
                </video>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2023 - Present </div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">Swift, XCode, Mobile App Development</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab" class="github_button"> <FaLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            SAIL's mission is to design and develop non-visual interfaces, emphasizing alternative senses and active sensory strategies. Our current focus is on using wearable haptics as a communication tool in the sport of rowing.
                            <br></br><br></br>
                            As a research assistant in the SAIL lab, my work centers on building a mobile iOS app alongside a companion WatchOS app to support our research. The mobile app connects to a rowing erg via Bluetooth, processes incoming data, and translates it into distinct haptic patterns. These patterns are sent to the watch, where they play continuously until a new pattern is received or the session ends. The haptic patterns are each distint vibration patterns that indicate whether a rower is working above, below, or at their neccessary threshold.
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default SAIL;
