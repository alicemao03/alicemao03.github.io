import React, { useState } from 'react';
import './css/projects.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";



const projects = [
  { name: 'Swimming Lap Counter', page:'lap_counter', image: 'lap_counter.png', blurb: "For this project I worked with Isabel Boufarah. We uses computer vision to track the laps of a swimmer in a pool. We are using the python library OpenCV for most of our tracking system and PyQt to build a GUI.", tags: ['Python'], links: [{ icon: <FaGithub />, link: 'https://github.com/amao03/lap-counter' }] },

  { name: 'Spotify Visualization', page:'spotify_vis', tags: ['D3.js', 'JavaScript', 'HTML', 'CSS'], image: 'Spotify.png', links: [{ icon: <FaGithub />, link: 'https://github.com/alicemao03/projects/tree/main/Spotify%20Visualization' }, { icon: <FaLink />, link: 'https://csex57.github.io/SpotifyVisualizationGraphics/' }], blurb: "This interface allows us to visualize the top songs across various countries worldwide, providing an insightful comparison of music preferences between two nations. It helps reveal the musical tastes unique to each country and offers a deeper understanding of whether significant differences in music preferences exist globally." },

  { name: 'Hackathon', page:'hackathon', image: 'hackathon.png', blurb: 'We create a heat map to visualize student traffic during a given day and time. We estimated where students would be based on course listings, dining halls, and lunch hours.', tags: ['HTML', 'CSS', 'JavaScript', 'D3.js', 'Python'], links: [{ icon: <FaGithub />, link: 'https://github.com/j-g-sivamohan/Hackathon_fl_23' }] },

  { name: 'Calendar', page:'calendar', tags: ['HTML', 'JavaScript', 'SQL', 'PHP', 'CSS'], image: 'calendar_crop.png', blurb: "This project from CSE 330: Rapid Prototype and Development involved creating a calendar app where users can add, edit, and delete events using JavaScript, PHP, and AJAX. Users must register and log in to access their events, while unregistered visitors see no events. Data is securely stored in a MySQL database with session-based authentication to ensure privacy.", links: [{ icon: <FaGithub />, link: "https://github.com/alicemao03/projects/tree/main/Calendar" }] },
];


const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(selectedTag));


  return (
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
          <Link to={project.page} class="project-card">
            <div class="card_img">
              <img src={process.env.PUBLIC_URL + "/images/" + project.image} alt={project.name}></img>
            </div>
            <div class="card_body">
              <div class="project_header">
                <h2 class="project_title">{project.name}</h2>
                <div class="tags">
                  <Stack direction="row" spacing={1}>
                    {project.tags.map(tag => (
                      <Chip label={tag} variant="outlined" onClick={() => setSelectedTag(tag)} />
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
  );
};

export default Projects;

