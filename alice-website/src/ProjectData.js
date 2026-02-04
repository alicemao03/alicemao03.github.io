
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


const projectsList = [
  {
    name: 'Precision, Simplicity, Appeal', page: 'PSAs', image: 'Asthma_info.png', date: "May 2025", overview: "As part of a research team in the SAIL Lab, I built an iOS + WatchOS app that uses Bluetooth and haptic feedback to guide rowers with real-time, non-visual performance cues.", tags: ['Research', 'Data Visualization'], links: [{ icon: <FaLink />, link: 'https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab' }], collaborator: 'Primary investigator: Johnathan Hanahan', blurb: "How does visual design shape what people trust, remember, and act on in public service announcements?",
    buttonText: "See the impact"
  },

  { name: 'SEVENTEEN in Color', page: 'svt_vis', image: 'svt_viz.png', date: "January 2026", overview: ".", blurb: "I applied my CS background with my obsession with the KPop boy group SEVENTEEN to visualize how a song is split between 13 men.", buttonText: "Slip into the diamond life!", tags: ['Data collection', 'Python', 'D3.js', 'JavaScript', 'HTML', 'CSS'], links: [{ icon: <FaGithub />, link: 'https://github.com/alicemao03/line_distribution' }, { icon: <FaLink />, link: 'https://alicemao03.github.io/line_distribution/' }], },
  {
    name: 'Sensory and Ambient Interface Lab', page: 'sail', image: 'iconV3.png', date: "August 2023 - May 2025", overview: "As part of a research team in the SAIL Lab, I built an iOS + WatchOS app that uses Bluetooth and haptic feedback to guide rowers with real-time, non-visual performance cues.", blurb: "Translating rowing performance into vibration patterns to explore non-visual feedback through wearable tech.", buttonText: "Feel the rhythm", tags: ['Research', 'Swift', 'XCode'], links: [{ icon: <FaLink />, link: 'https://samfoxschool.washu.edu/collaborations/sensory-and-ambient-interfaces-lab' }], collaborator: 'Primary investigator: Johnathan Hanahan'
  },

  { name: 'Swimming Lap Counter', page: 'lap_counter', image: 'lap_counter.png', date: "August 2024 - December 2024", overview: "To solve a key shortcoming of wearables, we built a computer vision-based system using OpenCV to track swimmers and count laps in real time using colored caps and a live GUI.", blurb: "We taught a computer to watch swimmers and count laps — because counting is hard sometimes.", buttonText: "Dive into it", tags: ['Course work', 'Python', 'OpenCV'], links: [{ icon: <FaGithub />, link: 'https://github.com/amao03/lap-counter' }], collaborator: 'In collaboration with Dante Cannarozzi and Isabel Boufarah' },


  // { name: 'Global Music Taste Visualization', page: 'spotify_vis', image: 'Spotify.png', date: "April 2024", overview: "I explored   top songs and musical preferences across countries, revealing unique national tastes and global trends using interactive visualizations.", blurb: "Ever wonder if Norwegians vibe with reggaeton? We visualized global music taste to find out.", buttonText: "Jam with the data", tags: ['Course work', 'D3.js', 'JavaScript', 'HTML', 'CSS'], links: [{ icon: <FaGithub />, link: 'https://github.com/alicemao03/projects/tree/main/Spotify%20Visualization' }, { icon: <FaLink />, link: 'https://csex57.github.io/SpotifyVisualizationGraphics/' }], },


  { name: 'Silverstone App', page: 'silverstone', image: 'silverstone.png', date: "April 2024", overview: "I designed a prototype app tailored for live race attendees, combining track history, iconic moments, digital ticket access, and event schedules to enhance the race-day experience with seamless convenience and engagement.", blurb: "An F1 fan redesigns the race-day app: less confusion, more vroom-vroom.", buttonText: "Start your engines", tags: ['Course work', 'Figma', 'Prototyping'], links: [{ icon: <FaLink />, link: "https://www.figma.com/proto/yWQoodx84IKJaN2jHulW6V/Alice's-Workspace?content-scaling=fixed&kind=proto&node-id=968-1771&page-id=500%3A3107&scaling=scale-down&starting-point-node-id=968%3A1771" }], },

  { name: 'Hack WashU 2023', page: 'hackathon', image: 'hackathon.png', date: "November 2023", overview: "For Hack WashU 2023, my team built a dynamic D3.js heat map of WashU's campus that visualizes student traffic by combining class schedules, enrollment data, and popular hangout spots.", blurb: "We tracked where WashU students go... not creepy, just clever—with a glowing campus heatmap.", buttonText: "Follow the crowd", tags: ['HTML', 'D3.js', 'Python', 'Figma'], links: [{ icon: <FaGithub />, link: 'https://github.com/j-g-sivamohan/Hackathon_fl_23' }], collaborator: 'In collaboration with Jeevan Sivamohan and Zach Bertino' },

  {
    name: 'The Better Calendar', page: 'calendar', image: 'calendar.png', date: "March 2023", overview: "Inspired by Google Calendar, my partner and I built a web app that allows users to register, log in, and manage events in real time with month-by-month navigation.", blurb: "A calendar app that makes sure you don't ghost your friends or leak your secrets. Built from scratch, zero chaos.",
    buttonText: "Mark your moment", tags: ['Course work', 'HTML', 'JavaScript', 'SQL', 'PHP', 'CSS', 'Ajax'], links: [{ icon: <FaGithub />, link: "https://github.com/alicemao03/projects/tree/main/Calendar" }], collaborator: "In collaboration with Phillip Lisun"
  },
  // {
  //   name: 'NYC', page: 'NYC', image: 'calendar.png', date: "March 2023", overview: "Inspired by Google Calendar, my partner and I built a web app that allows users to register, log in, and manage events in real time with month-by-month navigation.", blurb: "A calendar app that makes sure you don't ghost your friends or leak your secrets. Built from scratch, zero chaos.",
  //   buttonText: "Mark your moment", tags: ['Course work', 'HTML', 'JavaScript', 'SQL', 'PHP', 'CSS', 'Ajax'], links: [{ icon: <FaGithub />, link: "https://github.com/alicemao03/projects/tree/main/Calendar" }], collaborator: "In collaboration with Phillip Lisun"
  // },
];

export default projectsList;