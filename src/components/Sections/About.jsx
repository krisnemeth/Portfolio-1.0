import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

function About() {
  return (
    // <section
    //   className='flex flex-col w-full px-0 md:px-20 lg:px-24 xl:px-28 py-24 min-h-screen'
    //   id='about'
    // >
    <Section id='about'>
      <SectionTitle section={{ no: '00', title: 'About' }} />
      <div className='flex flex-col w-full'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-12 gap-8'>
          <div className='flex flex-col md:col-span-1 lg:col-span-2 xl:col-span-3 2xl:col-span-10 w-full h-full text-justify text-zinc-800 dark:text-zinc-400'>
            <p className='text-sm md:text-base lg:text-lg'>
              Hello! I'm Kris, and I'm a web designer and front-end developer
              based in{' '}
              <span className='font-jetBrainsExtraBold'>
                {' '}
                Glasgow, Scotland.
              </span>
            </p>
            <p className='text-sm md:text-base lg:text-lg pt-4'>
              I'm originally from Budapest, I've lived in the UK since 2017. I
              have been working in hospitality for the past decade, but I've
              always been interested in technology and computers. So much so,
              that I've built my own PC in 2019.
            </p>
            <p className='text-sm md:text-base lg:text-lg pt-4'>
              I got into coding in early 2020 and after a year of self-study,
              I've enrolled to a college course to learn more about web
              development in a more structured environment.
            </p>
            <div className='lg:hidden xl:inline-block'>
              <p className='text-sm md:text-base l:hidden xl:block lg:text-lg pt-4'>
                I've finished my studies at
                <span className='font-jetBrainsExtraBold'>
                  {' '}
                  City of Glasgow College{' '}
                </span>
                in 2023 with an
                <span className='font-jetBrainsExtraBold'> 'A'</span> grade on
                my{' '}
                <span className='font-jetBrainsExtraBold'>
                  Higher National Diploma
                </span>
                .
              </p>
            </div>
          </div>

          <div className='flex flex-col md:col-span-1 lg:col-span-2 xl:col-span-1 2xl:col-span-2 order-first md:order-2 lg:order-2 w-full h-full'>
            <a
              href='https://www.linkedin.com/in/krisztian-nemeth-3a41682a5/'
              target='_blank'
              rel='noopener noreferrer'
              title='LinkedIn Profile'
            >
              <img
                className='grayscale hover:grayscale-0 transition duration-500 ease-out object-cover border-2 border-zinc-800 dark:border-zinc-400 shadow-xl'
                src='/images/Portrait.png'
                alt='headshot'
              />
            </a>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:col-span-3 gap-8'>
          <div className='flex flex-col w-full h-full text-justify text-zinc-800 dark:text-zinc-400'>
            <div className='hidden lg:inline-block xl:hidden'>
              <p className='text-sm md:text-base l:hidden xl:block lg:text-lg pt-4'>
                I've finished my studies at
                <span className='font-jetBrainsExtraBold'>
                  {' '}
                  City of Glasgow College{' '}
                </span>
                in 2023 with an
                <span className='font-jetBrainsExtraBold'> 'A'</span> grade on
                my{' '}
                <span className='font-jetBrainsExtraBold'>
                  Higher National Diploma
                </span>
                .
              </p>
            </div>
            <p className='text-sm md:text-base lg:text-lg pt-4'>
              Since finishing the course I kept my studies a priority, expanding
              on my new and existing skills to build a solid front-end stack.{' '}
              <span className='font-jetBrainsExtraBold'>
                I am currently looking for my first tech position as a web
                developer.
              </span>
            </p>

            <p className='text-sm md:text-base lg:text-lg pt-4'>
              My current stack is versatile, and though mainly
              <span className='font-jetBrainsExtraBold'> JavaScript</span>{' '}
              based, I have experience with
              <span className='font-jetBrainsExtraBold'> PHP</span> and{' '}
              <span className='font-jetBrainsExtraBold'> MySQL</span> as well. I
              am familiar with front-end frameworks/libraries like{' '}
              <span className='font-jetBrainsExtraBold'> React</span> and
              <span className='font-jetBrainsExtraBold'> AngularJS</span>.
              Though I have experience with
              <span className='font-jetBrainsExtraBold'> HTML</span>,
              <span className='font-jetBrainsExtraBold'> CSS</span> and{' '}
              <span className='font-jetBrainsExtraBold'> SASS</span>, these days
              I prefer styling my applications with
              <span className='font-jetBrainsExtraBold'> TailwindCSS</span>.
              Beforehand, I used
              <span className='font-jetBrainsExtraBold'> Bootstrap</span>.
            </p>
            <p className='text-sm md:text-base lg:text-lg pt-4'>
              In my free time, I focus on learning new technologies through
              building projects. I also love spending time with my lovely
              girlfriend, playing video games, or playing drums, recently bass.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col-reverse items-start xl:flex-row mt-5'>
        <div className='flex flex-col w-full md:w-8/12 text-justify text-zinc-800 dark:text-zinc-400'>
          <p className='text-lg'>
            Hello! I'm Kris, and I'm a web designer and front-end developer
            based in{' '}
            <span className='font-jetBrainsExtraBold'> Glasgow, Scotland.</span>
          </p>
          <p className='text-lg pt-4'>
            I'm originally from Budapest, I've lived in the UK since 2017. I
            have been working in hospitality for the past decade, but I've
            always been interested in technology and computers. So much so, that
            I've built my own in PC 2019.
          </p>
          <p className='text-lg pt-4'>
            I've got into coding in early 2020 and after a year of self-study,
            I've enrolled to a college course to learn more about web
            development in a more structured environment. I've finished my
            studies at
            <span className='font-jetBrainsExtraBold'>
              {' '}
              City of Glasgow College{' '}
            </span>
            in 2023 with an
            <span className='font-jetBrainsExtraBold'> 'A'</span> grade on my{' '}
            <span className='font-jetBrainsExtraBold'>
              Higher National Diploma
            </span>
            .
          </p>
          <p className='text-lg pt-4'>
            Since finishing the course I kept my studies a priority, expanding
            on my new and existing skills to build a solid front-end stack.{' '}
            <span className='font-jetBrainsExtraBold'>
              I am currently looking for my first tech position as a web
              developer.
            </span>
          </p>
          <p className='text-lg pt-4'>
            My current stack is versatile, and though mainly
            <span className='font-jetBrainsExtraBold'> JavaScript</span> based,
            I have experience with
            <span className='font-jetBrainsExtraBold'> PHP</span> and{' '}
            <span className='font-jetBrainsExtraBold'> MySQL</span> as well. I
            am familiar with front-end frameworks/libraries like{' '}
            <span className='font-jetBrainsExtraBold'> React</span> and
            <span className='font-jetBrainsExtraBold'> AngularJS</span>. Though
            I have experience with
            <span className='font-jetBrainsExtraBold'> HTML</span>,
            <span className='font-jetBrainsExtraBold'> CSS</span> and{' '}
            <span className='font-jetBrainsExtraBold'> SASS</span>, these days I
            prefer styling my applications with
            <span className='font-jetBrainsExtraBold'> TailwindCSS</span>.
            Beforehand, I used
            <span className='font-jetBrainsExtraBold'> Bootstrap</span>.
          </p>
          <p className='text-lg pt-4'>
            In my free time, I focus on learning new technologies through
            building projects. I also love spending time with my lovely
            girlfriend, playing video games, or playing drums or recently, bass.
          </p>
        </div>

        <div className='flex w-full h-full mb-4 md:ml-8 md:w-4/12 md:mb-0 border-2 border-zinc-800 shadow-2xl'>
          <div className=''>
            <img
              className='object-cover dark:border-2 dark:border-zinc-400'
              src='src/assets/headshot.jpeg'
              alt='headshot'
            />
          </div>
        </div>
      </div> */}
    </Section>
  );
}

export default About;
