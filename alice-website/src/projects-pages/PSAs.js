import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import ProjectPage from '../components/ProjectPage';

function PSAs() {
    return (
        <>
            <Navbar />
            <ProjectPage
                title="Precision, Simplicity, Appeal: Decoding the impact of visual design in public service announcements"
                date="May 2025"
                tags={['Research', 'Data Visualization']}
                media={[
                    process.env.PUBLIC_URL + '/images/fire_graph.png',
                    process.env.PUBLIC_URL + '/images/fire_info.png',
                    process.env.PUBLIC_URL + '/images/fire_text.png'
                ]}
                links={[]}
                prevPage={"calendar"}
                prevPageTitle={"The Better Calendar"}
                nextPage={"sail"}
                nextPageTitle={"Sensory and Ambient Interface Lab"}
            >

                <div class="project-body">
                    <p>
                        Public service announcements (PSAs) often rely on visual design to engage audiences and communicate critical information. This study investigates how three common PSA formats — infographics, traditional graphs, and text-only representations —affect comprehension, memory, and user preference. Using recreated versions of real government-issued PSAs, participants viewed one of each format per topic and responded to comprehension, recall, and ranking tasks. Results showed no significant difference in comprehension across formats overall, though topic-specific effects suggest that visual clarity can influence understanding. Memory performance declined most for graphs. While infographics were consistently rated highest for overall preference, attention-grabbing, raising awareness, and memorability, graphs were perceived as the most trustworthy. These findings highlight the importance of the balance between engagement and clarity in infographic PSAs.
                    </p>
                    <br></br>
                    <a class="button" href={process.env.PUBLIC_URL + '/images/Precision, Simplicity, Appeal.pdf'}>Read the paper</a>
                    <br></br>    <br></br>
                    <i class="project_note">This project was advised by <b class="shoutout">Professor Alvitta Ottley</b> and successfully defended in May 2025.</i>

                </div>
            </ProjectPage>
            <Contact />
        </>
    );
}

export default PSAs;
