import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaLink } from "react-icons/fa6";

function Silverstone() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Silverstone App</h1></div>
                <iframe title="silverstone_fimga" width="800" height="450" src="https://embed.figma.com/proto/yWQoodx84IKJaN2jHulW6V/Alice's-Workspace?page-id=500%3A3107&node-id=968-1771&p=f&viewport=-1059%2C-1936%2C0.18&scaling=scale-down&content-scaling=fixed&starting-point-node-id=968%3A1771&show-proto-sidebar=1&embed-host=share" allowfullscreen></iframe>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2023</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">Figma</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://www.figma.com/proto/yWQoodx84IKJaN2jHulW6V/Alice's-Workspace?content-scaling=fixed&kind=proto&node-id=968-1771&page-id=500%3A3107&scaling=scale-down&starting-point-node-id=968%3A1771" class="github_button"><FaLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            As an avid F1 fan, I designed this prototype as a reimagining of the official F1 app, specifically tailored for fans attending a live race. The goal was to enhance the race-day experience by providing both essential event information and engaging content all in one platform. Through the app, racegoers can learn more about the track, including its history, iconic moments, and unique features, giving them a deeper appreciation of the venue.
                            <br></br><br></br>
                            In addition to exploring track details, the app offers practical tools for racegoers, like easy access to their digital tickets and event schedules. The design focuses on combining convenience and immersion, ensuring fans can navigate the race weekend effortlessly while staying connected to the sport they love. This prototype reflects my passion for F1 and my interest in creating user-centered digital experiences.
                        </p>
                        <br></br>
                        <i class="project_note">This project was course work for ART 137T: Visual Principles for the Screen.</i>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Silverstone;
