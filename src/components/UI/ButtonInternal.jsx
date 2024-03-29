//eslint-disable-next-line
function Button({ children }) {
  return (
    <button className='text-md bg-yellow-400 border-yellow-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-yellow-400 dark:hover:text-zinc-950 transition-all duration-200 ease-in-out outline-none dark:bg-zinc-900 border-2 dark:text-yellow-400 dark:border-yellow-400 w-full md:w-auto cursor-pointer'>
      {children}
    </button>
  );
}

export default Button;
