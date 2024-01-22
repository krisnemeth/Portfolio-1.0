//eslint-disable-next-line
function SectionTitle({ section: { no, title } }) {
  return (
    <>
      <div className='mt-0'>
        <h2 className='text-2xl md:text-4xl mt-2 text-zinc-800 dark:text-zinc-500 font-jetBrainsRegular'>
          <span className='font-jetBrainsExtraBold'>{no}_</span>
          {title}
        </h2>
        <hr className='bg-zinc-800 dark:bg-zinc-500 w-24 h-0.5 mt-4 mb-6 border-0' />
      </div>
    </>
  );
}

export default SectionTitle;
