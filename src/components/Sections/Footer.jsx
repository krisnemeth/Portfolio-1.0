import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className='flex flex-col w-full px-0 md:px-20 lg:px-24 pb-12'
      id='footer'
    >
      <hr className='bg-zinc-700 dark:bg-zinc-500 w-full h-0.5 mt-4 border-0' />

      <div className='flex flex-col justify-center text-center md:flex-row my-4 md:my-8'>
        <p className=' text-zinc-800 dark:text-zinc-500 mt-8'>
          Copyright © {year} - Designed and developed by
          <span className='font-jetBrainsExtraBold text-xinc-800 dark:text-zinc-500'>
            {' '}
            <a href='mailto:krsnmth@gmail.com'>Krisztian Nemeth</a>
          </span>
        </p>
      </div>

      <div className='flex md:hidden items-center mx-auto'>
        <span className='mr-4'>
          <div className='w-8 h-8 mb-0'>
            <a
              href='https://github.com/krisnemeth'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare className='text-3xl text-zinc-800 dark:text-zinc-500' />
            </a>
          </div>
        </span>
        <span className='mr-4'>
          <div className='w-8 h-8 mb-0'>
            <a
              href='https://www.linkedin.com/in/krisztian-nemeth-3a41682a5/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='text-3xl text-zinc-800 dark:text-zinc-500' />
            </a>
          </div>
        </span>
        <span className=''>
          <div className='w-8 h-8 mb-0'>
            <a
              href='https://twitter.com/kriscodes5'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaSquareXTwitter className='text-3xl text-zinc-800 dark:text-zinc-500' />
            </a>
          </div>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
