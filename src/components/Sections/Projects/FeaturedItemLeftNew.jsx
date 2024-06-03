// import { FaRegFolder } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';

function FeaturedItemLeftNew({
  //eslint-disable-next-line
  project: { title, description, tech1, tech2, tech3, tech4, link1, link2 },
  //eslint-disable-next-line
  darkMode,
}) {
  return (
    <>
      {/* LEFT SIDE */}
      <div className='md:h-full md:w-full mt-8 lg:mt-0'>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400 to-transparent'></div> */}
        <div className='w-full h-full flex flex-col border-2 border-zinc-800 dark:border-zinc-500 md:border-0'>
          <div className='flex'>
            <div className='m-4 md:mt-2 md:mx-0'>
              <p className='text-sm text-zinc-800 dark:text-yellow-400'>
                Featured Project
              </p>
            </div>
          </div>

          <h4 className='text-zinc-800 dark:text-zinc-500 text-3xl font-jetBrainsExtraBold m-4 flex md:mb-0 md:mx-0'>
            <a
              href={link1}
              target='_blank'
              rel='noopener noreferrer'
              title='External Link'
              className='cursor-pointer'
            >
              {title}
            </a>
          </h4>

          <div className='p-4'>
            <a
              href={link1}
              target='_blank'
              rel='noopener noreferrer'
              title='External Link'
              className='cursor-pointer'
            >
              <img
                src={
                  darkMode
                    ? '/images/ProductShot.webp'
                    : '/images/ProductShot.webp'
                }
                alt=''
                className='md:hidden border-2 border-zinc-800 shadow-xl'
              />
            </a>
          </div>

          <div className='h-full'>
            <div className=''>
              <p className='text-sm m-4 md:mx-0 md:my-0 text-justify md:text-zinc-800 dark:text-zinc-400 font-jetBrainsSemibold'>
                {description}
              </p>
            </div>
          </div>

          <div className='flex flex-wrap text-sm m-4 md:my-4 md:mx-0'>
            <p className='text-zinc-400 mr-4 mt-1'>{tech1}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech2}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech3}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech4}</p>
          </div>
          <div className='flex m-4 md:my-4 md:mx-0'>
            <a
              href={link2}
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'
            >
              <VscGithub className='text-3xl text-zinc-400 mr-4 hover:text-zinc-500 dark:hover:text-yellow-400' />
            </a>
            <a
              href={link1}
              target='_blank'
              rel='noopener noreferrer'
              title='External Link'
            >
              <FiExternalLink className='text-3xl text-zinc-400 hover:text-zinc-500 dark:hover:text-yellow-400' />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE shadow-xl border-2 border-zinc-800 was on next line */}
      <div className='h-full w-full hidden md:inline-block order-first lg:order-2'>
        <a
          href={link1}
          target='_blank'
          rel='noopener noreferrer'
          title='External Link'
          className='cursor-pointer'
        >
          <img
            src={
              darkMode ? '/images/ProductShot.webp' : '/images/ProductShot.webp'
            }
            alt=''
            className='grayscale hover:grayscale-0 transition duration-500 ease-out box-border border-2 border-zinc-800 shadow-xl'
          />
        </a>
      </div>
    </>
  );
}

export default FeaturedItemLeftNew;
