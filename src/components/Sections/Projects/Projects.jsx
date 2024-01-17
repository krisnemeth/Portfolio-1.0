// import { VscGithub } from 'react-icons/vsc';
// import { FiExternalLink } from 'react-icons/fi';

import FeaturedItemLeft from './FeaturedItemLeft';
import FeaturedItemRight from './FeaturedItemRight';
import FeaturedProjectGrid from './FeaturedProjectGrid';
import GridItem from './GridItem';
import SectionTitle from '../../UI/SectionTitle';
import Section from '../../UI/Section';

//eslint-disable-next-line
function Projects({ darkMode }) {
  return (
    <Section id='projects'>
      <SectionTitle section={{ no: '02', title: `Projects` }} />

      <FeaturedProjectGrid>
        <FeaturedItemRight
          project={{
            title: 'National Museum of Scotland',
            description: `My college graded unit project built on a MySQL database offering CRUD functionality. Users can register, their account is stored with the password hashed, and are able to book events that are being offered by the museum. Bonus feature is an image upload to set their own profile picture.`,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
          }}
        />
      </FeaturedProjectGrid>

      <FeaturedProjectGrid>
        <FeaturedItemLeft
          darkMode={darkMode}
          project={{
            title: 'Portfolio',
            description: `My first real-life React project. I've built this portfolio to showcase my skills, projects and a bit of my personality. I've used React Router for navigation, Context for some of the data and a bit of JavaScript for the dark mode toggle. I've used TailwindCSS and a blood sacrifice for styling.`,
            tech1: 'JavaScript',
            tech2: 'React',
            tech3: 'React Router',
            tech4: 'TailwindCSS',
          }}
        />
      </FeaturedProjectGrid>

      <div className='flex flex-col w-full my-10'>
        <h2 className='text-4xl text-zinc-800 dark:text-zinc-400 text-center font-jetBrainsSemibold my-10'>
          Additional notable projects
        </h2>
        {/* <hr className='bg-yellow-400 w-full h-1 mt-2 border-0' /> */}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-8 mt-4'>
        <GridItem
          project={{
            title: 'eRevive',
            description: `A portal dedicated to the recycling of used electronics. CRUD system
                          with user registration and image upload.`,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: '',
            link2: 'https://erevive-kn.000webhostapp.com/',
          }}
        />

        <GridItem
          project={{
            title: 'Winter Adventures',
            description: `Site featuring popular ski resorts in France. Real time weather information, maps, and equipment rental calculator included.`,
            tech1: 'JavaScript',
            tech2: 'OpenWeather',
            tech3: 'HereMaps',
            tech4: 'Bootstrap',
            link1: 'https://github.com/krisnemeth/winter-holidays',
            link2: 'https://tranquil-travesseiro-20fb0f.netlify.app/',
          }}
        />
      </div>
    </Section>
  );
}

export default Projects;
