import '../css/about.css';

function About() {
  return (
    <div class="section-main" id="about-main">
      <div class="section-title">About Me</div>
      <div class="section-body">
        <p>
          Hi! I'm a PhD student in Informatics at the University of California, Irvine, advised by <a href="https://depstein.net/" className='highlight'> Dr. Daniel Epstein</a> in the <a href="https://depstein.net/pielab" className='highlight'>PIE Lab</a>. My research interests lie at the intersection of human-computer interaction, data visualization, and personal informatics.
        </p>
        <p>
          Before joining UCI, I earned my B.S. and M.S. in Computer Science at Washington University in St. Louis (WashU). During my master's, I worked with <a href="https://engineering.washu.edu/faculty/Alvitta-Ottley.html" className='highlight'>Dr. Alvitta Ottley</a> to investigate how data visualization design choices influence responses to public service announcements. As an undergraduate, I worked on haptic wearables for sports applications in the <a href='https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab' className='highlight'>SAIL Lab</a>, led by <a href='https://samfoxschool.washu.edu/people/faculty/42-jonathan-hanahan' className='highlight'>Jonathan Hanahan</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
