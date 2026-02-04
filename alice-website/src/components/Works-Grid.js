import '../css/works.css'
import projects from "../ProjectData";
import { Link } from 'react-router-dom';

function WorksGrid() {
    return (
        <div class="project-grid">
            {projects.map((project, idx) => (
                <Link to={`/projects-pages/${project.page}`} class="project-overview" key={project.name}>
                    <img src={process.env.PUBLIC_URL + "/images/" + project.image} alt={project.name} id={project.page + "-overview-img-grid"}></img>
                    <div class="overlay">
                        <div class="project-tags">{project.tags.join(", ")}</div>
                        <div class="section-title">{project.name}</div>
                        <div class="date">{project.date}</div>
                    </div>
                </Link>

            ))}
        </div>
    );
}

export default WorksGrid;
