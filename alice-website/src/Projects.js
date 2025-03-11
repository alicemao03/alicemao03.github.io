import React, { useState } from 'react';
import './css/projects.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Contact from './Contact';



const projects = [
  { name: 'Swimming Lap Counter', page: 'lap_counter', image: 'lap_counter.png', blurb: "Wearable devices track running well but often struggle with counting swimming laps. To solve this, my partner, Isabel Boufarah, and I used the OpenCV Python library to track swimmers and detect laps using a colored cap for identification. We began with recorded videos, later advancing to live-stream tracking with a user-friendly GUI.", tags: ['Python'], links: [{ icon: <FaGithub />, link: 'https://github.com/amao03/lap-counter' }] },

  { name: 'Hack WashU 2023', page: 'hackathon', image: 'hackathon.png', blurb: 'My group wanted to explore how students move through WashU’s campus by gathering data on class locations, enrollment numbers, and high-traffic buildings like dining halls and study areas. Using D3.js, I turned an SVG map of the WashU Danforth Campus into an interactive heat map that shows estimated student presence in each building based on the selected time and day.', tags: ['HTML', 'D3.js', 'Python', 'Figma'], links: [{ icon: <FaGithub />, link: 'https://github.com/j-g-sivamohan/Hackathon_fl_23' }] },

  { name: 'SAIL', page: 'sail', image: 'iconV3.png', blurb: 'As a research assistant in the SAIL lab, I\'m developing an iOS and WatchOS app that connects to a rowing erg via Bluetooth, processes data, and sends distinct haptic patterns to the watch. The watch then plays these haptics. These vibrations indicate whether a rower is working above, below, or at their necessary threshold.', tags: ['Swift', 'XCode'], links: [{ icon: <FaLink />, link: 'https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab' }] },

  { name: 'Spotify Visualization', page: 'spotify_vis', tags: ['D3.js', 'JavaScript', 'HTML', 'CSS'], image: 'Spotify.png', links: [{ icon: <FaGithub />, link: 'https://github.com/alicemao03/projects/tree/main/Spotify%20Visualization' }, { icon: <FaLink />, link: 'https://csex57.github.io/SpotifyVisualizationGraphics/' }], blurb: "This interface allows us to visualize the top songs across various countries worldwide, providing an insightful comparison of music preferences between two nations. It helps reveal the musical tastes unique to each country and offers a deeper understanding of whether significant differences in music preferences exist globally." },

  { name: 'Calendar', page: 'calendar', tags: ['HTML', 'JavaScript', 'SQL', 'PHP', 'CSS'], image: 'calendar.png', blurb: "This project from CSE 330: Rapid Prototype and Development involved creating a calendar app where users can add, edit, and delete events using JavaScript, PHP, and AJAX. Users must register and log in to access their events, while unregistered visitors see no events. Data is securely stored in a MySQL database with session-based authentication to ensure privacy.", links: [{ icon: <FaGithub />, link: "https://github.com/alicemao03/projects/tree/main/Calendar" }] },

  { name: 'Silverstone App', page: 'silverstone', tags: ['Figma'], image: 'silverstone.png', links: [{icon: <FaLink />, link:"https://www.figma.com/proto/yWQoodx84IKJaN2jHulW6V/Alice's-Workspace?content-scaling=fixed&kind=proto&node-id=968-1771&page-id=500%3A3107&scaling=scale-down&starting-point-node-id=968%3A1771"}], blurb: "As an avid F1 fan, I designed this prototype as a tailored redesign of the official F1 app for fans attending live races. The app provides track details, historical insights, and iconic moments, enhancing the race-day experience. It also offers practical tools like digital ticket access and event schedules, combining convenience with deeper engagement." },
];


const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));


  return (
    <div>
      <Navbar />
      <div id="project_main">
        <div class="project_header">
          <h1 class="section_title">Projects</h1>
          <hr></hr>
          <div class="tags">
            <Stack direction="row" spacing={1}>
              <p>Filter by skill: </p>
              {tags.map(tag => (
                <Chip label={tag} variant="outlined" onClick={() => setSelectedTag(tag)} />
              ))}
            </Stack>
          </div>
        </div>
        <div class="project">
          {filteredProjects.map(project => (
            <Link to={"/projects/" + project.page} class="project-card">
              <div class="card_img">
                <img src={process.env.PUBLIC_URL + "/images/" + project.image} alt={project.name}></img>
              </div>
              <div class="card_body">
                <div class="project_header">
                  <h2 class="project_title">{project.name}</h2>
                  <div class="tags">
                    <Stack direction="row" spacing={1}>
                      {project.tags.map(tag => (
                        <Chip label={tag} variant="outlined" />
                      ))}
                    </Stack>
                  </div>
                </div>
                <div class="project_body">
                  <p>{project.blurb}</p>
                </div>
                <div class="project_links">
                  {project.links.map(currLink => (
                    <a href={currLink.link} class="github_button">{currLink.icon}</a>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Projects;

