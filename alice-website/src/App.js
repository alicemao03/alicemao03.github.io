import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Calendar from './projects-pages/Calendar';
import SVTViz from './projects-pages/SVTViz';
import Hackathon from './projects-pages/Hackathon';
import LapCounter from './projects-pages/LapCounter';
import Sail from './projects-pages/Sail';
import Silverstone from './projects-pages/Silverstone';
import ScrollToTop from './components/ScrollToTop';
import PSAs from './projects-pages/PSAs';
import NycTrip from './projects-pages/NewYork';


function App() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects-pages/calendar" element={<Calendar />} />
        <Route path="/projects-pages/svt_vis" element={<SVTViz/>} />
        <Route path="/projects-pages/hackathon" element={<Hackathon />} />
        <Route path="/projects-pages/lap_counter" element={<LapCounter />} />
        <Route path="/projects-pages/sail" element={<Sail />} />
        <Route path="/projects-pages/silverstone" element={<Silverstone />} />
        <Route path='/projects-pages/PSAs' element={<PSAs />} />
        {/* <Route path='/projects-pages/NYC' element={<NycTrip />} /> */}
      </Routes>
    </>
  );
}

export default App;

