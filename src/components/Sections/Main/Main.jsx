import AnimatedText from './AnimatedText';
import Button from '../../UI/ButtonInternal';
import { Link } from 'react-scroll';

function Main() {
  return (
    <main className='flex flex-col h-screen' id='home'>
      <div className='relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24'>
        <div className='w-full'>
          <p className='text-base md:text-l transition-all duration-500 ease-in-out text-zinc-600 dark:text-zinc-500 font-jetBrainsRegular'>
            Hello, my name is
          </p>
          <h1 className='text-6xl lg:text-7xl xl:text-8xl transition-all duration-500 ease-in-out text-zinc-800 dark:text-yellow-400 font-jetBrainsExtraBold pt-2'>
            Krisztian Nemeth
          </h1>
          <h2 className='text-xl md:text-2xl text-zinc-600 dark:text-zinc-500 font-jetBrainsSemibold pt-4'>
            <AnimatedText />
          </h2>
          <p className='text-base md:text-l text-zinc-500 dark:text-zinc-400 pt-4 text-justify'>
            I design and code websites that look great and function as intended.
          </p>
          <div className='mt-8'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              <Button>Check out my projects &darr;</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
