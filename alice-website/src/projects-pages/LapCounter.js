import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { FaGithub } from "react-icons/fa";
import ProjectPage from '../components/ProjectPage';

function LapCounter() {
    return (
        <>
            <Navbar />
            <ProjectPage
                title="Swimming Lap Counter"
                date="August 2024 - December 2024"
                tags={['Course work', 'Python', 'OpenCV']}
                media={{ type: 'video', src: "/images/lap_counter.mov", loop: false, auto: false }}
                links={[{ icon: <FaGithub />, link: "https://github.com/amao03/lap-counter" }]}
                prevPage={"sail"}
                prevPageTitle={"Sensory and Ambient Interface Lab"}
                nextPage={"silverstone"}
                nextPageTitle={"Silverstone App"}
            >
                <div class="project-body">
                    <p>
                        Wearable devices excel at tracking steps and running distances but fall short when it comes to counting swimming laps. This issue was highlighted by Dante Cannarozzi, an adjunct instructor at WashU. To address this, my partner, Isabel Boufarah, and I developed a prototype using the OpenCV Python library to track swimmers and detect when they completed a lap, using a colored cap for identification. We began by processing recorded videos and eventually advanced to tracking swimmers in live-stream footage. To enhance accessibility, we built a user-friendly GUI for easier interaction.
                        <br></br><br></br>
                        <i class="project_note">This project was course work for CSE 454A: Software Engineering for External Client.</i>
                    </p>
                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default LapCounter;
