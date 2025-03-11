import '../css/indivPage.css';
import Navbar from '../Navbar';
import Contact from '../Contact';
import { FaGithub } from "react-icons/fa";

function Calendar() {
    return (
        <div>
            <Navbar />
            <div class="indiv_page">
                <div class="indiv_project_name"><h1>Calendar</h1></div>
                <img class="project_media" src={process.env.PUBLIC_URL + "/images/calendar.png"} width="900" height="auto" alt="calendar"></img>
                <div class="indiv_project_body">
                    <div class="project_table">
                        <div class="project_facts first_fact">
                            <div class="project_fact">Year</div>
                            <div class="project_info">2023</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Language/Skills</div>
                            <div class="project_info">HTML, JavaScript, CSS, SQL, AJAX, PHP</div>
                        </div>
                        <div class="project_facts">
                            <div class="project_fact">Links</div>
                            <div class="project_info">
                                <div class="project_links">
                                    <a href="https://github.com/alicemao03/projects/tree/main/Calendar" class="github_button"><FaGithub /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project_description">
                        <p>
                            For this project, my partner and I built a fully functional calendar web application inspired by Google Calendar. The application allows users to add, edit, share, and delete events. Users must register and log in to access their personalized events, while unregistered visitors see no events at all. User accounts and events are stored securely in the database, with server-side scripts ensuring only the currently logged-in user can access or modify their own data. The calendar supports a month-by-month view with navigation to any past or future month, and users can create events with specific dates and times. Each event can be edited or deleted directly from the interface, and changes are instantly reflected on the calendar without refreshing the page.
                        </p>
                        <br></br>
                        <i class="project_note">This project was course work for <a id="cse330_link" href="https://classes.engineering.wustl.edu/cse330/index.php?title=Module_5">CSE 330S: Rapid Prototype and Development</a>.</i>
                        <br></br>
                        <i class="project_note">Shout out <b class="shoutout">Philip Lisun</b> for being the best partner and letting me crash on the couch cause we finished it so late.</i>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
}

export default Calendar;
