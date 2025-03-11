// import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import LapCounter from "./Projects/LapCounter";
import SpotifyVis from "./Projects/SpotifyVis";
import ScrollToTop from "./Scroll";
import Hackathon from "./Projects/Hackathon";
import SAIL from "./Projects/Sail";
import Calendar from "./Projects/Calendar";
import Silverstone from "./Projects/Silverstone";

function App() {
    return (
        <>
            <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/projects/lap_counter" element={<LapCounter />} />
                    <Route path="/projects/spotify_vis" element={<SpotifyVis />} />
                    <Route path="/projects/hackathon" element={<Hackathon />} />
                    <Route path="/projects/sail" element={<SAIL />} />
                    <Route path="/projects/calendar" element={<Calendar />} />
                    <Route path="/projects/silverstone" element={<Silverstone />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
