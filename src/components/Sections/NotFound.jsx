import Button from '../UI/ButtonExternal';
import Section from '../UI/Section';

function NotFound() {
  return (
    <Section className=''>
      <div className='grid grid-cols-12 mt-10 gap-10 pt-10'>
        <div className='col-span-12 text-zinc-800 dark:text-zinc-500 text-center'>
          <div className='border-t-4 border-r-4 border-l-4 border-b-2 border-zinc-800 dark:border-zinc-500 h-10 flex items-center'>
            <p className='ml-2 text-2xl text-zinc-800 dark:text-zinc-500'>
              &#x2022;
            </p>
            <p className='text-2xl text-zinc-800 dark:text-zinc-500'>
              &#x2022;
            </p>
            <p className='text-2xl text-zinc-800 dark:text-zinc-500'>
              &#x2022;
            </p>
          </div>
          <div className='border-t-2 border-r-4 border-l-4 border-b-4 border-zinc-800 dark:border-zinc-500 h-full flex items-center justify-center'>
            <h1 className='text-9xl font-jetBrainsExtraBold p-14'>404</h1>
          </div>
        </div>
        <div className='col-span-12 text-zinc-800 dark:text-zinc-500 text-center'>
          <h2 className='text-5xl font-jetBrainsExtraBold mt-16'>
            That does not compute.
          </h2>
          <div className='flex flex-col pt-8'>
            <div className='text-sm md:text-base lg:text-lg xl:text-xl mt-10'>
              <p className='text-justify'>
                We searched high and low, could not find the page you were
                looking for. Let us find a better place to go.
              </p>
            </div>
            <div className='flex justify-center mt-10'>
              <Button page='/home'>&larr; Back To Home</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NotFound;
