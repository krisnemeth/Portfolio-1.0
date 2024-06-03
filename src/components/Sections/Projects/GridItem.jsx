// import { FaRegFolder } from 'react-icons/fa';
import { TfiFolder } from 'react-icons/tfi';

import { VscGithub } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function GridItem({
  //eslint-disable-next-line
  project: { title, description, tech1, tech2, tech3, tech4, link1, link2 },
}) {
  return (
    <a
      href={link2}
      target='_blank'
      rel='noopener noreferrer'
      className='cursor-pointer'
    >
      <div className='flex flex-col border-2 border-zinc-800 dark:border-zinc-500  hover:-translate-y-2 transition-all duration-180 ease-in shadow-xl'>
        <div className='flex justify-between'>
          <div className=''>
            <TfiFolder className='text-4xl m-4 text-zinc-800 dark:text-yellow-400' />
          </div>
          <div className='flex m-4'>
            <Link to={link1} rel='noopener noreferrer' target='_blank'>
              <VscGithub className='text-3xl text-zinc-400 dark:text-zinc-500 mr-4 hover:text-zinc-500 dark:hover:text-yellow-400' />
            </Link>
            <Link to={link2} rel='noopener noreferrer' target='_blank'>
              <FiExternalLink className='text-3xl text-zinc-400 dark:text-zinc-500 hover:text-zinc-500 dark:hover:text-yellow-400' />
            </Link>
          </div>
        </div>

        <h4 className='text-zinc-800 dark:text-zinc-500 text-3xl font-jetBrainsExtraBold m-4'>
          {title}
        </h4>
        <div className='h-40'>
          <p className='text-l text-zinc-800 dark:text-zinc-400 m-4'>
            {description}
          </p>
        </div>

        <div className='flex flex-wrap justify-start m-4 text-sm '>
          <p className='text-zinc-400 dark:text-zinc-500 mr-4 mt-1'>{tech1}</p>
          <p className='text-zinc-400 dark:text-zinc-500 mr-4 mt-1'>{tech2}</p>
          <p className='text-zinc-400 dark:text-zinc-500 mr-4 mt-1'>{tech3}</p>
          <p className='text-zinc-400 dark:text-zinc-500 mr-4 mt-1'>{tech4}</p>
        </div>
      </div>
    </a>
  );
}

export default GridItem;
