import { TypeAnimation } from 'react-type-animation';

function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End Developer',
        2000, // wait 1s before replacing
        'Web Designer',
        2000,
        'Tech Enthusiast',
        2000,
        'Cat Parent',
        2000,
      ]}
      wrapper='span'
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

export default AnimatedText;
