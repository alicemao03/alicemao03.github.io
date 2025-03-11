import './css/home.css';
import { RiArrowDownWideLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Projects from './Projects';

function Home() {
  return (
    <div>
      <div id="home">
        <div class="home_main">
          {/* <div class="box">
          <img src={process.env.PUBLIC_URL + "/images/grad_pic.png"} id="my_pic" alt="my_pic" />
        </div> */}
          <div class="box">
            <h1 id="my_name">
              Hello, I'm Alice Mao.
            </h1>
            <p id="sub_name">Computer scientest | UX Designer</p>
            {/* <p>Hi again! I'm Alice. I'm a currently studying computer science at Washington University in St. Louis. </p> */}
          </div>
          <div className="navbar-right">
            <Link to="/projects" class="nav_links">Projects</Link>
            <h3>|</h3>
            <a class="nav_links" href="https://linkedin.com/in/alicehmao">LinkedIn</a>
            <h3>|</h3>
            <a class="nav_links" href={process.env.PUBLIC_URL + "/images/Alice_Resume.pdf"} >Resume</a>
          </div>
          {/* <div class="down_arrow" onClick={() => {
            const section = document.getElementById('project_main');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            <RiArrowDownWideLine />
          </div> */}
        </div>
      </div>
      {/* <Projects /> */}
    </div>
  );
}

export default Home;
