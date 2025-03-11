import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';

function SpotifyVis() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Spotify Visualization</h1></div>
                <img class="project_media" src={process.env.PUBLIC_URL + "/images/Spotify.png"} width="800" height="auto" alt="spotify"></img>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2024</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Type</div>
                            <div class="project_info">Group Project</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">Python</div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default SpotifyVis;
