import NavbarError from './components/Nav/NavbarError';
import MenuOverlay from './components/Nav/MenuOverlay';

import Footer from './components/Sections/Footer';
import Socials from './components/UI/Socials';
import NotFound from './components/Sections/NotFound';

//eslint-disable-next-line
function ErrorPage({ darkMode, setNavBarOpen, navBarOpen, handleDarkMode }) {
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-slate-200 px-10 text-zinc-950 dark:bg-zinc-900 font-jetBrainsRegular overscroll-auto transition-all duration-1000 ease-in-out'>
        <div className='container relative mx-auto'>
          <NavbarError
            navBarOpen={navBarOpen}
            setNavBarOpen={setNavBarOpen}
            handleDarkMode={handleDarkMode}
          />
          <MenuOverlay navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
          <NotFound />
        </div>
        <Footer />
        <Socials />
      </div>
    </div>
  );
}

export default ErrorPage;
