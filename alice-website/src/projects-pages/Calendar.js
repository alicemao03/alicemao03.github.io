import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { FaGithub } from "react-icons/fa";
import ProjectPage from '../components/ProjectPage';

function Calendar() {
    return (
        <>
            <Navbar />
            <ProjectPage
                title="The Better Calendar"
                date="Spring 2023"
                tags={['Course work', 'HTML', 'JavaScript', 'SQL', 'PHP', 'CSS', 'Ajax']}
                media={process.env.PUBLIC_URL + "/images/calendar.png"}
                links={[{ icon: <FaGithub />, link: 'https://github.com/alicemao03/projects/tree/main/Calendar' }]}
                prevPage={"hackathon"}
                prevPageTitle={"Hack WashU 2023"}
                nextPage={"PSAs"}
                nextPageTitle={"Precision, Simplicity, Appeal"}
            >
                <div class="project-body">
                    <p>
                        For this project, my partner and I developed a fully functional, secure calendar web application inspired by Google Calendar. Built using JavaScript, PHP, MySQL, and AJAX, the app supports user registration and login, with password confirmation required during signup. Only authenticated users can view or manage events; unregistered visitors see a blank calendar. Once logged in, users can view, create, edit, and delete events with a title, time, and description, and changes are reflected instantly without page reloads. Each event can also be shared with other users by entering their username. Days with events are marked by an asterisk (*), previous-month days are highlighted in light green, and the current day in dark green. All user data is safeguarded using session-based access, CSRF tokens, SQL injection prevention, and secure password hashing.
                    </p>
                    <br></br>
                    <i class="project_note">This project was course work for <a id="cse330_link" href="https://classes.engineering.wustl.edu/cse330/index.php?title=Module_5">CSE 330S: Rapid Prototype and Development</a> at Washington University in St. Louis.</i>
                    <br></br>
                    <i class="project_note">Shout out <b class="shoutout">Philip Lisun</b> for being the best partner and letting me crash on the couch cause we finished it at 5am.</i>
                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default Calendar;
