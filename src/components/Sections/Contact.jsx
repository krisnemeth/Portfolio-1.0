import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

function Contact() {
  return (
    <Section id='contact'>
      <div className=''>
        <SectionTitle section={{ no: '03', title: 'Contact' }} />

        <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10'>
          <div className='flex flex-col items-center justify-center md:py-2 md:pb-4 md:border-2 md:border-zinc-800 dark:border-zinc-500 lg:shadow-xl'>
            <form
              action='https://getform.io/f/5968f0bf-6804-429f-aba7-bc459bf67833'
              method='POST'
              encType='multipart/form-data'
              className='flex flex-col w-full px-0 md:py-4 lg:py-8 md:px-14 lg:px-24'
            >
              <div className='flex flex-col my-2'>
                <label className='text-zinc-800 dark:text-zinc-400'>Name</label>
                <input
                  className='border-2 focus:outline-none focus:border-0 focus:ring focus:ring-yellow-400 p-2 flex bg-slate-200 border-zinc-800 w-full md:w-full dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-500'
                  type='text'
                  name='name'
                />
              </div>
              <div className=' my-2'>
                <label className='text-zinc-800 dark:text-zinc-400'>
                  Phone
                </label>
                <input
                  className='border-2 focus:outline-none focus:border-0 focus:ring focus:ring-yellow-400 p-2 flex bg-slate-200 border-zinc-800 w-full md:w-full dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-500'
                  type='text'
                  name='phone'
                />
              </div>
              <div className=' my-2'>
                <label className='text-zinc-800 dark:text-zinc-400'>
                  Email
                </label>
                <input
                  className='border-2 focus:outline-none focus:border-0 focus:ring focus:ring-yellow-400 p-2 flex bg-slate-200 border-zinc-800 w-full md:w-full dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-500'
                  type='email'
                  name='email'
                />
              </div>
              <div className=' my-2'>
                <label className='text-zinc-800 dark:text-slate-400'>
                  Subject
                </label>
                <input
                  className='border-2 focus:outline-none focus:border-0 focus:ring focus:ring-yellow-400 p-2 flex bg-slate-200 border-zinc-800 w-full md:w-full dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-500'
                  type='text'
                  name='subject'
                />
              </div>
              <div className=' my-2'>
                <label className='text-zinc-800 dark:text-zinc-400'>
                  Message
                </label>
                <textarea
                  className='border-2 focus:outline-none focus:border-0 focus:ring focus:ring-yellow-400 p-2 flex bg-slate-200 border-zinc-800 w-full md:w-full dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-500'
                  rows='4'
                  name='message'
                ></textarea>
              </div>

              <button className='bg-yellow-400 dark:bg-zinc-900 border-2 border-yellow-400 text-zinc-800 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-zinc-800 transition-all duration-200 ease-in-out focus:outline-none focus:border-0 focus:ring focus:ring-zinc-800 dark:focus:ring-zinc-800 dark:focus:bg-yellow-400 dark:focus:text-zinc-800 px-2 py-3 w-full mt-2 mb-4'>
                Send
              </button>
            </form>
          </div>

          <div className='hidden md:inline-block order-first md:order-first lg:order-first xl:order-2'>
            <div className='flex flex-col'>
              <p className='lg:text-center text-l p-4 md:px-0 md:pb-16 md:pt-0 text-zinc-800 dark:text-zinc-500'>
                Thanks for checking out my work!
              </p>
              <h2 className='lg:text-center text-6xl md:text-7xl 2xl:text-8xl p-4 md:px-0 md:pb-16 font-jetBrainsExtraBold text-zinc-800 dark:text-zinc-400'>
                Let's talk
              </h2>
              <p className='text-xl text-justify font-jetBrainsRegular text-zinc-800 dark:text-zinc-500 mb-14 md:pr-0'>
                If you liked what you've seen, please do{' '}
                <span className='font-jetBrainsExtraBold'>get in touch</span>. I
                am open to web developer positions, collaboration, projects or a
                chat.
              </p>
              <p className='text-xl text-justify font-jetBrainsRegular text-zinc-800 dark:text-zinc-500 py-2 md:pr-0'>
                Send me a message through the form, or get in touch directly via
                the e-mail on the right.{' '}
                <span className='font-jetBrainsExtraBold'>&rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
