// import { VscGithub } from 'react-icons/vsc';
// import { FiExternalLink } from 'react-icons/fi';

import FeaturedItemLeft from './FeaturedItemLeft';
import FeaturedItemLeftNew from './FeaturedItemLeftNew';
// import FeaturedItemRight from './FeaturedItemRight';
import FeaturedItemRightNew from './FeaturedItemRightNew';
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
        <FeaturedItemLeftNew
          darkMode={darkMode}
          project={{
            title: 'Elysium - Ongoing',
            description: `A player's tool for a popular role-playing game. Users can create and manage their character sheets and loresheets. Work in progress built with TypeScript, Next.JS 14, TailwindCSS, and PostgreSQL. Only placeholder content is present, functionality is not finished.`,
            tech1: 'TypeScript',
            tech2: 'Next.JS',
            tech3: 'Supabase',
            tech4: 'TailwindCSS',
            link1: 'https://elysium-project-ten.vercel.app/',
            link2: 'https://github.com/krisnemeth/Elysium',
          }}
        />
      </FeaturedProjectGrid>
      <FeaturedProjectGrid>
        <FeaturedItemRightNew
          project={{
            title: 'WEARECAIRO - Ongoing',
            description: `A band website with minimalistic e-commerce functionality. Users can register, login, and purchase merchandise as well as keep on top of new releases, events, and additional information on the band. Built with Next.JS, TypeScript, TailwindCSS, and PostgreSQL`,
            tech1: 'TypeScript',
            tech2: 'Next.JS',
            tech3: 'PostgreSQL',
            tech4: 'TailwindCSS',
            link1: 'https://wearecairo.vercel.app/',
            link2: '',
          }}
        />
      </FeaturedProjectGrid>

      <FeaturedProjectGrid>
        <FeaturedItemLeft
          darkMode={darkMode}
          project={{
            title: 'Portfolio 1.0',
            description: `My first real-life React project. I've built this portfolio to showcase my skills, projects and a bit of my personality. I've used React Router for navigation, JavaScript for dark mode and other functonality, and TailwindCSS for styling.`,
            tech1: 'JavaScript',
            tech2: 'React',
            tech3: 'ReactRouter',
            tech4: 'TailwindCSS',
            link1: 'https://krisnemeth.dev',
            link2: 'https://github.com/krisnemeth/Portfolio-1.0',
          }}
        />
      </FeaturedProjectGrid>
      {/* 
      <FeaturedProjectGrid>
        <FeaturedItemRight
          project={{
            title: 'National Museum of Scotland',
            description: ``,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: 'https://nms-kn.000webhostapp.com/index.php',
            link2: 'https://github.com/krisnemeth/National-Museum-of-Scotland',
          }}
        />
      </FeaturedProjectGrid> */}

      <div className='flex flex-col w-full my-10'>
        <h2 className='text-4xl text-zinc-800 dark:text-zinc-400 text-center font-jetBrainsSemibold my-10'>
          College Projects
        </h2>
        {/* <hr className='bg-yellow-400 w-full h-1 mt-2 border-0' /> */}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 mt-4'>
        <GridItem
          project={{
            title: 'National Museum of Scotland',
            description: `My college graded unit project built on a MySQL database offering CRUD and Image upload functionality. Users can register and book events offered by the museum. `,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: 'https://github.com/krisnemeth/National-Museum-of-Scotland',
            link2: 'https://nms-kn.000webhostapp.com/index.php',
          }}
        />
        <GridItem
          project={{
            title: 'eRevive',
            description: `A portal dedicated to the recycling of used electronics. CRUD system
                          with user registration and image upload.`,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: 'https://github.com/krisnemeth/eRevive',
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
      <div className='flex flex-col w-full my-10'>
        {/* <h2 className='text-4xl text-zinc-800 dark:text-zinc-400 text-center font-jetBrainsSemibold my-10'>
          Practice projects - coming soon
        </h2> */}
        {/* <hr className='bg-yellow-400 w-full h-1 mt-2 border-0' /> */}
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 mt-4'>
        <GridItem
          project={{
            title: 'National Museum of Scotland',
            description: `My college graded unit project built on a MySQL database offering CRUD and Image upload functionality. Users can register and book events offered by the museum. `,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: 'https://github.com/krisnemeth/National-Museum-of-Scotland',
            link2: 'https://nms-kn.000webhostapp.com/index.php',
          }}
        />
        <GridItem
          project={{
            title: 'eRevive',
            description: `A portal dedicated to the recycling of used electronics. CRUD system
                          with user registration and image upload.`,
            tech1: 'JavaScript',
            tech2: 'PHP',
            tech3: 'MySQL',
            tech4: 'Bootstrap',
            link1: 'https://github.com/krisnemeth/eRevive',
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
      </div> */}
    </Section>
  );
}

export default Projects;
