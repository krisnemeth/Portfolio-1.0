// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// import { FaSquareXTwitter } from 'react-icons/fa6';

import { VscGithub } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FaXTwitter } from 'react-icons/fa6';

function Socials() {
  return (
    <div className=''>
      <div className='fixed bottom-0 z-80 w-full'>
        {/* container was next row class */}
        <div className='relative flex h-full mx-auto'>
          {/* left-side */}
          <div className='absolute bottom-0 items-center hidden mt-auto mr-auto text-white left-8 md:flex md:flex-col'>
            <div className='w-6 h-6 mb-4'>
              {/* */}
              <a
                href='https://github.com/krisnemeth'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-700 dark:text-zinc-500 text-2xl'
              >
                <VscGithub className='hover:-translate-y-0.5 dark:hover:text-yellow-400 dark:hover:-translate-y-0.5 transition duration-200 ease-in-out' />
              </a>
            </div>
            <div className='w-6 h-6 mb-4'>
              <a
                href='https://www.linkedin.com/in/krisztian-nemeth-3a41682a5/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-700 dark:text-zinc-500 text-2xl'
              >
                <SlSocialLinkedin className='hover:-translate-y-0.5 dark:hover:text-yellow-400 dark:hover:-translate-y-0.5 transition duration-200 ease-in-out' />
              </a>
            </div>
            <div className='w-6 h-6 mb-4'>
              <a
                href='https://twitter.com/kriscodes5'
                className='text-zinc-700 dark:text-zinc-500 text-2xl'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaXTwitter className='hover:-translate-y-0.5 dark:hover:text-yellow-400 dark:hover:-translate-y-0.5 transition duration-200 ease-in-out' />
              </a>
            </div>
            <div className='w-0.5 dark:bg-zinc-500 bg-zinc-700 h-32 mt-2'></div>
          </div>

          {/* right-side */}
          <div className='absolute bottom-0 items-center hidden mt-auto ml-auto text-white right-28 md:flex md:flex-col'>
            <div className='w-6 h-6 mb-4 transform rotate-90'>
              <span>
                <a
                  href='mailto:krsnmth@gmail.com'
                  className='text-zinc-700 dark:text-zinc-500 text-l flex justify-end tracking-widest hover:-translate-x-1 hover:font-jetBrainsSemibold dark:hover:text-yellow-400 dark:hover:-translate-x-1 transition duration-200 ease-in-out'
                >
                  krsnmth@gmail.com
                </a>
              </span>
            </div>
            <div className='w-0.5 dark:bg-zinc-500 bg-zinc-700 h-32 mt-2'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
