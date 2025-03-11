import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function SpotifyVis() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Spotify Visualization</h1></div>
                <img class="project_media" src={process.env.PUBLIC_URL + "/images/spotify_compare.png"} width="400" height="auto" alt="spotify"></img>
                <div class="indiv_project_body" id="spotify_vis">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2024</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">D3.js, HTML, CSS, JavaScript</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://github.com/alicemao03/projects/tree/main/Spotify%20Visualization" class="github_button"><FaGithub /></a>
                                    <a href="https://csex57.github.io/SpotifyVisualizationGraphics/" class="github_button"> <FaLink /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            We set out to explore how the music tastes of different countries compare. Operating under the assumption that a country's top songs best reflect its general music preferences, we aimed to determine whether specific song features — like danceability, acousticness, and tempo — were favored by certain nations. To investigate this, we used Spotify's API to gather data on the top 50 global songs, as well as the top 50 weekly and daily songs for every country where data was available. With this dataset, we developed three distinct visualizations designed to help users easily explore and interpret these musical trends.
                            <br></br><br></br>
                            <i class="project_note">This project was course work for CSE 457A: Introduction to Visualization.</i>
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default SpotifyVis;
