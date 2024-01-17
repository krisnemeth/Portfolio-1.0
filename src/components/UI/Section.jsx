function Section({ id, children }) {
  return (
    <section
      id={id}
      className='flex flex-col w-full px-0 md:px-20 lg:px-24 xl:px-28 py-10 min-h-screen'
    >
      {children}
    </section>
  );
}

export default Section;
