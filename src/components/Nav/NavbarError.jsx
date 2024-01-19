import { useState, useEffect } from 'react';

import { BiCodeAlt } from 'react-icons/bi';
import { CgDarkMode } from 'react-icons/cg';
import Button from '../UI/ButtonInternal';

//eslint-disable-next-line
function Header({ navBarOpen, setNavBarOpen, handleDarkMode }) {
  const [show, setShow] = useState(true);
  const [showShadow, setShowShadow] = useState(false);

  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isNavbarFullyClosed, setIsNavbarFullyClosed] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavbarFullyClosed(!show);
      if (!show) {
        setShowShadow(true);
      }
    }, 0); // match this with your transition duration

    return () => clearTimeout(timer);
  }, [show]);

  useEffect(
    function () {
      function handleScroll() {
        const currentScrollPos = window.scrollY;
        const isScrollingDown =
          currentScrollPos > lastScrollPos && currentScrollPos > 0;
        const isScrollingUp = currentScrollPos < lastScrollPos;
        const isTopOfPage = currentScrollPos === 0;

        setShow(currentScrollPos <= lastScrollPos || isTopOfPage);
        if (isTopOfPage) {
          setIsNavbarFullyClosed(false);
          setHasScrolledOnce(false);
          setShowShadow(false);
        }
        if (isNavbarFullyClosed && isScrollingDown) {
          setHasScrolledOnce(true);
          setShowShadow(true);
        }
        if ((hasScrolledOnce || isScrollingUp) && !isTopOfPage) {
          setShowShadow(true);
        }
        setLastScrollPos(currentScrollPos);
      }

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },
    [lastScrollPos, isNavbarFullyClosed, show, hasScrolledOnce]
  );

  return (
    <header
      style={{
        transition:
          'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className={`fixed w-full transform ${
        show ? 'translate-y-0' : '-translate-y-full'
      } ${
        showShadow ? 'shadow-2xl' : 'shadow-none'
      } top-0 left-0 py-3 flex items-center z-50 bg-slate-200 bg-clip-padding dark:bg-clip-padding backdrop-filter dark:backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 dark:bg-zinc-900`}
    >
      <div className='flex flex-grow  justify-center mx-10 md:mx-16'>
        <div className='z-50 flex-grow relative flex items-center'>
          <div className='logo z-50 flex items-center'>
            <BiCodeAlt className='text-2xl md:text-3xl dark:hover:text-yellow-400 dark:text-zinc-400 cursor-pointer' />
          </div>
          {/* <div className='flex items-center ml-2'>
            <a
              href='#'
              className='text-lg font-jetBrainsregular text-zinc-950 dark:text-yellow-400 mr-10'
            >
              Kris Nemeth
            </a>
          </div> */}
        </div>

        <div className='transition-colors duration-1000 ease-in-out'>
          <nav className='hidden lg:block h-full ml-auto'>
            <ul className='z-50 flex items-center'>
              <li className='z-50 mx-5 lg:inline-block'>
                <a href='public/CV/Krisztian-Nemeth-CV.pdf' download>
                  <Button>Download CV</Button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* onClick={() => setNavBarOpen(!navBarOpen)} WAS ON THE BUTTON */}
        <button
          className='lg:hidden flex top-0 right-0 z-50 relative w-10 h-10 text-zinc-800 dark:text-yellow-400 focus:outline-none'
          onClick={() => setNavBarOpen(!navBarOpen)}
        >
          <div className='absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
            <span
              className={`absolute h-0.5 w-5 bg-zinc-800 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${
                navBarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-zinc-800 dark:bg-yellow-400 transform transition-all duration-200 ease-in-out ${
                navBarOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-zinc-800 dark:bg-yellow-400 transform transition duration-300 ease-in-out ${
                navBarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>

        <button className='flex items-center top-0 right-0 left-2 md:left-2 xl:left-1 xl:top-0 z-50 relative text-zinc-800 focus:outline-none cursor-pointer'>
          <CgDarkMode
            onClick={handleDarkMode}
            className='text-2xl lg:text-3xl text-zinc-950 dark:text-slate-400 dark:hover:text-yellow-400 transition duration-200 ease-in-out'
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
