// import { FaRegFolder } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';

function FeaturedItemRight({
  //eslint-disable-next-line
  project: { title, description, tech1, tech2, tech3, tech4 },
}) {
  return (
    <>
      <div className='h-full w-full hidden md:inline-block'>
        <img
          src='/images/NMS.png'
          alt=''
          className='grayscale hover:grayscale-0 transition duration-500 ease-out border-2 border-zinc-800 shadow-xl'
        />
      </div>

      <div className='md:h-full mt-8 lg:mt-0'>
        {/* <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-400 to-transparent'></div> */}
        <div className='w-full h-full flex flex-col border-2 border-zinc-800 dark:border-zinc-500 md:border-0'>
          <div className='flex lg:justify-end'>
            <div className='m-4 md:mt-2 md:mx-0'>
              <p className='text-sm text-zinc-800 dark:text-yellow-400'>
                Featured Project
              </p>
            </div>
          </div>

          <h4 className='text-zinc-800 dark:text-zinc-500 text-3xl font-jetBrainsExtraBold m-4 flex lg:justify-end md:my-0 md:mx-0'>
            {title}
          </h4>

          <div className='p-4'>
            <img
              src='/images/NMS.png'
              alt=''
              className='md:hidden border-2 border-zinc-800 shadow-lg'
            />
          </div>

          <div className='h-full mt-2'>
            <div className=''>
              <p className='text-sm m-4 md:mx-0 md:my-0 text-justify md:text-zinc-800 dark:text-zinc-400 font-jetBrainsRegular'>
                {description}
              </p>
            </div>
          </div>

          <div className='flex flex-wrap lg:justify-end text-sm m-4 md:my-4 md:mx-0 '>
            <p className='text-zinc-400 mr-4 mt-1'>{tech1}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech2}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech3}</p>
            <p className='text-zinc-400 mr-4 mt-1'>{tech4}</p>
          </div>
          <div className='flex lg:justify-end m-4 md:my-4 md:mx-0'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <VscGithub className='text-3xl text-zinc-500 mr-4' />
            </a>
            <a
              href='https://nms-kn.000webhostapp.com/index.php'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink className='text-3xl text-zinc-500' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedItemRight;
