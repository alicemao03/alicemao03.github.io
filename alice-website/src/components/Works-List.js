import { useEffect, useState, useRef } from "react";
import projects from "../ProjectData";
import { Link } from 'react-router-dom';
import '../css/works.css';

function Works() {
  const containerRef = useRef();
  const sectionRefs = useRef([]);

  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleSections]);
  return (
    <>
      <div class="works-wrapper" ref={containerRef} id="works-anchor">
        {projects.map((project, idx) => (
          <div
            class={`project-section ${visibleSections.includes(idx) ? "visible" : ""}`}
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
          >
            <div class="project-image">
              <img src={process.env.PUBLIC_URL + "/images/" + project.image} alt={project.name} />
            </div>
            <div class="project-text">
              <div class="project-tags">{project.tags.join(", ")}</div>
              <div class="section-title">{project.name}</div>
              <div class="date">{project.date}</div>
              <div class="blurb">
                <p>{project.blurb}</p>
              </div>
              <div class="explore-more">
                <Link to={`/projects-pages/${project.page}`} class="button project-link">{project.buttonText}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Works;

