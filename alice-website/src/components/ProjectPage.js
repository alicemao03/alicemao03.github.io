import { Link } from 'react-router-dom';
import '../css/projectpage.css';

function ProjectPage({ title, date, tags, links, media, children, prevPage, prevPageTitle, nextPage, nextPageTitle }) {
    const renderMedia = () => {
        if (!media) return null;

        if (typeof media === 'string') {
            return <img src={media} alt="project visual" class="project-media" />;
        }

        if (Array.isArray(media)) {
            return (
                <div class="project-media-grid">
                    {media.map((src, idx) => (
                        <img key={idx} src={src} alt={`media-${idx}`} class="project-media" />
                    ))}
                </div>
            );
        }

        if (media.type === 'iframe') {
            return (
                <div class="iframe-wrapper">
                    <iframe
                        src={media.src}
                        title="iframe"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }

        if (media.type === 'video') {
            return (
                <video class="project-media" controls muted autoPlay={media.auto} loop={media.loop}>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        }

        return null;
    };

    return (
        <div class="project-layout">
            <div class="project-header">
                <h1 class="project-title">{title}</h1>
                <p class="project-date">{date}</p>
                <p class="indiv-project-tags">{tags.join(', ')}</p>
                <div class="indiv-project-links">
                    {links.map((item, idx) => (
                        <a href={item.link} target="_blank" rel="noreferrer" key={idx} class="project-icon">
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>

            {renderMedia()}

            {children}

            <div class="project-navigation">
                <Link to={'/projects-pages/' + prevPage} class="nav-arrow left-arrow">
                    &larr; {prevPageTitle}
                </Link>
                <Link to={'/projects-pages/' + nextPage} class="nav-arrow right-arrow">
                    {nextPageTitle} &rarr;
                </Link>
            </div>
        </div>
    );
}

export default ProjectPage;
