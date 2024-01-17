import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiMysql,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiJavascript,
  SiReact,
  SiPhp,
  SiRedux,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';
import { RiToolsLine } from 'react-icons/ri';
import SectionTitle from '../UI/SectionTitle';
import Section from '../UI/Section';

function Skills() {
  return (
    <Section id='skills'>
      <div className='flex flex-col'>
        <SectionTitle section={{ no: '01', title: 'Skills' }} />

        <div>
          <h2 className='text-xl font-jetBrainsSemibold p-1 text-zinc-800 dark:text-zinc-500'>
            Technologies
          </h2>
        </div>

        <div className='w-full grid gap-2 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 mt-8'>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiHtml5 className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              HTML
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiCss3 className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              CSS
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiSass className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              SASS
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiTailwindcss className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Tailwind CSS
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiBootstrap className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Bootstrap
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiJavascript className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              JavaScript
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiReact className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              React
            </p>
          </div>
          {/* <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiReactrouter className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              React Router
            </p>
          </div> */}
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiRedux className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Redux
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <FaGitAlt className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Git
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiPhp className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              PHP
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiMysql className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              MySQL
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiAdobephotoshop className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Photoshop
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiAdobeillustrator className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Illustrator
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiAdobexd className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              XD
            </p>
          </div>
          <div className='class="flex items-center justify-center p-0 flex-col mb-4 mr-0 h-28 sm:h-auto'>
            <div className='class="w-16 h-16 group flex justify-center flex-wrap transition-all duration-200 ease-in-out transform translate-y-0 group hover:-translate-y-0 translate-x-0"'>
              <SiFigma className='text-7xl text-zinc-800 dark:text-zinc-400' />
            </div>
            <p className='text-xs md:text-sm text-center text-zinc-800 dark:text-zinc-400 mt-3'>
              Figma
            </p>
          </div>
        </div>

        <div className='w-full grid gap-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:gris-cols-2 2xl:grid-cols-2 mt-20 text-zinc-800 dark:text-zinc-400'>
          <div className='flex flex-col border-2 border-zinc-800 dark:border-zinc-500 shadow-xl'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-2xl font-jetBrainsSemibold text-zinc-800 dark:text-zinc-500 p-4'>
                  Languages
                </h2>
              </div>
              <div>
                <h2 className='text-2xl font-jetBrainsRegular p-4 text-zinc-800 dark:text-yellow-400'>
                  <SlGlobe />
                </h2>
              </div>
            </div>

            <div className='text-justify p-4'>
              <p className='text-l mt-4'>
                <span className='font-jetBrainsExtraBold'>English</span> -
                fluent, living in the UK since 2017
              </p>
              <p className='text-l'>
                <span className='font-jetBrainsExtraBold'>Hungarian</span> -
                native
              </p>
            </div>
          </div>

          <div className='flex flex-col border-2 border-zinc-800 dark:border-zinc-500 shadow-xl'>
            <div className='flex justify-between'>
              <div>
                <h2 className='text-2xl font-jetBrainsSemibold text-zinc-800 dark:text-zinc-500 p-4'>
                  Other skills
                </h2>
              </div>
              <div>
                <h2 className='text-2xl font-jetBrainsRegular p-4 text-zinc-800 dark:text-yellow-400'>
                  <RiToolsLine />
                </h2>
              </div>
            </div>

            <div className='text-sm flex flex-wrap px-4 pt-2 pb-4'>
              <p className=' mt-4'>
                Always looking to improve and learn new skills
              </p>
              <p className='mt-1'>
                Efficient learner, able to adapt to new environments
              </p>
              <p className='mt-1'>
                Good communication and people skills (ex-bartender/barista)
              </p>
              <p className='mt-1'>
                Organized, great team worker, able to work independently
              </p>
              <p className='mt-1'>
                Management and leadership experience, also great follower
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
