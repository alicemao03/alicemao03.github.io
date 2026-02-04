import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { FaGithub } from "react-icons/fa";
import ProjectPage from '../components/ProjectPage';

function Hackathon() {
    return (
        <>
            <Navbar />
            <ProjectPage
                title="Hack WashU 2023"
                date="November 2023"
                tags={['HTML', 'D3.js', 'Python', 'Figma']}
                media={process.env.PUBLIC_URL + "/images/campus_heat_map.png"}
                links={[{ icon: <FaGithub />, link: 'https://github.com/alicemao03/j-g-sivamohan/Hackathon_fl_23' }]}
                prevPage={"silverstone"}
                prevPageTitle={"Silverstone App"}
                nextPage={"calendar"}
                nextPageTitle={"The Better Calendar"}
            >
                <div class="project-body">
                    <p>
                        As WashU students, my team set out to visualize how students move throughout campus during a typical day. We gathered detailed data on all university classes—including locations and enrollment numbers—and incorporated high-traffic areas like dining halls and study spaces, which naturally attract students throughout the day. We also took into consideration that students do skip class sometimes...</p>
                    <p>
                        My role centered on designing and building the interactive visualization. I began by creating a custom SVG map of WashU's Danforth Campus in Figma, organizing it into three layers: general campus greenery, non-academic buildings, and academic buildings where classes are held. I then brought the map to life using D3.js, transforming it into a dynamic heat map interface. Users can select a specific time and day of the week to view estimated student presence across campus buildings, offering a real-time sense of campus flow.</p>
                    <br></br>
                    <i class="project_note">This project came third in the Masters divisions and won the <b>Fidelity Category for best UI!</b></i>
                    <br></br>
                    <i class="project_note">Shout out <b class="shoutout">Jeevan Sivamohan</b> and <b class="shoutout">Zach Bertino</b> for enduring the terrible, but rewarding, experience with me.</i>
                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default Hackathon;
