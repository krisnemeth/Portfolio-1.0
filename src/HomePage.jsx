import Navbar from './components/Nav/Navbar';
import MenuOverlay from './components/Nav/MenuOverlay';

import Contact from './components/Sections/Contact';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects/Projects';
import About from './components/Sections/About';
import Footer from './components/Sections/Footer';
import Socials from './components/UI/Socials';
import Main from './components/Sections/Main/Main';

//eslint-disable-next-line
function HomePage({ navBarOpen, setNavBarOpen, handleDarkMode, darkMode }) {
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className='bg-slate-200 px-10 text-zinc-950 dark:bg-zinc-900 font-jetBrainsRegular overscroll-auto transition-all duration-1000 ease-in-out'>
        <div className='container relative mx-auto'>
          <Navbar
            navBarOpen={navBarOpen}
            setNavBarOpen={setNavBarOpen}
            handleDarkMode={handleDarkMode}
          />
          <MenuOverlay navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
          <Main />
          <About />
          <Skills />
          <Projects darkMode={darkMode} />
          <Contact />
        </div>
        <Footer />
        <Socials />
      </div>
    </div>
  );
}

export default HomePage;
