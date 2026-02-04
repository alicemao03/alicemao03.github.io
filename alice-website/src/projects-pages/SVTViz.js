import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectPage from '../components/ProjectPage';

function SVTViz() {
    return (
        <>
            <Navbar />
            <ProjectPage

                title="SEVENTEEN in Color"
                date="January 2024"
                tags={['Data collection', 'Python', 'D3.js', 'JavaScript', 'HTML', 'CSS']}
                media={[
                    process.env.PUBLIC_URL + "/images/svt_viz.png"
                ]}
                links={[{ icon: <FaGithub />, link: "https://github.com/alicemao03/line_distribution" },
                { icon: <FaLink />, link: "https://alicemao03.github.io/line_distribution/" }
                ]}
                prevPage={"PSAs"}
                prevPageTitle={"Precision, Simplicity, Appeal"}

                nextPage={"sail"}
                nextPageTitle={"Sensory and Ambient Interface Lab"}
            >
                <div class="project-body">
                    <p>
                        SEVENTEEN (SVT) is a K-Pop boy group consisting of 13 members. Evenly splitting a 3 minute song about 13 members can be challanging, espcially when each member has different vocal strengths. I though it would be intersting to visualize how each song is distributed about members.
                    </p>
                    <p>
                        There isn't a public database of every SVT songs broken down among member and timestamp. This meant I had to meticulous create my own by combing lyric information from multiple sources. I found line assingments for each member my using the Python library <a href='https://beautiful-soup-4.readthedocs.io/en/latest/'><span class="code">Beautiful Soup</span></a> to scrape each song page provided by <a href="https://genius.com/artists/Seventeen">Genius.com</a>. The next step was finding the timestamp for when each line occurs. Some of the official music videos
                        have close captions (CC), so with <a href="https://downsub.com/">downsub.com</a> I was able to get the precise start and ending timestamps for each line. For the songs that did not have available
                        CCs, I use the open-sourced <a href="https://lrclib.net/">LRCLIB</a> which provided the start times for each line. The hardest part was merging all the lyrics together as some included adlibs or considered the same line as 2 different lines of the song. The final merged database can be found in the <span class='code'>/json/final_meta_data.json</span> file of this repo.
                    </p>
                    <p>
                        Finally, using D3.js, I was able to visualize the line distributions for each song for each member. The home page is a display of each song. Clicking on the song can also give you a more indept comparsion between members.
                    </p>
                    <br></br>
                    <a class="button" href={'https://alicemao03.github.io/line_distribution/'}>Slip into the diamond life!</a>

                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default SVTViz;
