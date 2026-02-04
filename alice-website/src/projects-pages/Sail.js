import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { FaLink } from "react-icons/fa6";
import ProjectPage from '../components/ProjectPage';

function SAIL() {
    return (
        <>
            <Navbar />
            <ProjectPage
                title="Sensory and Ambient Interface Lab"
                date="August 2023 - May 2025"
                tags={['Research', 'Swift', 'XCode']}
                media={{ type: 'video', src: "/images/sail_demo.mov", loop: true, auto: true }}
                links={[{ icon: <FaLink />, link: "https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab" }]}
                prevPage={"svt_vis"}
                prevPageTitle={"SEVENTEEN in Color"}
                nextPage={"lap_counter"}
                nextPageTitle={"Swimming Lap Counter"}
            >
                <div class="project-body">
                    <p>
                        Sensory and Ambient Interface Lab's (SAIL) mission is to design and develop non-visual interfaces, emphasizing alternative senses and active sensory strategies. Our current focus is on using wearable haptics as a communication tool in the sport of rowing.
                    </p>
                    <p>
                        As a research assistant in the SAIL lab, my work centers on building a mobile iOS app alongside a companion WatchOS app to support our research. The mobile app connects to a rowing erg via Bluetooth, processes incoming data, and translates it into distinct haptic patterns. These patterns are sent to the watch, where they play continuously until a new pattern is received or the session ends. The haptic patterns are each distinct vibration patterns that indicate whether a rower is working above, below, or at their necessary threshold.
                    </p>
                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default SAIL;
