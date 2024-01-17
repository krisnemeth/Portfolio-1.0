//eslint-disable-next-line
function FeaturedProjectGrid({ children }) {
  return (
    <div className='md:border-2 md:border-zinc-800 md:dark:border-zinc-500 mt-4 md:mt-8 shadow-xl'>
      <div className='grid grid-cols-1 md:grid-flow-row-dense lg:grid-cols-2 gap-x-8 md:p-8 '>
        {children}
      </div>
    </div>
  );
}

export default FeaturedProjectGrid;
