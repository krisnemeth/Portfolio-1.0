import Button from '../UI/ButtonInternal';

//eslint-disable-next-line
function MenuOverlay({ navBarOpen, setNavBarOpen }) {
  return (
    <nav
      style={{
        transition:
          'transform 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className={`fixed flex top-0 left-0 w-full px-10 z-30 h-screen pt-24 bg-slate-200 dark:bg-zinc-900 ${
        navBarOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <ul className='w-full flex flex-col items-start ml-4'>
        {/* <li className='nav-li'>
          <a
            href='#home'
            className='nav-link'
            onClick={() => {
              setNavBarOpen(false);
            }}
          >
            Home
          </a>
        </li> */}
        <li className='nav-li'>
          <a
            href='#about'
            className='nav-link'
            onClick={() => {
              setNavBarOpen(false);
            }}
          >
            <span className='font-jetBrainsExtraBold dark:text-yellow-400'>
              01_
            </span>
            About
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='#skills'
            className='nav-link'
            onClick={() => {
              setNavBarOpen(false);
            }}
          >
            <span className='font-jetBrainsExtraBold dark:text-yellow-400'>
              02_
            </span>
            Skills
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='#projects'
            className='nav-link'
            onClick={() => {
              setNavBarOpen(false);
            }}
          >
            <span className='font-jetBrainsExtraBold dark:text-yellow-400'>
              03_
            </span>
            Projects
          </a>
        </li>
        <li className='nav-li'>
          <a
            href='#contact'
            className='nav-link'
            onClick={() => {
              setNavBarOpen(false);
            }}
          >
            <span className='font-jetBrainsExtraBold dark:text-yellow-400'>
              04_
            </span>
            Contact
          </a>
        </li>
        <li className='nav-li'>
          <Button>
            <a
              href='#contact'
              className='nav-link'
              onClick={() => {
                setNavBarOpen(false);
              }}
            >
              Resume
            </a>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuOverlay;
