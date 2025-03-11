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

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/lap_counter" element={<LapCounter />} />
                    <Route path="/spotify_vis" element={<SpotifyVis />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
